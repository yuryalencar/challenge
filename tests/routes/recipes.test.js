const assert = require('assert');
const nock = require('nock');
const api = require('../../src/api');

let app = {};

describe.only('Test Suite of the Recipes API', function () {
    this.beforeEach(async () => {
        app = await api;

        const giphyResponse = {
            data: [
                {
                    type: 'gif',
                    id: '6Bdx9wl8sIh4A',
                    url:
                        'https://giphy.com/gifs/best-gifs-soup-chicken-campbells-6Bdx9wl8sIh4A',
                    slug: 'best-gifs-soup-chicken-campbells-6Bdx9wl8sIh4A',
                    bitly_gif_url: 'https://gph.is/1BHKDjN',
                    bitly_url: 'https://gph.is/1BHKDjN',
                    embed_url: 'https://giphy.com/embed/6Bdx9wl8sIh4A',
                    username: '',
                    source: 'https://www.youtube.com/watch?v=89IMS9hL3vI',
                    title: 'chicken soup GIF',
                    rating: 'g',
                    content_url: '',
                    source_tld: 'www.youtube.com',
                    source_post_url:
                        'https://www.youtube.com/watch?v=89IMS9hL3vI',
                    is_sticker: 0,
                    import_datetime: '2015-03-04 16:27:52',
                    trending_datetime: '1970-01-01 00:00:00',
                    images: {
                        downsized_large: {
                            height: '270',
                            size: '876325',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.gif',
                            width: '480',
                        },
                        fixed_height_small_still: {
                            height: '100',
                            size: '10795',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100_s.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100_s.gif',
                            width: '178',
                        },
                        original: {
                            frames: '13',
                            hash: '295b186aaa6f3db8bdb09222d16f133d',
                            height: '270',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.mp4',
                            mp4_size: '239635',
                            size: '876325',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.webp',
                            webp_size: '239044',
                            width: '480',
                        },
                        fixed_height_downsampled: {
                            height: '200',
                            size: '174676',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200_d.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200_d.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200_d.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200_d.webp',
                            webp_size: '94658',
                            width: '356',
                        },
                        downsized_still: {
                            height: '270',
                            size: '876325',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy_s.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy_s.gif',
                            width: '480',
                        },
                        fixed_height_still: {
                            height: '200',
                            size: '26708',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200_s.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200_s.gif',
                            width: '356',
                        },
                        downsized_medium: {
                            height: '270',
                            size: '876325',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.gif',
                            width: '480',
                        },
                        downsized: {
                            height: '270',
                            size: '876325',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.gif',
                            width: '480',
                        },
                        preview_webp: {
                            height: '106',
                            size: '31722',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy-preview.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy-preview.webp',
                            width: '188',
                        },
                        original_mp4: {
                            height: '270',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy.mp4',
                            mp4_size: '239635',
                            width: '480',
                        },
                        fixed_height_small: {
                            height: '100',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100.mp4',
                            mp4_size: '28036',
                            size: '99273',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100.webp',
                            webp_size: '40046',
                            width: '178',
                        },
                        fixed_height: {
                            height: '200',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200.mp4',
                            mp4_size: '85110',
                            size: '313688',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200.webp',
                            webp_size: '105914',
                            width: '356',
                        },
                        downsized_small: {
                            height: '242',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy-downsized-small.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy-downsized-small.mp4',
                            mp4_size: '66207',
                            width: '430',
                        },
                        preview: {
                            height: '122',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy-preview.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy-preview.mp4',
                            mp4_size: '22634',
                            width: '216',
                        },
                        fixed_width_downsampled: {
                            height: '113',
                            size: '60631',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200w_d.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200w_d.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200w_d.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200w_d.webp',
                            webp_size: '34476',
                            width: '200',
                        },
                        fixed_width_small_still: {
                            height: '57',
                            size: '4115',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100w_s.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100w_s.gif',
                            width: '100',
                        },
                        fixed_width_small: {
                            height: '57',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100w.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100w.mp4',
                            mp4_size: '13312',
                            size: '41469',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100w.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100w.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/100w.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=100w.webp',
                            webp_size: '21098',
                            width: '100',
                        },
                        original_still: {
                            height: '270',
                            size: '91617',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy_s.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy_s.gif',
                            width: '480',
                        },
                        fixed_width_still: {
                            height: '113',
                            size: '13618',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200w_s.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200w_s.gif',
                            width: '200',
                        },
                        looping: {
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy-loop.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy-loop.mp4',
                            mp4_size: '3434967',
                        },
                        fixed_width: {
                            height: '113',
                            mp4:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200w.mp4?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200w.mp4',
                            mp4_size: '31306',
                            size: '121292',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200w.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200w.gif',
                            webp:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/200w.webp?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=200w.webp',
                            webp_size: '42974',
                            width: '200',
                        },
                        preview_gif: {
                            height: '53',
                            size: '48858',
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/giphy-preview.gif?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=giphy-preview.gif',
                            width: '94',
                        },
                        '480w_still': {
                            url:
                                'https://media3.giphy.com/media/6Bdx9wl8sIh4A/480w_s.jpg?cid=522730231aadc596628a76583f18bbd4997288dd0a2d6232&rid=480w_s.jpg',
                            width: '480',
                            height: '270',
                        },
                    },
                    analytics_response_payload:
                        'e=Z2lmX2lkPTZCZHg5d2w4c0loNEEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01MjI3MzAyMzFhYWRjNTk2NjI4YTc2NTgzZjE4YmJkNDk5NzI4OGRkMGEyZDYyMzI',
                    analytics: {
                        onload: {
                            url:
                                'https://giphy-analytics.giphy.com/simple_analytics?response_id=1aadc596628a76583f18bbd4997288dd0a2d6232&event_type=GIF_SEARCH&gif_id=6Bdx9wl8sIh4A&action_type=SEEN',
                        },
                        onclick: {
                            url:
                                'https://giphy-analytics.giphy.com/simple_analytics?response_id=1aadc596628a76583f18bbd4997288dd0a2d6232&event_type=GIF_SEARCH&gif_id=6Bdx9wl8sIh4A&action_type=CLICK',
                        },
                        onsent: {
                            url:
                                'https://giphy-analytics.giphy.com/simple_analytics?response_id=1aadc596628a76583f18bbd4997288dd0a2d6232&event_type=GIF_SEARCH&gif_id=6Bdx9wl8sIh4A&action_type=SENT',
                        },
                    },
                },
            ],
            pagination: {
                total_count: 5451,
                count: 1,
                offset: 0,
            },
            meta: {
                status: 200,
                msg: 'OK',
                response_id: '1aadc596628a76583f18bbd4997288dd0a2d6232',
            },
        };
        const recipePuppyResponse = {
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
            ],
        };

        nock(process.env.GIPHY_URL_BASE)
            .get(
                `/search?q=French%20Onion%20Tomato%20Soup&api_key=${process.env.GIPHY_API_KEY}&limit=1`,
            )
            .reply(200, giphyResponse);

        nock(process.env.RECIPE_PUPPY_URL_BASE)
            .get(`/?q=tomato`)
            .reply(200, recipePuppyResponse);

        nock(process.env.RECIPE_PUPPY_URL_BASE)
            .get(`/?q=ingredient,ingredient,ingredient`)
            .reply(200, recipePuppyResponse);
    });

    it('Check List Recipes Status Code is 200 OK (1 and 3 ingredients)', async () => {
        let result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=tomato',
        });

        response = JSON.parse(result.payload);
        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 200);
        assert.ok(Array.isArray(response.keywords));
        assert.ok(Array.isArray(response.recipes));
        assert.ok(Array.isArray(response.recipes[0].ingredients));

        result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=ingredient,ingredient,ingredient',
        });

        assert.deepEqual(statusCode, 200);
        assert.ok(Array.isArray(response.keywords));
        assert.ok(Array.isArray(response.recipes));
        assert.ok(Array.isArray(response.recipes[0].ingredients));

    });

    it('Check List Recipes Status Code is 400 (0 ingredients)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 400);
    });

    it('Check List Recipes Status Code is 400 (4 ingredients)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/?i=ingredient,ingredient,ingredient,ingredient',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 400);
    });

    it('Check List Recipes Status Code is 400 without query param', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes/',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 400);
    });

    it('Check List Recipes Status Code is 404 (/recipe/)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipe/',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 404);
    });

    it('Check List Recipes Status Code is 404 (/recipes)', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/recipes',
        });

        const statusCode = result.statusCode;
        assert.deepEqual(statusCode, 404);
    });
});
