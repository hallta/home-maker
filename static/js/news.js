var News;
News = {
    buildNews: function buildNews() {
        var title = store.news.articles[ store.news.index ].title;
        $('.news').text(title);

        store.news.index = ( store.news.index + 1 ) % store.news.articles.length;
    },

    sayNews: function sayNews(incr) {
        if (incr) News.buildNews();
        store.news._index = store.news.index;
        Utter.say( store.news.articles[ store.news._index ].title );
    },

    openArticle: function openNews() {
        window.location = store.news.articles[ store.news._index ].url;
    }
};

var news = function news(config) {
    $get(
        'https://newsapi.org/v1/articles?source=the-next-web',
        {
            sortBy: 'latest',
            apiKey: config.news.key
        },
        function(d) {
            store.news.articles = d.articles;
            store.news.index = 0;

            setInterval(News.buildNews, 10000);
            News.buildNews();
        }
    );
};
