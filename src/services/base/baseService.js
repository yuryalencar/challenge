const axios = require('axios');

class BaseService {
    async makeGetRequest(url) {
        const response = await axios.get(url);
        return response.data;
    }
}

module.exports = BaseService;
