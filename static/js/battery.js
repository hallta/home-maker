var battery = function battery(config) {
    navigator.getBattery().then(function(battery) {
        var level = battery.level;
        $('.battery').text( parseInt(level * 100) + '%' );
    })
};
