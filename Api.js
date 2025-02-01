import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));
  

// Define Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author_name: String,
  review: String,
  isbn: Number,
  img: String,
  category: String,
  description: String,
  rating: Number,
});

const Book = mongoose.model("Book", bookSchema, "Booksdata");

// Get all books from MongoDB
app.get("/", async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get book by ID
app.get("/book/id/", async (req, res) => {
  try {
    const book = await Book.findById(req.query.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Invalid ID" });
  }
});

// Get book by title
app.get("/book/title/", async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.query.title });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a random book
app.get("/book/random", async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length > 0) {
      const randomBook = books[Math.floor(Math.random() * books.length)];
      res.json(randomBook);
    } else {
      res.status(404).json({ error: "No books found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a new book
app.post("/book/new", async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author_name: req.body.author_name,
      review: req.body.review,
      isbn: req.body.isbn,
      img: req.body.img,
      category: req.body.category,
      description: req.body.description,
      rating: req.body.rating,
    });

    await newBook.save();
    res.json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Edit a book
app.patch("/book/edit", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.query.id,
      {
        title: req.body.title,
        author_name: req.body.author_name,
        review: req.body.review,
        isbn: req.body.isbn,
        img: req.body.img,
        category: req.body.category,
        description: req.body.description,
        rating: req.body.rating,
      },
      { new: true } // Return the updated document
    );

    if (updatedBook) {
      res.json({ message: "Book updated successfully", book: updatedBook });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
