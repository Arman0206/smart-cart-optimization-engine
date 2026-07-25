require("dotenv").config();
const { getEmbedding } = require("./modules/recommendations/embedding.service");
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5002;
const { calculateSimilarity } = require("./modules/recommendations/similarity.service");

const startServer = async () => {
    await connectDB();

    const p1 = {
        productName: "Dell Inspiron Laptop",
        category: "Electronics",
        brand: "Dell",
        description: "16GB RAM Intel i7 SSD Laptop"
    };

    const p2 = {
        productName: "HP Pavilion Laptop",
        category: "Electronics",
        brand: "HP",
        description: "16GB RAM Intel i7 SSD Notebook"
    };

    const score = await calculateSimilarity(p1, p2);

    console.log("Similarity Score:", score);

    app.listen(PORT, () => {
        console.log(`Recommendation Service running on port ${PORT}`);
    });
};

startServer();