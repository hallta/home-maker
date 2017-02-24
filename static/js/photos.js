var photos = function photos() {
    var dbx = new Dropbox({ accessToken: config.dropbox.key });
    var pics = [];

    dbx.filesListFolder({path: ''})
        .then(function(res) {
            for ( i in res.entries ) {
                dbx.filesGetTemporaryLink({ path: res.entries[i].path_display })
                    .then(function(r) {
                        pics.push(r.link);
                    }).catch(function(e) {
                        Error.throw(e);
                    });
            }

        }).catch(function(error) {
            Error.throw(error);
        });

    $('.photo-show').unbind('click').click(function() {
        $('.button-container').fadeOut('fast', function() {
            $('.photo-container').fadeIn('fast').removeClass('hidden').click(function() {
                clearInterval(store.photos.interval);
                $('.photo-container').fadeOut('fast', function() {
                    $('.button-container').fadeIn('fast');
                });
            });

            var i = 0;
            var cyclePhotos = function cyclePhotos() {
                $('img.photo-holster').attr('src', pics[i]).attr('_index', i);
                i = ( i + 1 ) % pics.length;
            };

            store.photos.interval = setInterval(cyclePhotos, 5000)
            cyclePhotos();
        });
    });
};
