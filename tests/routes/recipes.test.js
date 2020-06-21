const assert = require('assert');
const api = require('../../src/api');

let app = {};

describe.only('Test Suite of the Recipes API', function () {
    this.beforeAll(async () => {
        app = await api;
    });

    it('Check List Recipes Status Code is 200 OK (1 ingredient)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=ingredient',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 200);
    });

    it('Check List Recipes Status Code is 200 OK (3 ingredients)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=ingredient,ingredient,ingredient',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 200);
    });

    it('Check List Recipes Status Code is 400 (0 ingredients)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 400);
    });

    it('Check List Recipes Status Code is 400 (4 ingredients)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=ingredient,ingredient,ingredient,ingredient',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 400);
    });

    it('Check List Recipes Status Code is 400 without query param', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 400);
    });

    it('Check List Recipes Status Code is 404 (/recipe/)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipe/',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 404);
    });

    it('Check List Recipes Status Code is 404 (/recipes)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 404);
    });

    // test return is a array of recipes
});
