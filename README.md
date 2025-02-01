# Book API

This is a RESTful API for managing books in a MongoDB database. The API allows you to fetch, add, and edit books, with endpoints for searching books by ID, title, and a random book selection.

### Table of Contents
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [GET /book/id](#get-bookid)
  - [GET /book/title](#get-booktitle)
  - [GET /book/random](#get-bookrandom)
  - [POST /book/new](#post-booknew)
  - [PATCH /book/edit](#patch-bookedit)
- [Database](#database)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

---

## API Endpoints

### 1. **GET /** - Get all books
Fetches a list of all books in the database.

**Request**: 
```bash
GET https://bookapi-9m7j.onrender.com/
```

**Response**: A JSON array containing all books.
```json
[
  {
    "title": "Book Title",
    "author_name": "Author Name",
    "review": "Review text",
    "isbn": 1234567890,
    "img": "image_url",
    "category": "Category",
    "description": "Description text",
    "rating": 4.5
  },
  ...
]
```

### 2. **GET /book/id** - Get a book by ID
Fetches a specific book by its unique ID.

**Request**: 
```bash
GET https://bookapi-9m7j.onrender.com/book/id?id=<book-id>
```

**Response**: A JSON object containing the book details.
```json
{
  "title": "Book Title",
  "author_name": "Author Name",
  "review": "Review text",
  "isbn": 1234567890,
  "img": "image_url",
  "category": "Category",
  "description": "Description text",
  "rating": 4.5
}
```

### 3. **GET /book/title** - Get a book by title
Fetches a specific book by its title.

**Request**: 
```bash
GET https://bookapi-9m7j.onrender.com/book/title?title=<book-title>
```

**Response**: A JSON object containing the book details.

```json
{
  "title": "Book Title",
  "author_name": "Author Name",
  "review": "Review text",
  "isbn": 1234567890,
  "img": "image_url",
  "category": "Category",
  "description": "Description text",
  "rating": 4.5
}
```

### 4. **GET /book/random** - Get a random book
Fetches a random book from the database.

**Request**:
```bash
GET https://bookapi-9m7j.onrender.com/book/random
```

**Response**: A JSON object containing a randomly selected book.
```json
{
  "title": "Random Book Title",
  "author_name": "Random Author Name",
  "review": "Review text",
  "isbn": 9876543210,
  "img": "image_url",
  "category": "Category",
  "description": "Description text",
  "rating": 4.0
}
```

### 5. **POST /book/new** - Add a new book
Adds a new book to the database.

**Request**: 
```bash
POST https://bookapi-9m7j.onrender.com/book/new
```

**Body**: The book data to add (in JSON format).
```json
{
  "title": "New Book Title",
  "author_name": "Author Name",
  "review": "Review text",
  "isbn": 1234567890,
  "img": "image_url",
  "category": "Category",
  "description": "Description text",
  "rating": 4.5
}
```

**Response**: A JSON object confirming the book has been added.
```json
{
  "message": "Book added successfully",
  "book": {
    "title": "New Book Title",
    "author_name": "Author Name",
    "review": "Review text",
    "isbn": 1234567890,
    "img": "image_url",
    "category": "Category",
    "description": "Description text",
    "rating": 4.5
  }
}
```

### 6. **PATCH /book/edit** - Edit an existing book
Updates details of an existing book.

**Request**: 
```bash
PATCH https://bookapi-9m7j.onrender.com/book/edit?id=<book-id>
```

**Body**: The updated book data (in JSON format).
```json
{
  "title": "Updated Book Title",
  "author_name": "Updated Author Name",
  "review": "Updated Review text",
  "isbn": 9876543210,
  "img": "new-image_url",
  "category": "Updated Category",
  "description": "Updated Description text",
  "rating": 5
}
```

**Response**: A JSON object confirming the book has been updated.
```json
{
  "message": "Book updated successfully",
  "book": {
    "title": "Updated Book Title",
    "author_name": "Updated Author Name",
    "review": "Updated Review text",
    "isbn": 9876543210,
    "img": "new-image_url",
    "category": "Updated Category",
    "description": "Updated Description text",
    "rating": 5
  }
}
```

---

## Database

The database contains a collection of **183 books** from a variety of genres. These books are available to view, search, and modify via the provided API endpoints. Each book has fields such as **title**, **author name**, **review**, **ISBN**, **image URL**, **category**, **description**, and **rating**.

---

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js to create RESTful APIs.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Loads environment variables from a `.env` file.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadniazi123/BookApi.git
   cd BookApi
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URI=your-mongo-connection-string
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will be available at `http://localhost:4000`.

---

## Environment Variables

The application requires the following environment variable:

- `MONGO_URI`: The connection string for your MongoDB database.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.
