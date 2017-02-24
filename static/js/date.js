var date = function date() {
    var d = new Date();
    var date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

    $('.calendar').text(date);
};
