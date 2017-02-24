var Utter = function Utter() {
    var voices = undefined;
    window.speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices().filter(function(v){ return v.lang == "en-US"});
    };

    var iterations = {
        question_yes: ['Yes?', "What's up?", 'What can I do you for?']
    };

    return {
        say: function(wut) {
            if ( wut in iterations ) {
                wut = iterations[wut][ Math.floor(Math.random() * iterations[wut].length) ];
            }

            var utterance = new SpeechSynthesisUtterance(wut);
            utterance.voice = voices[25];
            window.speechSynthesis.speak(utterance);

            Log.log('Said "'+ wut +'"');
        }
    }
}();
