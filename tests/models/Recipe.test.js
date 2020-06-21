const assert = require('assert');
const Recipe = require('../../src/models/Recipe');

describe.only('Test Suite of the Recipe Model Creation', function () {
    it('Check Recipe Model Creation', async () => {
        let title = 'example';
        let ingredients = [];
        let link = 'https://github.com/yuryalencar/challenge';
        let gif = 'https://github.com/yuryalencar/challenge/gif';

        let expectedResult = {
            title,
            ingredients,
            link,
            gif,
        };

        let result = new Recipe(title, ingredients, link, gif);
        assert.deepEqual(result, expectedResult);
    });
});
