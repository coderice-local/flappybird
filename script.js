var pipe = document.getElementById("pipe");
var pipe_gap = document.getElementById("pipe-gap");
var bird = document.getElementById("bird");
var score = document.getElementById("score");
var currentScore = 0;

pipe.addEventListener("animationiteration", function(){
    randomPipeGap();
    calculateScore();
})

setInterval(function(){
    addGravity();
    detectCollision();
}, 10);

function addGravity() {
    var currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = ((currentBirdTop) + 1) + "px"
}

function detectCollision() {
    var currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(currentBirdTop >= -10) {
        alert("game over");
    }
    var currentPipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    var pipeGapTop = parseInt(window.getComputedStyle(pipe_gap).getPropertyValue("top"));
    var pipeGapBottom = pipeGapTop + 200;
    if(currentPipeLeft <= 50 && !((currentBirdTop+600 >= pipeGapTop) && (currentBirdTop+600 <= pipeGapBottom))) {
        alert("game over")
    }
}

function randomPipeGap() {
    var newTop = Math.random()*350;
    pipe_gap.style.top = newTop + "px";
}

function calculateScore() {
    currentScore++;
    score.textContent = "Your score is: " + currentScore
}

function jump() {
    var currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = ((currentBirdTop) - 70) + "px"
}