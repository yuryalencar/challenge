const BaseRoute = require('./base/baseRoute');

class RecipeRoutes extends BaseRoute {
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
        };
    }
}

module.exports = RecipeRoutes;
