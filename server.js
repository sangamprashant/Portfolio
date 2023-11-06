const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http").createServer(app);


const cors = require("cors");
const path = require("path");

// Enable CORS
app.use(cors());

app.use(express.json());

// app.use(require("./routes/admin"));


// Serve the frontend
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

http.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});