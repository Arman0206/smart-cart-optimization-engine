const {
    getRecommendations,
} = require("./recommendation.service");

const recommendProducts = async (req, res) => {
    try {
        const { productId } = req.params;

        const result = await getRecommendations(productId);

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    recommendProducts,
};