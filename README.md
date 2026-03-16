# Recipe CRUD API

A simple beginner-friendly CRUD API for managing recipes using Node.js, Express.js, and MongoDB.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Project Structure

```text
.
|-- app.js
|-- config/
|   `-- db.js
|-- controllers/
|   `-- recipeController.js
|-- middleware/
|   `-- errorHandler.js
|-- models/
|   `-- Recipe.js
|-- routes/
|   `-- recipeRoutes.js
|-- .env.example
`-- README.md
```

## Features

- Create a recipe
- Get all recipes
- Get one recipe by ID
- Update a recipe by ID
- Delete a recipe by ID

## Recipe Fields

Each recipe has:

- `title` - string, required, unique
- `description` - string, required
- `ingredients` - array of strings, required
- `instructions` - array of strings, required
- `cookingTime` - number in minutes, required
- `servings` - number, required
- `difficulty` - `Easy`, `Medium`, or `Hard`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example`.

3. Make sure MongoDB is running locally or update `MONGODB_URI` with your MongoDB connection string.

4. Start the application:

```bash
npm run dev
```

The API will run at `http://localhost:5000`.

## API Endpoints

### 1. Create Recipe

- Method: `POST`
- URL: `/api/recipes`

Sample request body:

```json
{
  "title": "Vegetable Pasta",
  "description": "A quick and healthy pasta recipe with fresh vegetables.",
  "ingredients": ["Pasta", "Tomato", "Capsicum", "Olive oil", "Salt"],
  "instructions": ["Boil the pasta", "Saute vegetables", "Mix and serve"],
  "cookingTime": 25,
  "servings": 2,
  "difficulty": "Easy"
}
```

Sample response:

```json
{
  "_id": "65f0d7a18f3b8d22a4b97c01",
  "title": "Vegetable Pasta",
  "description": "A quick and healthy pasta recipe with fresh vegetables.",
  "ingredients": ["Pasta", "Tomato", "Capsicum", "Olive oil", "Salt"],
  "instructions": ["Boil the pasta", "Saute vegetables", "Mix and serve"],
  "cookingTime": 25,
  "servings": 2,
  "difficulty": "Easy",
  "createdAt": "2026-03-10T06:30:00.000Z",
  "updatedAt": "2026-03-10T06:30:00.000Z"
}
```

### 2. Get All Recipes

- Method: `GET`
- URL: `/api/recipes`

Sample response:

```json
[
  {
    "_id": "65f0d7a18f3b8d22a4b97c01",
    "title": "Vegetable Pasta",
    "description": "A quick and healthy pasta recipe with fresh vegetables.",
    "ingredients": ["Pasta", "Tomato", "Capsicum", "Olive oil", "Salt"],
    "instructions": ["Boil the pasta", "Saute vegetables", "Mix and serve"],
    "cookingTime": 25,
    "servings": 2,
    "difficulty": "Easy",
    "createdAt": "2026-03-10T06:30:00.000Z",
    "updatedAt": "2026-03-10T06:30:00.000Z"
  }
]
```

### 3. Get Recipe By ID

- Method: `GET`
- URL: `/api/recipes/:id`

Sample response:

```json
{
  "_id": "65f0d7a18f3b8d22a4b97c01",
  "title": "Vegetable Pasta",
  "description": "A quick and healthy pasta recipe with fresh vegetables.",
  "ingredients": ["Pasta", "Tomato", "Capsicum", "Olive oil", "Salt"],
  "instructions": ["Boil the pasta", "Saute vegetables", "Mix and serve"],
  "cookingTime": 25,
  "servings": 2,
  "difficulty": "Easy",
  "createdAt": "2026-03-10T06:30:00.000Z",
  "updatedAt": "2026-03-10T06:30:00.000Z"
}
```

### 4. Update Recipe

- Method: `PUT`
- URL: `/api/recipes/:id`

Sample request body:

```json
{
  "cookingTime": 30,
  "difficulty": "Medium"
}
```

Sample response:

```json
{
  "_id": "65f0d7a18f3b8d22a4b97c01",
  "title": "Vegetable Pasta",
  "description": "A quick and healthy pasta recipe with fresh vegetables.",
  "ingredients": ["Pasta", "Tomato", "Capsicum", "Olive oil", "Salt"],
  "instructions": ["Boil the pasta", "Saute vegetables", "Mix and serve"],
  "cookingTime": 30,
  "servings": 2,
  "difficulty": "Medium",
  "createdAt": "2026-03-10T06:30:00.000Z",
  "updatedAt": "2026-03-10T06:35:00.000Z"
}
```

### 5. Delete Recipe

- Method: `DELETE`
- URL: `/api/recipes/:id`

Sample response:

```json
{
  "message": "Recipe deleted successfully"
}
```

## Testing With Postman

Use Postman manually to send requests to the API.

- `POST /api/recipes`
- `GET /api/recipes`
- `GET /api/recipes/:id`
- `PUT /api/recipes/:id`
- `DELETE /api/recipes/:id`

## Error Handling

The API returns simple JSON error messages for invalid IDs, missing routes, validation errors, duplicate titles, and server errors.
