const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Set up middleware
app.use(express.json());
app.use(cors());

// Set DB Connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "stable_eye",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

// Define login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Perform input validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // Execute SQL query to find user by email and password
  const SQL = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(SQL, [email, password], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Check if user exists
    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // User authenticated successfully
    res.status(200).json({ message: "Login successful", user: results[0] });
  });
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
