const express = require("express");
const routes = require("./routes/garden");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(8000, () => {
  console.log(`Server is running.`);
});
