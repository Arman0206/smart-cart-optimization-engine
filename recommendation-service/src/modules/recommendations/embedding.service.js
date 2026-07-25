const { loadModel } = require("./model.service");
const embeddingCache = new Map();

const getEmbedding = async (text) => {
    if (embeddingCache.has(text)) {
        return embeddingCache.get(text);
    }
    const extractor = await loadModel();
    const output = await extractor(text, {
        pooling: "mean",
        normalize: true,
    });
    const embedding = Array.from(output.data);
    embeddingCache.set(text, embedding);
    return embedding;
};

module.exports = {
    getEmbedding,
};
