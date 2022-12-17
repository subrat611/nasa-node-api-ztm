const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { loadPlanetsData } = require("./models/planets.model");

const { PORT } = require("./config");

const { planetRouter } = require("./routes");

const app = express();

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());

// routes
app.use("/api", planetRouter);

async function startServer() {
  await loadPlanetsData();

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

startServer();
