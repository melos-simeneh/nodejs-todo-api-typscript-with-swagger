# Todo API with Express.js & Swagger

A simple **Todo API** built using **Express.js** for managing todos. This API allows users to perform **CRUD**(Create, Read, Update, Delete) operations on todos. The API documentation is available via **Swagger UI** for easy testing and usage.

## Features

- **GET /todos**: Get a list of all todos.
- **GET /todos/{id}**: Get a single todo by its ID.
- **POST /todos**: Create a new todo.
- **PUT /todos/{id}**: Update a specific todo by its ID.
- **DELETE /todos/{id}**: Delete a todo by its ID.

## Installation

### Prerequisites

- Node.js (version 14 or above)
- npm (Node Package Manager)

### Steps to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/melos-simeneh/nodejs-todo-api-with-swagger.git
   ```

2. **Navigate to the project directory:**
After cloning the repo, move to the project folder:

   ```bash
   cd nodejs-todo-api-with-swagger
   ```

3. **Install dependencies:**
Install all required dependencies using npm:

    ```bash
    npm install
    ```

4. **Start the server:**
Once dependencies are installed, start the server:

    ```bash
    npm start
    ```

The server will be running locally at [http://localhost:3000](http://localhost:3000)

## API Documentation via Swagger

Once the server is running, you can access the Swagger UI to view and test the API endpoints:

1. Open your browser and go to: [http://localhost:3000/docs](http://localhost:3000/docs)
2. The Swagger UI will display all available routes and allow you to interact with the API directly from the browser

## Example Requests

### 1. GET /todos

Fetch all todos.

**Request:**

```bash
GET http://localhost:3000/todos
```

**Response:**

```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false
  },
  {
    "id": 2,
    "title": "Read a book",
    "completed": true
  }
]
```

### 2. POST /todos

Create a new todo.

**Request:**

```bash
POST http://localhost:3000/todos
```

**Body:**

```json
{
  "title": "Complete project",
  "completed": false
}
```

**Response:**

```json
{
  "id": 3,
  "title": "Complete project",
  "completed": false
}
```

### 3. PUT /todos/{id}

Update a specific todo by ID.

**Request:**

```bash
PUT http://localhost:3000/todos/3
```

**Body:**

```json
{
  "title": "Complete project (updated)",
  "completed": true
}
```

**Response:**

```json
{
  "id": 3,
  "title": "Complete project (updated)",
  "completed": true
}
```

### 4. DELETE /todos/{id}

Delete a specific todo by ID.

**Request:**

  ```bash
  DELETE http://localhost:3000/todos/3
  ```

**Response:**

```json
{
  "message": "Todo with id 3 deleted."
}
```

## Contributing

Contributions are welcome! Feel free to fork the repository, create a branch, and submit a pull request with your proposed changes.

## Thank You

Thank you for checking out this Todo API! I hope this project helps you in building and managing your own APIs. If you have any feedback, questions, or suggestions, feel free to open an issue or reach out!
