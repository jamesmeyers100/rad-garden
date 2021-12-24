const express = require("express");
const routes = require("./routes/garden");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.REACT_APP_PORT || 8000;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running.`);
  console.log("this PORTenv", process.env.REACT_APP_PORT);
  console.log("this PORTenv", process.env.REACT_APP_GARDEN_API_BASE_URL + process.env.REACT_APP_PORT);
});
