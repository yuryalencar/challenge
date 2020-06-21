const assert = require('assert');
const nock = require('nock');
const BaseService = require('../../src/services/base/baseService');

describe.only('Test Suite of the BaseService', function () {
    this.beforeAll(() => {
        const response = {
            title: 'Recipe Puppy',
            version: 0.1,
            href: 'http://www.recipepuppy.com/',
            results: [
                {
                    title: '\nGuacamole Dip Recipe\n\n',
                    href: 'http://cookeatshare.com/recipes/guacamole-dip-2783',
                    ingredients: 'avocado, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/868469.jpg',
                },
                {
                    title: '\nGuacamole Dip Recipe\n\n',
                    href: 'http://cookeatshare.com/recipes/guacamole-dip-3108',
                    ingredients: 'avocado, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/868492.jpg',
                },
                {
                    title: '\nHomemade Pizza Sauce For Canning Recipe\n\n',
                    href:
                        'http://cookeatshare.com/recipes/homemade-pizza-sauce-for-canning-12225',
                    ingredients: 'tomato, onions, green pepper',
                    thumbnail: 'http://img.recipepuppy.com/875258.jpg',
                },
                {
                    title: 'Sauce Dijon a la Provencal \r\n\t\t\n',
                    href:
                        'http://www.kraftfoods.com/kf/recipes/sauce-dijon-a-la-54823.aspx',
                    ingredients: 'tomato, onions, dijon mustard, sugar',
                    thumbnail: 'http://img.recipepuppy.com/601515.jpg',
                },
                {
                    title: 'Basil Pesto Pomodoro Sauce',
                    href:
                        'http://www.recipezaar.com/Basil-Pesto-Pomodoro-Sauce-221792',
                    ingredients:
                        'pesto, nonstick cooking spray, tomato, onions',
                    thumbnail: 'http://img.recipepuppy.com/148477.jpg',
                },
                {
                    title: "Ali's Amazing Bruschetta",
                    href:
                        'http://allrecipes.com/Recipe/Alis-Amazing-Bruschetta/Detail.aspx',
                    ingredients: 'olive oil, parmesan cheese, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/30661.jpg',
                },
                {
                    title: 'BLT Pasta Salad',
                    href:
                        'http://allrecipes.com/Recipe/BLT-Pasta-Salad/Detail.aspx',
                    ingredients: 'bacon, ranch dressing, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/7095.jpg',
                },
                {
                    title: 'Tomato Alfredo Sauce with Artichokes',
                    href:
                        'http://allrecipes.com/Recipe/Tomato-Alfredo-Sauce-with-Artichokes/Detail.aspx',
                    ingredients: 'flour, whole milk, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/11220.jpg',
                },
                {
                    title: 'Tomato Cheese Crunch',
                    href:
                        'http://allrecipes.com/Recipe/Tomato-Cheese-Crunch/Detail.aspx',
                    ingredients: 'cheddar cheese, onions, potato chips, tomato',
                    thumbnail: 'http://img.recipepuppy.com/20868.jpg',
                },
                {
                    title: 'Basic Guacamole Dip',
                    href:
                        'http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx',
                    ingredients: 'avocado, lemon juice, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/29413.jpg',
                },
            ],
        };

        nock('http://www.recipepuppy.com/api')
            .get('/?i=onions,tomato')
            .reply(200, response);
    });

    it('Check BaseService get Request (RecipePuppy Request)', async () => {
        let expectedResult = {
            title: 'Recipe Puppy',
            version: 0.1,
            href: 'http://www.recipepuppy.com/',
            results: [
                {
                    title: '\nGuacamole Dip Recipe\n\n',
                    href: 'http://cookeatshare.com/recipes/guacamole-dip-2783',
                    ingredients: 'avocado, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/868469.jpg',
                },
                {
                    title: '\nGuacamole Dip Recipe\n\n',
                    href: 'http://cookeatshare.com/recipes/guacamole-dip-3108',
                    ingredients: 'avocado, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/868492.jpg',
                },
                {
                    title: '\nHomemade Pizza Sauce For Canning Recipe\n\n',
                    href:
                        'http://cookeatshare.com/recipes/homemade-pizza-sauce-for-canning-12225',
                    ingredients: 'tomato, onions, green pepper',
                    thumbnail: 'http://img.recipepuppy.com/875258.jpg',
                },
                {
                    title: 'Sauce Dijon a la Provencal \r\n\t\t\n',
                    href:
                        'http://www.kraftfoods.com/kf/recipes/sauce-dijon-a-la-54823.aspx',
                    ingredients: 'tomato, onions, dijon mustard, sugar',
                    thumbnail: 'http://img.recipepuppy.com/601515.jpg',
                },
                {
                    title: 'Basil Pesto Pomodoro Sauce',
                    href:
                        'http://www.recipezaar.com/Basil-Pesto-Pomodoro-Sauce-221792',
                    ingredients:
                        'pesto, nonstick cooking spray, tomato, onions',
                    thumbnail: 'http://img.recipepuppy.com/148477.jpg',
                },
                {
                    title: "Ali's Amazing Bruschetta",
                    href:
                        'http://allrecipes.com/Recipe/Alis-Amazing-Bruschetta/Detail.aspx',
                    ingredients: 'olive oil, parmesan cheese, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/30661.jpg',
                },
                {
                    title: 'BLT Pasta Salad',
                    href:
                        'http://allrecipes.com/Recipe/BLT-Pasta-Salad/Detail.aspx',
                    ingredients: 'bacon, ranch dressing, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/7095.jpg',
                },
                {
                    title: 'Tomato Alfredo Sauce with Artichokes',
                    href:
                        'http://allrecipes.com/Recipe/Tomato-Alfredo-Sauce-with-Artichokes/Detail.aspx',
                    ingredients: 'flour, whole milk, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/11220.jpg',
                },
                {
                    title: 'Tomato Cheese Crunch',
                    href:
                        'http://allrecipes.com/Recipe/Tomato-Cheese-Crunch/Detail.aspx',
                    ingredients: 'cheddar cheese, onions, potato chips, tomato',
                    thumbnail: 'http://img.recipepuppy.com/20868.jpg',
                },
                {
                    title: 'Basic Guacamole Dip',
                    href:
                        'http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx',
                    ingredients: 'avocado, lemon juice, onions, tomato',
                    thumbnail: 'http://img.recipepuppy.com/29413.jpg',
                },
            ],
        };
        const url = 'http://www.recipepuppy.com/api/?i=onions,tomato';

        const responseData = await new BaseService().makeGetRequest(url);
        assert.deepEqual(responseData, expectedResult);
    });
});
