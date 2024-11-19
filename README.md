# Backend API Project - freeCodeCamp

This project is part of the **Back End Development and APIs** course on freeCodeCamp. It is a simple Express-based API, demonstrating how to handle various HTTP methods, middleware, and request body parsing in Node.js.

## Features

- **Logging Middleware**: Logs the HTTP method, path, and IP address of incoming requests.
- **GET `/json`**: Responds with a JSON object that contains a message. The message can be converted to uppercase based on an environment variable (`MESSAGE_STYLE`).
- **GET `/now`**: Responds with the current date and time in a JSON object.
- **GET `/name`**: Accepts query parameters (`first` and `last`) and responds with a JSON object containing the full name.
- **POST `/name`**: Accepts form data (`first` and `last`) and responds with a JSON object containing the full name.
- **Static Files**: Serves static files from the `/public` directory.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend-api-project.git
   ```

2. Install dependencies:
   ```bash
   cd backend-api-project
   npm install
   ```

3. Create a `.env` file in the root of the project and add the following line to configure the message style (optional):
   ```bash
   MESSAGE_STYLE=uppercase
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. The app will be running at `http://localhost:3000`.

## Routes

- `GET /`: Serves the `index.html` file.
- `GET /json`: Responds with a JSON message, which can be converted to uppercase.
- `GET /now`: Responds with the current date and time.
- `GET /:word/echo`: Responds with the echo of the given word.
- `GET /name`: Responds with the full name based on query parameters (`first` and `last`).
- `POST /name`: Responds with the full name based on form data (`first` and `last`).

## Technologies Used

- **Node.js**
- **Express**
- **dotenv**
- **body-parser**
