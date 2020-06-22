const BaseService = require('./base/baseService');
const Recipe = require('../models/Recipe');

class RecipePuppyService extends BaseService {
    MAX_INGREDIENTS = 3;
    MIN_INGREDIENTS = 1;
    AMOUNT_ERROR_MESSAGE =
        'Amount of invalid ingredients, try to send 1 to 3 ingredients';

    constructor(ingredients) {
        super();
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

    _mountNormalSearchQuery() {
        let query = '?q=';
        this.ingredients.forEach(ingredient => {
            query += ingredient + ' ';
        });

        query = query.trim();
        query = query.split(' ').join(this.WHITE_SPACE);
        return query;
    }

    async searchRecipes() {
        try {
            const query = this._mountNormalSearchQuery();
            const recipes = await this.makeGetRequest(
                `${process.env.RECIPE_PUPPY_URL_BASE}${query}`,
            );
            return recipes.results.map(this.mapRecipe);
        } catch (error) {
            throw 'RecipePuppy Service is not available';
        }
    }

    mapRecipe(recipe) {
        let ingredients = recipe.ingredients
            .split(',')
            .map(ingredient => ingredient.trim());

        ingredients.sort();
        return new Recipe(recipe.title, ingredients, recipe.href, null);
    }
}

module.exports = RecipePuppyService;
