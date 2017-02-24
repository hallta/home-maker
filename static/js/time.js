var time = function time(config) {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var suff = 'AM';

    if (hour > 12) {
        hour = hour - 12;
        suff = 'PM'
    }

    $('.clock').text(hour + ':' + min + ' ' + suff);

    store.time.current_time = hour + ' ' + min + ' ' + suff.split('').join(' '); 
};
