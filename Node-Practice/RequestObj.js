const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log(req.query);

  res.status(200).json({
    message: "All About  request object",
  });
});

app.listen(3000, () => {
  console.log("Server is started");
});

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.method);
});
