                             MERN_STACKAI_CHATBOT

Table of Contents:

* Introduction
* Features
* Tech Stack
* Installation
* Usage
* Project Structure
* Contributing
* License
* Contact
  
Introduction:
* The MERN_STACKAI_CHATBOT is an AI-driven chatbot built using the MERN (MongoDB, Express.js, React, Node.js) stack.
* It leverages advanced AI algorithms to provide intelligent responses and enhance user interaction.
* It is a modern AI project which uses openAIAPI to create an AI real time chatbot.
* The Ui is capable of showing code blocks if required by the user.
* The user session will be active for 5 days using HTTPS Cookies.

Features:
1. AI-Powered Responses: Utilizes AI to provide relevant and intelligent responses.
2. Real-time Communication: Supports real-time chat functionalities.
3. User Authentication: Secure user login and registration.
4. Scalable Architecture: Built to handle a growing user base with ease.
5. Easy to Customize: Modular design allowing for easy customization and extension.
   
Tech Stack:
Frontend:
          1. React.js
          2. HTML
          3.  CSS
          4. JavaScript
Backend:
           1. Node.js
           2. Express.js
           
Database: MongoDB

AI Algorithms: Implemented using relevant AI libraries and frameworks


Installation
Prerequisites:
* Node.js
* MongoDB
* Git
  
Steps:
Clone the repository:
git clone https://github.com/Saikrishna251203/MERN-STACK-AI-CHATBOT.git
cd MERN-STACK-AI-CHATBOT

Install dependencies:
Backend:
cd backend

npm install

Frontend:
cd ../frontend

npm install

Set up environment variables:
Create a .env file in the backend directory and add the following:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Run the application:

Backend:
cd backend
npm start

Frontend:
cd frontend
npm start

Usage:
1. Start the development server:
* Backend runs on http://localhost:5000
* Frontend runs on http://localhost:3000
2. Open your browser:
* Navigate to http://localhost:3000 to see the application in action.
  
Project Structure:
java
Copy code
MERN_STACKAI_CHATBOT/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   ├── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md

Contributions:
Contributions are welcome! Please follow these steps to contribute
Steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature-name).
6. Open a pull request.

License:
This project is licensed under the MIT License - see the LICENSE file for details.

Contact:
TADEPALLI SAI KRISHNA
GitHub: Saikrishna251203
Email: krishnasaitadepalli@gmail.com
