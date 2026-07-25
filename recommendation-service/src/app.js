const express = require("express");
const cors = require("cors");

const recommendationRoutes = require("./modules/recommendations/recommendation.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "recommendation-service",
    });
});

app.use("/api/recommendations", recommendationRoutes);

module.exports = app;