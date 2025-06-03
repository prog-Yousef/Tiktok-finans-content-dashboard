import React, { useState, useEffect, useRef } from 'react';

const DEEPSEEK_API_KEY = 'sk-87a99d899294452195d5c27b6f891f32'; // IMPORTANT: Move to a secure backend in production!
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

// Temporarily simplified for testing
const DEFAULT_SYSTEM_PROMPT = "Du är en hjälpsam AI-assistent."; 

/* Original detailed prompt was here, commented out for now:
const DEFAULT_SYSTEM_PROMPT = `Du är en världsklassig trading-expert och finansiell rådgivare med djup specialisering inom följande områden:

**TEKNISK EXPERTIS:**
- ICT (Inner Circle Trader) koncept: Du behärskar perfekt alla Michael J. Huddleston\'s metoder inklusive Order Blocks, Fair Value Gaps, Market Structure Analysis, Institutional Order Flow, och Smart Money Concepts[1][11][16]
- Imbalance Trading: Du identifierar och handlar imbalancer (IMB) som uppstår när köp-/säljorder är obalanserade, inklusive Fair Value Gaps och prismagnet-effekter[2][12]
- Breaker Blocks: Du förstår hur misslyckade Order Blocks blir Breaker Blocks och använder dessa för reversal-trading och trendomvändningar[3]
- Liquidity Sweeps: Du identifierar när institutionella aktörer "jagar" stop-losses och skapar bull/bear traps för att fylla stora ordrar[4]

**EKONOMISK MÄSTARSKAP:**
- Makroekonomi: Du analyserar räntor, inflation, arbetslöshet, BNP, centralbanksuttalanden och geopolitiska händelser för trading-beslut[8][14]
- Mikroekonomi: Du förstår utbud/efterfrågan, prismekanismer, konsumentbeteende och företagsbeslut som påverkar individuella aktier och sektorer[9][15]

**US30 DOW JONES SPECIALISERING:**
Du är världens främsta expert på US30 Dow Jones daytrading med:
- Perfekt förståelse för alla 30 komponentaktiers påverkan
- Expertis inom index-arbitrage och spread-trading
- Djup kunskap om hur makroekonomiska data påverkar industriindex
- Specialisering på öppnings- och stängningstider, volatilitetsmönster

**REALTIDSINFORMATION:**
När användare frågar om marknadsdata ska du hämta senaste timmarnas information från:
- Twitter: @LiveSquawk (https://x.com/LiveSquawk)
- Twitter: @DeItaone (https://x.com/DeItaone)
Fokusera särskilt på senaste timmen för dagsaktuell information, men kan referera till äldre data vid behov.

**INKOMST- OCH NETWORTH-STRATEGIER:**
Du ger detaljerade råd om:
- Kapitaleffektiva handelsstrategier med minimal startkapital
- Risk management för småsparare
- Diversifierade inkomstströmmar genom trading
- Långsiktiga wealth-building strategier
- Tax-optimerade investeringsstrukturer

**SVARSSTIL:**
- Ge alltid detaljerade, tekniskt precisa svar
- Inkludera specifika entry/exit-nivåer när möjligt
- Förklara reasoning bakom varje rekommendation
- Använd ICT-terminologi korrekt
- Inkludera risk management för varje förslag
- Fokusera på daytrading-möjligheter
- Citera relevanta Twitter-källor när du använder realtidsdata

**SÄKERHETSNOTERING:**
Du ger utbildningsbaserade tradingråd och strategier. Alla användare ska göra egen due diligence och handla på egen risk.

Börja varje svar med en kort sammanfattning av aktuella marknadsförhållanden baserat på senaste informationen från dina källor.
`;
*/

