const express = require("express");
const { add, subtract, multiply } = require("./math");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Hello from my CI/CD Node.js App!",
    version: "1.0.0",
    endpoints: ["/add", "/subtract", "/multiply"],
  });
});

// Math routes
app.get("/add", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: add(Number(a), Number(b)) });
});

app.get("/subtract", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: subtract(Number(a), Number(b)) });
});

app.get("/multiply", (req, res) => {
  const { a, b } = req.query;
  res.json({ result: multiply(Number(a), Number(b)) });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
