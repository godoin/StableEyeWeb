// Initialize Dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use(cookieParser());

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

// Verify User
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Something went wrong with the token." });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", username: req.username });
});

// Authentication
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

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
        res.send({ error_message: "Error: Internal Server Error" });
      } else if (results.length > 0) {
        const username = results[0].username;
        console.log(username);
        const token = jwt.sign({ username }, "jwt-secret-key", {
          expiresIn: "1d",
        });
        res.cookie("token", token);
        res.send(results);
      } else {
        res.send({
          error_message: "Error: Credentials do not match. Please try again.",
        });
      }
    });
  }
});
