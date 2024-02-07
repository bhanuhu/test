require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require('./routes/router');
const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is successfully working at port ${PORT}`);
});
