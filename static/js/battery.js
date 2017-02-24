var battery = function battery() {
    navigator.getBattery().then(function(battery) {
        var level = battery.level;
        $('.battery').text( parseInt(level * 100) + '%' );
    })
};
