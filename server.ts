import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/users", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
