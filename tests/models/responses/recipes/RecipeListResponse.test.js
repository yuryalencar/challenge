const assert = require('assert');
const RecipeListResponse = require('../../../../src/models/responses/recipes/RecipeListResponse');
const Recipe = require('../../../../src/models/Recipe');

describe.only('Test Suite of the Recipe Model Creation', function () {
    it('Check Recipe Model Creation', async () => {
        let title = 'Backend Developer';
        let ingredients = ['backend', 'nodejs'];
        let link = 'https://github.com/yuryalencar/challenge';
        let gif = 'https://github.com/yuryalencar/challenge/gif';

        let keywords = [...ingredients];
        let recipes = [new Recipe(title, ingredients, link, gif)];

        let expectedResult = {
            keywords,
            recipes,
        };

        let result = new RecipeListResponse(keywords, recipes);
        assert.deepEqual(result, expectedResult);
    });
});
