const BaseService = require('./base/baseService');

class GiphyService extends BaseService {
    constructor(searchTerm, limit = 1) {
        super();
        this.searchTerm = searchTerm;
        this.limit = limit;
    }

    async getGifs() {
        let url = this._mountQuerySearch();
        url = this._insertApiKey(url);
        url = this._insertResultLimit(url);


        const gifs = await this.makeGetRequest(url);
        return gifs.data.map(this._mapGif);
    }

    _mountQuerySearch() {
        return `${process.env.GIPHY_URL_BASE}/search?q=${this.searchTerm}`;
    }

    _insertApiKey(url) {
        return `${url}&api_key=${process.env.GIPHY_API_KEY}`;
    }

    _insertResultLimit(url) {
        return `${url}&limit=${this.limit}`;
    }

    _mapGif(gif) {
        return { gif: gif.images.original.url };
    }
}

module.exports = GiphyService;
