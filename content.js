function quack() {
    var quackAudio = new Audio("audio/quack.wav")
    quackAudio.play();
};

document.querySelector('#goose').addEventListener('click', quack);