const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "API activa",
    version: "1.0"
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "1.0"
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});