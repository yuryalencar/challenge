const assert = require('assert');
const api = require('../../src/api');

let app = {};

describe.only('Test Suite of the Recipes API', function () {
    this.beforeAll(async () => {
        app = await api;
    });

    it('Check List Recipes Status Code is 200 OK', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 200);
    });

    // test return is a array of recipes
    // test with route not found
    // test without query params
    // test with query params ok
    // test with 4+ query params
});
