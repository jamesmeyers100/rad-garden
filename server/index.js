const express = require("express");
const routes = require("./routes/garden");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.REACT_APP_PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running.`);
  console.log("this PORTenv", process.env.REACT_APP_PORT);
});
