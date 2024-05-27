# Employee Management System

This is a simple employee management system built with React, Node.js, Express, and MongoDB. It allows you to add, edit, and delete employees.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download &amp; Install Node.js](https://nodejs.org/)
- MongoDB: [Download &amp; Install MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. **Install app:**
   In your folder of project where you will build the project, open the terminal and then input the following command below, remember both of the folder is different so must be using "cd ../" to out of the current working directory to create a new folder.

Create your react(client) application using [Vite](https://vitejs.dev/guide/)

```bash
    mkdir client
    cd client
    npm init vite@latest
```

Create your nodejs express app

```bash
    cd ../
    mkdir server
    cd server
    npm init -y
```

2. **Install dependencies:**

   ```bash
   cd client
   npm install
   npm install axios react-toastify react-router-dom
   npm install dotenv
   cd ../server
   npm install express mongoose cors
   npm install -D nodemon
   ```

## Configuration

1. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following variables:

   ```
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   ```

   Replace `your-mongodb-uri` with the connection string for your MongoDB database.

2. **Configure package.json:**

   Update the `package.json` file in the `server` directory to include a script for running the server:

   ```json
   "scripts": {
     "dev": "nodemon index.js"
   }
   ```

## Running the Application

1. **Start the server:**

   ```bash
   cd server
   npm run dev
   ```

2. **Start the client:**

   ```bash
   cd client
   npm run dev
   ```

## Usage

- **View Employee List:** Navigate to the home page to view the list of employees.
- **Add Employee:** Click on the "Add New Employee" button to add a new employee.
- **Edit Employee:** Click on the "Edit" link next to an employee to edit their details.
- **Delete Employee:** Click on the "Delete" button next to an employee to delete them.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
