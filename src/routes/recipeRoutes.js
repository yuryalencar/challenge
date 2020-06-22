const BaseRoute = require('./base/baseRoute');
const Joi = require('@hapi/joi');
const RecipesController = require('../controllers/recipesController');
const RecipeController = require('../controllers/recipesController');

class RecipeRoutes extends BaseRoute {
    CHECK_AMOUNT_INGREDIENTS_REGEX = /^[^,]+(,[^,]+)?(,[^,]+)?$/;

    constructor() {
        super();
    }

    list() {
        return {
            path: '/recipes/',
            method: 'GET',
            handler: (request, headers) => {
                let controller = new RecipeController();
                return controller.getRecipes(request, headers);
            },
            options: {
                validate: {
                    query: Joi.object({
                        i: Joi.string()
                            .regex(this.CHECK_AMOUNT_INGREDIENTS_REGEX)
                            .required(),
                    }),
                },
            },
        };
    }
}

module.exports = RecipeRoutes;
