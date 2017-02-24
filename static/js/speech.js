var speechInit = function speechInit() {

    var enabled = false;
    var inMode = false;

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.onresult = function(event) {
        var res = event.results;
        var wut = res[res.length -1][0].transcript;

        if (wut.toLowerCase().match('(?:hey|hi).*' + config.speech_name)) {
            Utter.say('question_yes');
            enabled = true;
        }
        else if ( enabled ) {

            // Show picture show
            if ( wut.match('(?:pics|pictures|photos)') ) {
                $('.photo-show').click();
                inMode = true;
            }

            // Play music
            else if ( wut.match('music') ) {
                $('.fa-music').click();
            }

            // Weather stuff
            else if ( wut.match('weather') ) {
                Utter.say(store.weather.working_description);
                inMode = true;
            }

            // What time is it?
            else if ( wut.match('time') ) {
                Utter.say(store.time.current_time);
            }

            // What's the news?
            else if ( wut.match('news') ) {
                News.sayNews();
                inMode = true;
            }

            enabled = false;
        }

        // When in a mode of discussion ... 
        else if ( inMode ) {

            // Next weather stream
            if ( wut.match('forecast') ) {
                $('.weather').click();
                Utter.say(store.weather.working_description);
            }

            // Next news stream
            else if ( wut.match('next') ) {
                News.sayNews(true);
            }

            // Open the article
            else if ( wut.match('open') ) {
                News.openArticle();
            }

            // Stop the discussion
            else if ( wut.match('sto[kp]') ) {
                $('.photo-container').click();
            }
        }

        Log.log('wut: "' + wut + '" (enabled: '+enabled+')(inMode:'+inMode+')');
    }

    recognition.start();
};
