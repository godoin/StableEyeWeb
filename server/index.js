// Initialize Dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Environment Variables
const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, PORT } = process.env;

// Run Server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

// Create DB Connection
const db = mysql.createConnection({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

// Authentication
app.post("/login", (req, res) => {
  const email = req.body.Email;
  const password = req.body.Password;

  if (!email || !password) {
    return res.send({
      error_message: "Error: Please fill all the required fields.",
    });
  } else {
    const SQL = "SELECT * FROM users WHERE email = ? && password = ?";

    const values = [email, password];

    db.query(SQL, values, (err, results) => {
      if (err) {
        res.send({ error: "Error: Internal Server Error" });
      } else if (results.length > 0) {
        res.send(results);
      } else {
        res.send({
          error_message: "Error: Credentials do not match. Please try again.",
        });
      }
    });
  }
});
