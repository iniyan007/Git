const dotenv = require('dotenv');

dotenv.config();

function getApiKey() {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
        throw new Error('API_KEY not found in .env file');
    }
    
    return apiKey;
}

module.exports = getApiKey;