var weather = function weather() {
    var makeWeather = function makeWeather(data) {
        store.weather.index = store.weather.index + 1;
        var index = store.weather.index;
        var dat = data.list[index];
        var K = dat.main.temp;
        var F = parseInt(((K - 273.15) * 1.8) + 32);

        store.weather.working_description = F + " degrees, with " +
            dat.weather[0].description +
            " and winds of " + dat.wind.speed + " miles per hour"
        ; 

        $('.weather')
            .text(F + String.fromCharCode(parseInt('00B0', 16)))
            .parent().parent()
            .unbind('click').click(function() {
                makeWeather(data);
            })
        ;

        if (index > 0) {
            $('.weather').append($('<p class="hm-weather"></p>').text(data.list[index].dt_txt));
        }
    };

    $get(
        'http://api.openweathermap.org/data/2.5/forecast',
        {
            id: config.weather.city_id,
            appid: config.weather.key
        },
        function(d) {
            makeWeather(d, store.weather.index);
            store.weather.data = d;
        }
    );
};
