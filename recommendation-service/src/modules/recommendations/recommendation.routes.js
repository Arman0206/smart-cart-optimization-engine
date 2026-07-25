const express = require("express");

const router = express.Router();

const {
    recommendProducts,
} = require("./recommendation.controller");

router.get("/:productId", recommendProducts);

module.exports = router;