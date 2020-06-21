const assert = require('assert');
const RecipePuppyService = require('../../src/services/RecipePuppyService');

describe.only('Test Suite of the RecipePuppy Integration', function () {
    it('Check RecipePuppy Integration with 4 ingredients', async () => {
        let expectedResult =
            'Amount of invalid ingredients, try to send 1 to 3 ingredients';

        let amountIngredientsInvalid = [
            'ingredient 1',
            'ingredient 2',
            'ingredient 3',
            'ingredient 4',
        ];

        try {
            new RecipePuppyService(amountIngredientsInvalid);
        } catch (error) {
            assert.deepEqual(error, expectedResult);
        }
    });

    it('Check RecipePuppy Integration with 0 ingredients', async () => {
        let expectedResult =
            'Amount of invalid ingredients, try to send 1 to 3 ingredients';

        let amountIngredientsInvalid = [];

        try {
            new RecipePuppyService(amountIngredientsInvalid);
        } catch (error) {
            assert.deepEqual(error, expectedResult);
        }
    });

    it('Check RecipePuppy Integration with 1 ingredients', async () => {
        let amountIngredients = ['ingredient 1'];
        let expectedResult = {
            AMOUNT_ERROR_MESSAGE:
                'Amount of invalid ingredients, try to send 1 to 3 ingredients',
            MAX_INGREDIENTS: 3,
            MIN_INGREDIENTS: 1,
            ingredients: amountIngredients,
        };

        let result = new RecipePuppyService(amountIngredients);
        assert.deepEqual(result, expectedResult);
    });
});
