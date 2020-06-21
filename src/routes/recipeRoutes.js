const BaseRoute = require('./base/baseRoute');
const Joi = require('@hapi/joi');

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
                return `Hello ${request.query.i}!`;
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
