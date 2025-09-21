<div align="center">
  <img src="https://your-image-hosting-url.com/think-ai-banner.png" alt="think.ai Banner" width="800"/>
</div>

# think.ai: AI-Powered Content Creation Suite

<div align="center">

[![React][React.js]][React-url]
[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![PostgreSQL][PostgreSQL]][PostgreSQL-url]
[![License: MIT][License-shield]][License-url]

</div>

**think.ai** is a versatile, full-stack AI-powered content creation suite designed to help creators, marketers, and developers streamline their workflows. It leverages modern AI APIs to provide a range of tools, from writing articles and generating images to reviewing professional documents.

---

## ## ✨ Features

think.ai offers a collection of powerful and easy-to-use tools:

* ✍️ **AI Article Writer:** Generate full-length articles from a simple prompt.
* 💡 **Blog Title Generator:** Create catchy and SEO-friendly titles for your content.
* 🖼️ **Text-to-Image Generation:** Bring your ideas to life by creating stunning visuals from text descriptions.
* 🔪 **Background Remover:** Instantly remove the background from any image.
* 🚫 **Object Remover:** Clean up your photos by removing unwanted objects.
* 📄 **Resume Reviewer:** Get constructive AI-powered feedback on your resume to improve your job prospects.

---

## ## 🚀 Tech Stack

This project is built with a modern, scalable tech stack:

* **Frontend:** React, Material-UI (MUI)
* **Backend:** Node.js, Express.js
* **Database:** Neon (Serverless PostgreSQL)
* **Authentication:** Clerk for secure user management and tiered access.
* **AI & Cloud Services:**
    * Google Gemini API
    * Cloudinary AI
    * ClipDrop API
* **Deployment:** Vercel



---

## ## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/think-ai.git](https://github.com/your-username/think-ai.git)
    cd think-ai
    ```

2.  **Install Frontend Dependencies:**
    ```sh
    cd client
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```sh
    cd ../server
    npm install
    ```

4.  **Set Up Environment Variables:**
    You will need to create `.env` files for both the `client` and `server` directories.

    * In the `client` folder, create a `.env` file (`client/.env`):
        ```env
        # Get this from your Clerk Dashboard
        VITE_CLERK_PUBLISHABLE_KEY=pk_test_***************************
        ```

    * In the `server` folder, create a `.env` file (`server/.env`):
        ```env
        # Get these from your Clerk Dashboard
        CLERK_SECRET_KEY=sk_test_***************************

        # Get this from your Neon Dashboard
        NEON_DATABASE_URL="postgres://user:password@host.neon.tech/dbname?sslmode=require"

        # Get these from their respective API providers
        GEMINI_API_KEY=***************************
        CLIPDROP_API_KEY=***************************
        CLOUDINARY_CLOUD_NAME=***************************
        CLOUDINARY_API_KEY=***************************
        CLOUDINARY_API_SECRET=***************************
        ```

### Running the Application

1.  **Start the Backend Server:**
    ```sh
    cd server
    npm run dev
    ```

2.  **Start the Frontend Development Server:**
    Open a new terminal window.
    ```sh
    cd client
    npm run dev
    ```
    Your application should now be running locally at `http://localhost:5173`.

---

## ## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[License-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[License-url]: https://github.com/your-username/think-ai/blob/main/LICENSE
