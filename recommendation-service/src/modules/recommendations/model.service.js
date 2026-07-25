const { pipeline } = require("@xenova/transformers");

let extractor = null;

const loadModel = async () => {
    if (!extractor) {
        console.log("Loading embedding model...");
        extractor = await pipeline(
            "feature-extraction",
            "Xenova/all-MiniLM-L6-v2"
        );
        console.log("Embedding model loaded.");
    }

    return extractor;
};

module.exports = {
    loadModel,
};