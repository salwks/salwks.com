import "core-js";
import express from "express";

const app = express();

const port = 3000;

const handleListening = () =>
  console.log(`Example app listening at http://localhost:${port}`);

const handleHome = (req, res) => res.send("Hello Home");
const handlePortfolio = (req, res) => res.send("Hello Portfolio");
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);
app.get("/portfolio", handlePortfolio);

app.listen(port, handleListening);
