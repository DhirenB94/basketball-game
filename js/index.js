let currentGame;
let animationId;
let ballsFrequency = 0;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


document.getElementById('start-button').onclick = () => {
    startGame();
}

document.addEventListener('keydown', (e) => {
    currentGame.net.moveNet(e.keyCode);
});

function startGame() {
    currentGame = new Game();
    currentNet = new Net();
    currentGame.net = currentNet;
    cancelAnimationFrame(animationId);
    updateCanvas();
}

 function detectCollision(ball) {
     return !((currentGame.net.x > ball.x + ball.width) ||
     (currentGame.net.x + currentGame.net.width < ball.x) ||
     (currentGame.net.y > ball.y + ball.height))
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentGame.net.draw();
    ballsFrequency++;
    if (ballsFrequency % 100 === 1) {
        const colors = ["red", "orange", "green"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const randomX = Math.floor(Math.random() * 750);
        const newBall = new Ball(randomX, randomColor)

        currentGame.balls.push(newBall)
    } 
    currentGame.balls.forEach((ball, index) => {
        ball.y += ball.velocity;
        ball.draw();

        if (detectCollision(ball)) {
            if(ball.color==="red") {
                alert('BOOOM!');
                ballsFrequency = 0;
                currentGame.obstacles = [];
                document.getElementById('game-board').style.display = 'none';
            }
            currentGame.score += ball.setPoints();
            currentGame.balls.splice(index, 1);
            document.getElementById("score").innerText = currentGame.score;
        }

        // if (ball.y>720 && ball.color ==="orange") {
        //     currentGame.score ++;
        //     document.getElementById('score').innerHTML = currentGame.score;
        //     currentGame.balls.splice(index, 1);
            
        // }


        // if (ball.y>720 && ball.color ==="green") {
        //     currentGame.score + 3;
        //     document.getElementById('score').innerHTML = currentGame.score;
        //     currentGame.balls.splice(index, 1);
                //DOESNT WORK
        // }

    })


    animationId = requestAnimationFrame(updateCanvas); 
}