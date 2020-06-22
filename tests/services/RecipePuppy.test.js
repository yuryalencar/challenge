const assert = require('assert');
const nock = require('nock');
require('dotenv').config();
const RecipePuppyService = require('../../src/services/RecipePuppyService');

describe.only('Test Suite of the RecipePuppy Integration', function () {
    this.beforeAll(() => {
        const response = {
            title: 'Recipe Puppy',
            version: 0.1,
            href: 'http://www.recipepuppy.com/',
            results: [
                {
                    title: 'French Onion Tomato Soup',
                    href:
                        'http://allrecipes.com/Recipe/French-Onion-Tomato-Soup/Detail.aspx',
                    ingredients:
                        'beef bouillon granules, brown sugar, butter, parsley, french bread, garlic, lemon juice, mozzarella cheese, onions',
                    thumbnail: '',
                },
                {
                    title: 'Vidalia Onion Tomato Pizza',
                    href:
                        'http://allrecipes.com/Recipe/Vidalia-Onion-Tomato-Pizza/Detail.aspx',
                    ingredients:
                        'cheddar cheese, flour, mozzarella cheese, olive oil, salt, sugar, tomato, onions, water',
                    thumbnail: 'http://img.recipepuppy.com/10970.jpg',
                },
                {
                    title: 'Potato, Onion & Tomato Bake',
                    href:
                        'http://www.recipezaar.com/Potato-Onion-Tomato-Bake-71338',
                    ingredients:
                        'butter, cheddar cheese, chicken broth, cream, milk, onions, potato, salt, tomato',
                    thumbnail: 'http://img.recipepuppy.com/37149.jpg',
                },
                {
                    title: 'Potato Onion Tomato Curry Recipe',
                    href:
                        'http://www.cdkitchen.com/recipes/recs/64/Potato_Onion_Tomato_Curry47342.shtml',
                    ingredients:
                        'bay leaf, cilantro, green chilies, ginger, onions, potato, chili, chili powder, sugar, tomato, turmeric, water',
                    thumbnail: '',
                },
                {
                    title: 'Bulgur with Onion, Tomato, and Feta',
                    href:
                        'http://www.epicurious.com/recipes/food/views/Bulgur-with-Onion-Tomato-and-Feta-103322',
                    ingredients:
                        'bulgur, chilies, olive oil, feta cheese, red onions, sugar, tomato, vegetable broth',
                    thumbnail: '',
                },
                {
                    title: 'Vidalia Onion, Tomato and Basil Salad',
                    href:
                        'http://www.recipezaar.com/Vidalia-Onion-Tomato-and-Basil-Salad-431',
                    ingredients:
                        'basil, garlic, mozzarella cheese, olive oil, black pepper, tomato, vidalia onions, white wine vinegar',
                    thumbnail: '',
                },
                {
                    title: 'Onion, Tomato, and Olive Pizzas',
                    href:
                        'http://www.epicurious.com/recipes/food/views/Onion-Tomato-and-Olive-Pizzas-108869',
                    ingredients:
                        'anchovy paste, black pepper, olive oil, garlic, grape tomatoes, kalamata olive, onions, pizza dough, salt, sea salt, sugar, thyme',
                    thumbnail: '',
                },
                {
                    title: 'Onion, Tomato, and Bell Pepper Citrus Salsa',
                    href:
                        'http://www.epicurious.com/recipes/food/views/Onion-Tomato-and-Bell-Pepper-Citrus-Salsa-107882',
                    ingredients:
                        'olive oil, garlic, green pepper, lemon juice, lime juice, onions, orange juice, red pepper, jalapeno, onions, tomato',
                    thumbnail: '',
                },
                {
                    title: 'Broiled Salmon with Onion, Tomato and Lemon',
                    href:
                        'http://www.epicurious.com/recipes/food/views/Broiled-Salmon-with-Onion-Tomato-and-Lemon-2642',
                    ingredients:
                        'garlic, lemon juice, salmon, lemon, onions, tomato',
                    thumbnail: '',
                },
                {
                    title: 'Garlic And Onion Tomato Sauce Recipe',
                    href:
                        'http://www.cdkitchen.com/recipes/recs/332/Garlic_And_Onion_Tomato_Sauce56258.shtml',
                    ingredients:
                        'basil, black pepper, garlic, olive oil, onions, tomato, thyme',
                    thumbnail: '',
                },
            ],
        };

        nock('http://www.recipepuppy.com/api')
            .get('/?q=onion%20tomato')
            .reply(200, response);
    });

    it('Check RecipePuppy Integration with 4 ingredients', async () => {
        let expectedResult =
            'Amount of invalid ingredients, try to send 1 to 3 ingredients';

        let ingredients = [
            'ingredient 1',
            'ingredient 2',
            'ingredient 3',
            'ingredient 4',
        ];

        try {
            new RecipePuppyService(ingredients);
        } catch (error) {
            assert.deepEqual(error, expectedResult);
        }
    });

    it('Check RecipePuppy Integration with 0 ingredients', async () => {
        let expectedResult =
            'Amount of invalid ingredients, try to send 1 to 3 ingredients';

        let ingredients = [];

        try {
            new RecipePuppyService(ingredients);
            assert.ok(false);
        } catch (error) {
            assert.deepEqual(error, expectedResult);
        }
    });

    it('Check RecipePuppy Integration with 1 ingredients', async () => {
        let ingredients = ['ingredient 1'];
        let expectedResult = {
            WHITE_SPACE: '%20',
            STATUS_OK: 200,
            AMOUNT_ERROR_MESSAGE:
                'Amount of invalid ingredients, try to send 1 to 3 ingredients',
            MAX_INGREDIENTS: 3,
            MIN_INGREDIENTS: 1,
            ingredients: ingredients,
        };

        let result = new RecipePuppyService(ingredients);
        assert.deepEqual(result, expectedResult);
    });

    it('Check RecipePuppy Integration mount normal query search (3 ingredients)', async () => {
        let ingredients = ['onion', 'tomato', 'lemon'];
        let expectedResult = '?q=onion%20tomato%20lemon';

        let result = new RecipePuppyService(
            ingredients,
        )._mountNormalSearchQuery();
        assert.deepEqual(result, expectedResult);
    });

    it('Check RecipePuppy Integration searching by 2 ingredients', async () => {
        let ingredients = ['onion', 'tomato'];
        let expectedResult = [
            {
                title: 'French Onion Tomato Soup',
                ingredients: [
                    'beef bouillon granules',
                    'brown sugar',
                    'butter',
                    'french bread',
                    'garlic',
                    'lemon juice',
                    'mozzarella cheese',
                    'onions',
                    'parsley',
                ],
                link:
                    'http://allrecipes.com/Recipe/French-Onion-Tomato-Soup/Detail.aspx',
                gif: null,
            },
            {
                title: 'Vidalia Onion Tomato Pizza',
                ingredients: [
                    'cheddar cheese',
                    'flour',
                    'mozzarella cheese',
                    'olive oil',
                    'onions',
                    'salt',
                    'sugar',
                    'tomato',
                    'water',
                ],
                link:
                    'http://allrecipes.com/Recipe/Vidalia-Onion-Tomato-Pizza/Detail.aspx',
                gif: null,
            },
            {
                title: 'Potato, Onion & Tomato Bake',
                ingredients: [
                    'butter',
                    'cheddar cheese',
                    'chicken broth',
                    'cream',
                    'milk',
                    'onions',
                    'potato',
                    'salt',
                    'tomato',
                ],
                link:
                    'http://www.recipezaar.com/Potato-Onion-Tomato-Bake-71338',
                gif: null,
            },
            {
                title: 'Potato Onion Tomato Curry Recipe',
                ingredients: [
                    'bay leaf',
                    'chili',
                    'chili powder',
                    'cilantro',
                    'ginger',
                    'green chilies',
                    'onions',
                    'potato',
                    'sugar',
                    'tomato',
                    'turmeric',
                    'water',
                ],
                link:
                    'http://www.cdkitchen.com/recipes/recs/64/Potato_Onion_Tomato_Curry47342.shtml',
                gif: null,
            },
            {
                title: 'Bulgur with Onion, Tomato, and Feta',
                ingredients: [
                    'bulgur',
                    'chilies',
                    'feta cheese',
                    'olive oil',
                    'red onions',
                    'sugar',
                    'tomato',
                    'vegetable broth',
                ],
                link:
                    'http://www.epicurious.com/recipes/food/views/Bulgur-with-Onion-Tomato-and-Feta-103322',
                gif: null,
            },
            {
                title: 'Vidalia Onion, Tomato and Basil Salad',
                ingredients: [
                    'basil',
                    'black pepper',
                    'garlic',
                    'mozzarella cheese',
                    'olive oil',
                    'tomato',
                    'vidalia onions',
                    'white wine vinegar',
                ],
                link:
                    'http://www.recipezaar.com/Vidalia-Onion-Tomato-and-Basil-Salad-431',
                gif: null,
            },
            {
                title: 'Onion, Tomato, and Olive Pizzas',
                ingredients: [
                    'anchovy paste',
                    'black pepper',
                    'garlic',
                    'grape tomatoes',
                    'kalamata olive',
                    'olive oil',
                    'onions',
                    'pizza dough',
                    'salt',
                    'sea salt',
                    'sugar',
                    'thyme',
                ],
                link:
                    'http://www.epicurious.com/recipes/food/views/Onion-Tomato-and-Olive-Pizzas-108869',
                gif: null,
            },
            {
                title: 'Onion, Tomato, and Bell Pepper Citrus Salsa',
                ingredients: [
                    'garlic',
                    'green pepper',
                    'jalapeno',
                    'lemon juice',
                    'lime juice',
                    'olive oil',
                    'onions',
                    'onions',
                    'orange juice',
                    'red pepper',
                    'tomato',
                ],
                link:
                    'http://www.epicurious.com/recipes/food/views/Onion-Tomato-and-Bell-Pepper-Citrus-Salsa-107882',
                gif: null,
            },
            {
                title: 'Broiled Salmon with Onion, Tomato and Lemon',
                ingredients: [
                    'garlic',
                    'lemon',
                    'lemon juice',
                    'onions',
                    'salmon',
                    'tomato',
                ],
                link:
                    'http://www.epicurious.com/recipes/food/views/Broiled-Salmon-with-Onion-Tomato-and-Lemon-2642',
                gif: null,
            },
            {
                title: 'Garlic And Onion Tomato Sauce Recipe',
                ingredients: [
                    'basil',
                    'black pepper',
                    'garlic',
                    'olive oil',
                    'onions',
                    'thyme',
                    'tomato',
                ],
                link:
                    'http://www.cdkitchen.com/recipes/recs/332/Garlic_And_Onion_Tomato_Sauce56258.shtml',
                gif: null,
            },
        ];

        let result = await new RecipePuppyService(ingredients).searchRecipes();
        assert.deepEqual(result, expectedResult);
    });
});
