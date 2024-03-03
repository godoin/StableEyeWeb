// Initialize Dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Run server
app.listen(3002, () => {
  console.log("Server is running at port 3002");
});

// Create DB Connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "stable_eye",
});
