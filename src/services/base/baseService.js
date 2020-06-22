const axios = require('axios');

class BaseService {
    STATUS_OK = 200;
    WHITE_SPACE = '%20';

    async makeGetRequest(url) {
        try {
            const response = await axios.get(url);
            if (response.status !== this.STATUS_OK) {
                throw 'Invalid status code';
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BaseService;
