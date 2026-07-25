const {
    getAllProducts,
    getProductById,
} = require("../../clients/coreServiceClient");

const {
    calculateScore,
} = require("./scoring.service");

const {
    rankProducts,
} = require("./ranking.service");

const {
    generateRecommendationReasons,
} = require("./reason.service");

const getRecommendations = async (productId) => {

    // Get selected product
    const selectedProduct = await getProductById(productId);

    // Get all products
    const products = await getAllProducts();

    // Calculate score
    const scoredProducts = await Promise.all(
        products
            .filter(product => product._id !== productId)
            .map(async (product) => ({
                ...product,
                score: await calculateScore(selectedProduct, product),
            }))
    );

    // Top 5 recommendations
    const rankedProducts = rankProducts(scoredProducts);

    // Single Gemini API Call
    const reasons = await generateRecommendationReasons(
        selectedProduct,
        rankedProducts
    );

    // Map reasons with products
    const recommendations = rankedProducts.map((product) => {

        const {
            embedding,
            __v,
            ...cleanProduct
        } = product;

        const matchedReason = reasons.find(
            item => item.productId === product._id
        );

        return {
            ...cleanProduct,
            reason: matchedReason
                ? matchedReason.reason
                : "Recommended based on AI semantic similarity.",
        };
    });

    // Clean selected product
    const {
        embedding,
        __v,
        ...cleanSelectedProduct
    } = selectedProduct;

    return {
        selectedProduct: cleanSelectedProduct,
        recommendations,
    };
};

module.exports = {
    getRecommendations,
};