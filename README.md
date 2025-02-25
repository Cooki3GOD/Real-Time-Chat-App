# Real-Time Chat App

A real-time chat application built with modern web technologies to provide seamless communication between users. This project is designed to showcase the capabilities of real-time data streaming and user interactions.

## Features

- Real-time messaging between users
- User authentication and authorization
- Responsive and user-friendly interface
- Support for multiple chat rooms
- Notifications for new messages
- User presence indicators

## Technologies Used

- **FrontEnd:**
  - React
  - Vite
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express
  - WebSocket (Socket.IO)
- **Database:**
  - MongoDB
- **Authentication:**
  - JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Cooki3GOD/Real-Time-Chat-App.git
    cd Real-Time-Chat-App
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `backend` directory and add the following variables:
    ```plaintext
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```bash
    cd frontend
    npm run dev ▋
