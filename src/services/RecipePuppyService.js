class RecipePuppyService {
    MAX_INGREDIENTS = 3;
    MIN_INGREDIENTS = 1;
    AMOUNT_ERROR_MESSAGE =
        'Amount of invalid ingredients, try to send 1 to 3 ingredients';

    constructor(ingredients) {
        if (this._checkIncorrectAmountIngredients(ingredients)) {
            throw this.AMOUNT_ERROR_MESSAGE;
        }
        this.ingredients = ingredients;
    }

    _checkIncorrectAmountIngredients(ingredients) {
        let incorrectAmount =
            this.MIN_INGREDIENTS > ingredients.length ||
            this.MAX_INGREDIENTS < ingredients.length;

        return incorrectAmount;
    }
}

module.exports = RecipePuppyService;
