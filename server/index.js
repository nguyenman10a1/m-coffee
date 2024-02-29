const express = require("express");
const cors = require("cors");
const routes = require("@util/routes");
const errorMiddleware = require("@middleware/errorMiddleware");

const app = express();

// CORS is enabled for all origins
app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
