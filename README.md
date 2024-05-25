# Bookstore

Welcome to the Bookstore project! This project is a web application built with a React frontend using Vite, and a Node.js backend. The book data is stored in MongoDB, and the application includes several features such as login, logout, notifications, and theme modes.

## Table of Contents

## Features

- Home, Courses, Contact, About, and Login sections
- User authentication (Login and Signup)
- Notifications for login and signup using toast
- Conditional rendering of the Courses page based on login status
- Dark mode and light mode toggle
- Free books displayed on the home page
- Responsive design

- ## Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Compass)

- 
## Installation

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/bookstore.git
   cd bookstore
   

# Navigate to frontend directory
   ```sh
   cd frontend
   npm install
   ```

# Navigate to backend directory
```sh
cd ../backend
npm install
```

```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

# Run backend server
```sh
cd backend
npm start
```

# Run frontend server
```sh
cd ../frontend
npm run dev
```

# Frontend

The frontend is built with React and Vite. It includes the following major components:

- Home: Displays free books.
- Courses: Accessible only when the user is logged in.
- Contact: Contact form.
- About: Information about the bookstore.
- Login: User authentication.
- Signup: User registration.

Dark Mode and Light Mode

The application supports dark mode and light mode, which can be toggled by the user.

# Backend

The backend is built with Node.js and Express.js. It handles user authentication, serves API routes, and connects to MongoDB.

User Authentication

The backend uses JWT for user authentication.

Database

The database is MongoDB, and it is used to store user information and book data.
