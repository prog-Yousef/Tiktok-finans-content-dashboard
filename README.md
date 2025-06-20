﻿# TikTok Finanscontent Dashboard
 

This project is a web-based dashboard designed to help manage and plan TikTok content related to finance. It includes features such as:

*   **Innehållskalender (Content Calendar):** Plan and visualize your content schedule.
*   **Statistik (Statistics):** Track follower goals, video output, and engagement rates.
*   **Idégenerator (Idea Generator):** Get random content ideas tailored to your niche.
*   **AI-Verktyg (AI Tools):** (Placeholder for AI tools to assist content creation)
*   **Workflow Tracker:** Manage content production stages using a Kanban-style board (Ideas, Planned, Filming, Editing, Published).
*   **Inspiration:** Discover trending topics and see examples from successful finance influencers.

## Setup and Running the Project

This is a static website built with HTML, CSS, and JavaScript. No special build process is required.

**To run the project:**

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Open `index.html` in your web browser:**
    *   Navigate to the project directory in your file explorer.
    *   Double-click the `index.html` file. This will open the dashboard in your default web browser.

**Alternative (using a local web server - requires Python):**

If you have Python installed, you can serve the files using a simple built-in web server for a more development-like environment (e.g., to avoid issues with `file:///` paths for certain browser functionalities).

1.  Open your terminal or command prompt.
2.  Navigate to the project directory (`tiktok-finans-dashboard`).
3.  Run the following command:
    ```bash
    python -m http.server
    ```
    (If you have Python 2, the command is `python -m SimpleHTTPServer`)
4.  Open your web browser and go to `http://localhost:8000` (or the port number shown in the terminal).

This will serve the `index.html` file and the rest of the project assets.
