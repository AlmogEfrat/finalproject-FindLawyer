import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App.js";
//import reportWebVitals from
//import "@fortawesome/fontawesome-free/css/all.min.css";
///MONGO_URI = mongodb+srv://almogefratproject:almogefratproject@cluster0.cruylgt.mongodb.net/?retryWrites=true
//ReactDOM.render(<App />, document.getElementById('root'))
//require('./server.js')
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
 .connect(process.env.DB_URI, dbOptions)
 .then(() => console.log("DB Connected!"))
 .catch((err) => console.log(err));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});


*/
