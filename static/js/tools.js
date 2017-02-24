var $get = function get(url, data, callback) {
    $.ajax({
        url: url,
        data: data,
        success: callback
    });
};
