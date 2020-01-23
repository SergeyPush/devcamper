const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", require("./routes/bootcamps"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectDB();
  console.log(
    `Server is runninng in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
