var date = function date(config) {
    var d = new Date();
    var date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

    $('.calendar').text(date);
};
