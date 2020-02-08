var controller = (function() {

    function quack() {
        var quackAudio = new Audio("audio/quack.wav")
        quackAudio.play();
    };

    var setupEventListeners = function() {

        document.querySelector('.goose').addEventListener('click', quack);
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };


})();

controller.init();