const Chatbot = ({ initialSystemMessage, embedded = false }) => {
  // messagesForDisplay will not include system messages for a cleaner UI
  const [messagesForDisplay, setMessagesForDisplay] = useState([]);
  // internalMessages will include the system prompt for API calls
  const [internalMessages, setInternalMessages] = useState([]); 
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messagesForDisplay]);

  useEffect(() => {
    const systemPromptToUse = initialSystemMessage || DEFAULT_SYSTEM_PROMPT;
    // Initialize internal messages with the system prompt
    // Only update if the first message isn't the system prompt or if the prompt content differs
    if (internalMessages.length === 0 || internalMessages[0].role !== 'system' || internalMessages[0].content !== systemPromptToUse) {
        setInternalMessages([{ role: 'system', content: systemPromptToUse }]);
    }
    // No need to update messagesForDisplay with system prompt here, it remains hidden
  }, [initialSystemMessage]); // Corrected dependency array

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const newUserMessage = { role: 'user', content: inputValue };
    
    // Update messages for display (UI)
    setMessagesForDisplay(prev => [...prev, newUserMessage]);
    
    // Update internal messages for API call, ensuring system prompt is first
    let updatedInternalMessages;
    if (internalMessages.length === 0 || internalMessages[0].role !== 'system') {
      const systemPromptToUse = initialSystemMessage || DEFAULT_SYSTEM_PROMPT;
      updatedInternalMessages = [{ role: 'system', content: systemPromptToUse }, newUserMessage];
    } else {
      updatedInternalMessages = [...internalMessages, newUserMessage];
    }
    setInternalMessages(updatedInternalMessages);
    
    setInputValue('');
    setIsLoading(true);

    // Add a placeholder for the assistant's response for streaming
    setMessagesForDisplay(prev => [...prev, { role: 'assistant', content: '' }]);

    // Prepare messages for API from internalMessages
    const apiMessages = updatedInternalMessages.map(msg => ({ role: msg.role, content: msg.content }));

    try {
      const response = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: apiMessages, 
          stream: true, // Enable streaming
        }),
      });

      if (!response.ok) {
        const errorData = await response.text(); // Read error as text first
        console.error('DeepSeek API Error Text:', errorData);
        let structuredError = { message: `API request failed with status ${response.status}. Response: ${errorData}`};
        try { structuredError = JSON.parse(errorData).error || structuredError; } catch (parseError) { /* Keep text error */ }
        throw new Error(structuredError.message || `API request failed: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantResponse = '';
      let stopReading = false; // Flag to control the loop

      // Loop until stopReading is true
      while (!stopReading) {
        const { done, value } = await reader.read();
        if (done) {
          stopReading = true; // Stream ended
          break;
        }

        const chunk = decoder.decode(value, { stream: true }); // Added { stream: true }
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonData = line.substring(6);
            if (jsonData.trim() === '[DONE]') {
              stopReading = true; // [DONE] signal received
              break; // Exit the for-loop for lines
            }
            try {
              const parsedChunk = JSON.parse(jsonData);
              if (parsedChunk.choices && parsedChunk.choices[0].delta && parsedChunk.choices[0].delta.content) {
                const contentPiece = parsedChunk.choices[0].delta.content;
                assistantResponse += contentPiece;
                setMessagesForDisplay(prev => 
                  prev.map((msg, index) => 
                    index === prev.length - 1 ? { ...msg, content: assistantResponse } : msg
                  )
                );
              }
            } catch (error) {
              console.error('Error parsing stream chunk:', jsonData, error);
              // Optionally, set an error message in UI or make stopReading = true if critical
            }
          }
        }
        // The erroneous 'if (line.includes('[DONE]')) break;' which was causing a ReferenceError has been removed from here.
      }
      
      // Final update to internal messages with the complete assistant response
      setInternalMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);

    } catch (error) {
      console.error('Error sending message to DeepSeek:', error);
      const errorMessageContent = `Ursäkta, något gick fel: ${error.message}`;
      setMessagesForDisplay(prev => 
        prev.map((msg, index) => 
          index === prev.length - 1 ? { ...msg, content: errorMessageContent, error: true } : msg
        )
      );
      // Optionally, if the last message was the placeholder, remove it or mark as error
      // No need to add error to internalMessages generally, as it's a client/network side issue or API error
    } finally {
      setIsLoading(false);
    }
  };

  const chatHeightClass = embedded ? 'h-64' : 'h-[calc(100vh-280px)] sm:h-[calc(100vh-240px)]';
  const chatContainerClass = embedded ? 'border border-slate-700 rounded-lg' : '';

  return (
    <div className={`flex flex-col p-2 sm:p-4 bg-slate-800 dark:bg-slate-900 text-slate-100 rounded-lg shadow-xl ${chatContainerClass} ${embedded ? 'w-full h-full' : 'h-full'}`}>
      <div className={`flex-grow overflow-y-auto mb-4 pr-2 space-y-3 ${chatHeightClass} custom-scrollbar`}>
        {messagesForDisplay.map((msg, index) => (
          // No need to check for msg.role === 'system' here as it's filtered out from messagesForDisplay
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[70%] p-3 rounded-xl shadow ${
                msg.role === 'user' 
                  ? 'bg-indigo-500 text-white rounded-br-none' 
                  : (msg.error ? 'bg-red-500 text-white rounded-bl-none' : 'bg-slate-600 dark:bg-slate-700 text-slate-100 rounded-bl-none')
              }`}
            >
              {msg.role === 'assistant' && msg.content === '' && !isLoading && !msg.error && (
                // This is a simple text-based loading indicator for the streaming message
                <span className="italic opacity-75">AI:n skriver...</span>
              )}
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 bg-slate-700 dark:bg-slate-800 rounded-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isLoading ? "AI:n tänker..." : "Fråga din trading-expert..."} 
          className="flex-grow p-2 sm:p-3 rounded-lg bg-slate-600 dark:bg-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading || !inputValue.trim()} // Also disable if input is empty
          className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : "Skicka"}
        </button>
      </form>
       {!embedded && (
        <p className="text-xs text-slate-500 mt-2 text-center">
          Kom ihåg: API-nyckeln är för närvarande hårdkodad. Detta är osäkert för produktion.
        </p>
      )}
    </div>
  );
};

export default Chatbot; 