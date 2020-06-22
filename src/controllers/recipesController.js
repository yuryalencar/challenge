const RecipePuppyService = require('../services/recipePuppyService');
const GiphyService = require('../services/giphyService');
const RecipeListResponse = require('../models/responses/recipes/RecipeListResponse');
const Recipe = require('../models/Recipe');
const Boom = require('@hapi/boom');

class RecipeController {
    async getRecipes(request, headers) {
        try {
            const ingredients = this._splitIngredients(request.query.i);

            const recipePuppyService = new RecipePuppyService(ingredients);
            let recipes = await recipePuppyService.searchRecipes();
            recipes = recipes.map(this._insertGifsInRecipes);

            return Promise.all(recipes).then(recipes => {
                return new RecipeListResponse(ingredients, recipes);
            });
        } catch (error) {
            return Boom.clientTimeout(error);
        }
    }

    _splitIngredients(ingredients) {
        return ingredients.split(',').map(ingredient => ingredient.trim());
    }

    async _insertGifsInRecipes(recipe) {
        const gifs = await new GiphyService(recipe.title).getGifs();
        return new Recipe(
            recipe.title,
            recipe.ingredients,
            recipe.link,
            gifs[0].gif,
        );
    }
}

module.exports = RecipeController;
