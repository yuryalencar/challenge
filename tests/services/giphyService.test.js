const assert = require('assert');
const nock = require('nock');
const GiphyService = require('../../src/services/giphyService');
require('dotenv').config();

describe.only('Test Suite of the GiphyService', function () {
    this.beforeAll(() => {
        const response = {
            data: [
                {
                    type: 'gif',
                    id: 'KXBtTtm3kB8BO',
                    url:
                        'https://giphy.com/gifs/mrw-smoothie-ketchup-KXBtTtm3kB8BO',
                    slug: 'mrw-smoothie-ketchup-KXBtTtm3kB8BO',
                    bitly_gif_url: 'https://gph.is/2fzQWmm',
                    bitly_url: 'https://gph.is/2fzQWmm',
                    embed_url: 'https://giphy.com/embed/KXBtTtm3kB8BO',
                    username: '',
                    source:
                        'https://www.reddit.com/r/reactiongifs/comments/5af9yq/mrw_i_get_too_high_and_realize_ketchup_could_be/',
                    title: 'veggie tales tomato GIF',
                    rating: 'g',
                    content_url: '',
                    source_tld: 'www.reddit.com',
                    source_post_url:
                        'https://www.reddit.com/r/reactiongifs/comments/5af9yq/mrw_i_get_too_high_and_realize_ketchup_could_be/',
                    is_sticker: 0,
                    import_datetime: '2016-11-03 20:08:47',
                    trending_datetime: '0000-00-00 00:00:00',
                    images: {
                        downsized_large: {
                            height: '213',
                            size: '1367731',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                            width: '320',
                        },
                        fixed_height_small_still: {
                            height: '100',
                            size: '9622',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100_s.gif',
                            width: '150',
                        },
                        original: {
                            frames: '41',
                            hash: '87403408819eabeaa3bd57a9ab47a18b',
                            height: '213',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.mp4',
                            mp4_size: '123710',
                            size: '1367731',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.webp',
                            webp_size: '430206',
                            width: '320',
                        },
                        fixed_height_downsampled: {
                            height: '200',
                            size: '180246',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200_d.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200_d.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200_d.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200_d.webp',
                            webp_size: '57402',
                            width: '300',
                        },
                        downsized_still: {
                            height: '213',
                            size: '1367731',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy_s.gif',
                            width: '320',
                        },
                        fixed_height_still: {
                            height: '200',
                            size: '31193',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200_s.gif',
                            width: '300',
                        },
                        downsized_medium: {
                            height: '213',
                            size: '1367731',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                            width: '320',
                        },
                        downsized: {
                            height: '213',
                            size: '1367731',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                            width: '320',
                        },
                        preview_webp: {
                            height: '129',
                            size: '49652',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-preview.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-preview.webp',
                            width: '194',
                        },
                        original_mp4: {
                            height: '318',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.mp4',
                            mp4_size: '123710',
                            width: '480',
                        },
                        fixed_height_small: {
                            height: '100',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100.mp4',
                            mp4_size: '20294',
                            size: '336449',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100.webp',
                            webp_size: '131738',
                            width: '150',
                        },
                        fixed_height: {
                            height: '200',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200.mp4',
                            mp4_size: '45837',
                            size: '1160789',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200.webp',
                            webp_size: '376470',
                            width: '300',
                        },
                        downsized_small: {
                            height: '212',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-downsized-small.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-downsized-small.mp4',
                            mp4_size: '73052',
                            width: '320',
                        },
                        preview: {
                            height: '212',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-preview.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-preview.mp4',
                            mp4_size: '44075',
                            width: '320',
                        },
                        fixed_width_downsampled: {
                            height: '133',
                            size: '84882',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w_d.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w_d.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w_d.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w_d.webp',
                            webp_size: '29340',
                            width: '200',
                        },
                        fixed_width_small_still: {
                            height: '67',
                            size: '5224',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w_s.gif',
                            width: '100',
                        },
                        fixed_width_small: {
                            height: '67',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w.mp4',
                            mp4_size: '14717',
                            size: '169312',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w.webp',
                            webp_size: '73830',
                            width: '100',
                        },
                        original_still: {
                            height: '213',
                            size: '35581',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy_s.gif',
                            width: '320',
                        },
                        fixed_width_still: {
                            height: '133',
                            size: '15058',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w_s.gif',
                            width: '200',
                        },
                        looping: {
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-loop.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-loop.mp4',
                            mp4_size: '619396',
                        },
                        fixed_width: {
                            height: '133',
                            mp4:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w.mp4',
                            mp4_size: '26765',
                            size: '547865',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w.gif',
                            webp:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w.webp',
                            webp_size: '192078',
                            width: '200',
                        },
                        preview_gif: {
                            height: '85',
                            size: '48599',
                            url:
                                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-preview.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-preview.gif',
                            width: '128',
                        },
                        '480w_still': {
                            url:
                                'https://media3.giphy.com/media/KXBtTtm3kB8BO/480w_s.jpg?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=480w_s.jpg',
                            width: '480',
                            height: '320',
                        },
                    },
                    analytics_response_payload:
                        'e=Z2lmX2lkPUtYQnRUdG0za0I4Qk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01MjI3MzAyMzM0YzU5MWMzYTk2ZGNkMWJmODI2NjBkNDQ1MTlmMzk1MGU3MjEyY2I',
                    analytics: {
                        onload: {
                            url:
                                'https://giphy-analytics.giphy.com/simple_analytics?response_id=34c591c3a96dcd1bf82660d44519f3950e7212cb&event_type=GIF_SEARCH&gif_id=KXBtTtm3kB8BO&action_type=SEEN',
                        },
                        onclick: {
                            url:
                                'https://giphy-analytics.giphy.com/simple_analytics?response_id=34c591c3a96dcd1bf82660d44519f3950e7212cb&event_type=GIF_SEARCH&gif_id=KXBtTtm3kB8BO&action_type=CLICK',
                        },
                        onsent: {
                            url:
                                'https://giphy-analytics.giphy.com/simple_analytics?response_id=34c591c3a96dcd1bf82660d44519f3950e7212cb&event_type=GIF_SEARCH&gif_id=KXBtTtm3kB8BO&action_type=SENT',
                        },
                    },
                },
            ],
            pagination: {
                total_count: 1233,
                count: 1,
                offset: 0,
            },
            meta: {
                status: 200,
                msg: 'OK',
                response_id: '34c591c3a96dcd1bf82660d44519f3950e7212cb',
            },
        };

        nock(process.env.GIPHY_URL_BASE)
            .get(
                `/search?q=tomato&api_key=${process.env.GIPHY_API_KEY}&limit=1`,
            )
            .reply(200, response);
    });

    it('Check GiphyService mount query search', async () => {
        const searchTerm = 'French Onion Tomato Soup';
        const expectedResult = `${process.env.GIPHY_URL_BASE}/search?q=French%20Onion%20Tomato%20Soup`;
        const result = new GiphyService(searchTerm)._mountQuerySearch();
        assert.deepEqual(result, expectedResult);
    });

    it('Check GiphyService insert an API KEY', async () => {
        const url = `${process.env.GIPHY_URL_BASE}/search?q=example`;
        const expectedResult = `${process.env.GIPHY_URL_BASE}/search?q=example&api_key=${process.env.GIPHY_API_KEY}`;
        const result = new GiphyService('')._insertApiKey(url);
        assert.deepEqual(result, expectedResult);
    });

    it('Check GiphyService insert an result limit', async () => {
        const url = `${process.env.GIPHY_URL_BASE}/search?q=example&api_key=${process.env.GIPHY_API_KEY}`;
        const expectedResult = `${process.env.GIPHY_URL_BASE}/search?q=example&api_key=${process.env.GIPHY_API_KEY}&limit=1`;
        const result = new GiphyService('')._insertResultLimit(url);
        assert.deepEqual(result, expectedResult);
    });

    it('Check GiphyService map gif object request', async () => {
        const gifObject = {
            type: 'gif',
            id: 'KXBtTtm3kB8BO',
            url: 'https://giphy.com/gifs/mrw-smoothie-ketchup-KXBtTtm3kB8BO',
            slug: 'mrw-smoothie-ketchup-KXBtTtm3kB8BO',
            bitly_gif_url: 'https://gph.is/2fzQWmm',
            bitly_url: 'https://gph.is/2fzQWmm',
            embed_url: 'https://giphy.com/embed/KXBtTtm3kB8BO',
            username: '',
            source:
                'https://www.reddit.com/r/reactiongifs/comments/5af9yq/mrw_i_get_too_high_and_realize_ketchup_could_be/',
            title: 'veggie tales tomato GIF',
            rating: 'g',
            content_url: '',
            source_tld: 'www.reddit.com',
            source_post_url:
                'https://www.reddit.com/r/reactiongifs/comments/5af9yq/mrw_i_get_too_high_and_realize_ketchup_could_be/',
            is_sticker: 0,
            import_datetime: '2016-11-03 20:08:47',
            trending_datetime: '0000-00-00 00:00:00',
            images: {
                downsized_large: {
                    height: '213',
                    size: '1367731',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                    width: '320',
                },
                fixed_height_small_still: {
                    height: '100',
                    size: '9622',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100_s.gif',
                    width: '150',
                },
                original: {
                    frames: '41',
                    hash: '87403408819eabeaa3bd57a9ab47a18b',
                    height: '213',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.mp4',
                    mp4_size: '123710',
                    size: '1367731',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.webp',
                    webp_size: '430206',
                    width: '320',
                },
                fixed_height_downsampled: {
                    height: '200',
                    size: '180246',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200_d.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200_d.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200_d.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200_d.webp',
                    webp_size: '57402',
                    width: '300',
                },
                downsized_still: {
                    height: '213',
                    size: '1367731',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy_s.gif',
                    width: '320',
                },
                fixed_height_still: {
                    height: '200',
                    size: '31193',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200_s.gif',
                    width: '300',
                },
                downsized_medium: {
                    height: '213',
                    size: '1367731',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                    width: '320',
                },
                downsized: {
                    height: '213',
                    size: '1367731',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
                    width: '320',
                },
                preview_webp: {
                    height: '129',
                    size: '49652',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-preview.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-preview.webp',
                    width: '194',
                },
                original_mp4: {
                    height: '318',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.mp4',
                    mp4_size: '123710',
                    width: '480',
                },
                fixed_height_small: {
                    height: '100',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100.mp4',
                    mp4_size: '20294',
                    size: '336449',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100.webp',
                    webp_size: '131738',
                    width: '150',
                },
                fixed_height: {
                    height: '200',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200.mp4',
                    mp4_size: '45837',
                    size: '1160789',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200.webp',
                    webp_size: '376470',
                    width: '300',
                },
                downsized_small: {
                    height: '212',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-downsized-small.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-downsized-small.mp4',
                    mp4_size: '73052',
                    width: '320',
                },
                preview: {
                    height: '212',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-preview.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-preview.mp4',
                    mp4_size: '44075',
                    width: '320',
                },
                fixed_width_downsampled: {
                    height: '133',
                    size: '84882',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w_d.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w_d.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w_d.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w_d.webp',
                    webp_size: '29340',
                    width: '200',
                },
                fixed_width_small_still: {
                    height: '67',
                    size: '5224',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w_s.gif',
                    width: '100',
                },
                fixed_width_small: {
                    height: '67',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w.mp4',
                    mp4_size: '14717',
                    size: '169312',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/100w.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=100w.webp',
                    webp_size: '73830',
                    width: '100',
                },
                original_still: {
                    height: '213',
                    size: '35581',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy_s.gif',
                    width: '320',
                },
                fixed_width_still: {
                    height: '133',
                    size: '15058',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w_s.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w_s.gif',
                    width: '200',
                },
                looping: {
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-loop.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-loop.mp4',
                    mp4_size: '619396',
                },
                fixed_width: {
                    height: '133',
                    mp4:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w.mp4?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w.mp4',
                    mp4_size: '26765',
                    size: '547865',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w.gif',
                    webp:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/200w.webp?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=200w.webp',
                    webp_size: '192078',
                    width: '200',
                },
                preview_gif: {
                    height: '85',
                    size: '48599',
                    url:
                        'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy-preview.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy-preview.gif',
                    width: '128',
                },
                '480w_still': {
                    url:
                        'https://media3.giphy.com/media/KXBtTtm3kB8BO/480w_s.jpg?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=480w_s.jpg',
                    width: '480',
                    height: '320',
                },
            },
            analytics_response_payload:
                'e=Z2lmX2lkPUtYQnRUdG0za0I4Qk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01MjI3MzAyMzM0YzU5MWMzYTk2ZGNkMWJmODI2NjBkNDQ1MTlmMzk1MGU3MjEyY2I',
            analytics: {
                onload: {
                    url:
                        'https://giphy-analytics.giphy.com/simple_analytics?response_id=34c591c3a96dcd1bf82660d44519f3950e7212cb&event_type=GIF_SEARCH&gif_id=KXBtTtm3kB8BO&action_type=SEEN',
                },
                onclick: {
                    url:
                        'https://giphy-analytics.giphy.com/simple_analytics?response_id=34c591c3a96dcd1bf82660d44519f3950e7212cb&event_type=GIF_SEARCH&gif_id=KXBtTtm3kB8BO&action_type=CLICK',
                },
                onsent: {
                    url:
                        'https://giphy-analytics.giphy.com/simple_analytics?response_id=34c591c3a96dcd1bf82660d44519f3950e7212cb&event_type=GIF_SEARCH&gif_id=KXBtTtm3kB8BO&action_type=SENT',
                },
            },
        };
        const expectedResult = {
            gif:
                'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
        };
        const result = new GiphyService('')._mapGif(gifObject);
        assert.deepEqual(result, expectedResult);
    });

    it('Check GiphyService map gif object request', async () => {
        const expectedResult = [
            {
                gif:
                    'https://media2.giphy.com/media/KXBtTtm3kB8BO/giphy.gif?cid=5227302334c591c3a96dcd1bf82660d44519f3950e7212cb&rid=giphy.gif',
            },
        ];
        const result = await new GiphyService('tomato').getGifs();
        assert.deepEqual(result, expectedResult);
    });
});
