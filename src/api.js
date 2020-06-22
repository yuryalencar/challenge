const Hapi = require('@hapi/hapi');
const RecipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]());
}

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
    });

    server.route([...mapRoutes(new RecipeRoutes(), RecipeRoutes.methods())]);

    await server.start();
    console.log('🔥 Server running on %s', server.info.uri);

    return server;
};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

module.exports = init();
