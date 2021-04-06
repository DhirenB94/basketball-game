let currentGame;
let animationId;
let ballsFrequency = 0;
let myMusic = new Audio ('./Crowd Cheers and Applause Sound Effects Super Extend.mp3')

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById('game-over-red-ball').style.display = 'none';
document.getElementById('game-over-orange-ball').style.display = 'none'


document.getElementById('start-button').onclick = () => {
    startGame();
}

document.addEventListener('keydown', (e) => {
    currentGame.net.moveNet(e.keyCode);
});

function startGame() {
     myMusic.loop = true
     myMusic.play();
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
   
     //  if ((ball.y + ball.height > currentGame.net.y) &&
    //     (ball.x + ball.width > currentGame.net.x) &&
    //     (ball.x < currentGame.net.x + currentGame.net.width)) {
    //         return true;
    //     }
    // return false;
    

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
               currentGame.gameRunning = false
                document.getElementById('page').style.display = 'none';
                document.getElementById('game-over-red-ball').style.display  = 'block';
                
            }
            currentGame.score += ball.setPoints();
            currentGame.balls.splice(index, 1);
            document.getElementById("score").innerText = currentGame.score;
        }


        if (ball.y > 550 && ball.color ==="orange") {
            currentGame.lives --;
            document.getElementById('lives').innerHTML = currentGame.lives;
            currentGame.balls.splice(index, 1); 
        } else if (ball.y > 550) {
            currentGame.balls.splice(index, 1);
        }
        
    })
    
    if (currentGame.lives <= 0) {
           currentGame.gameRunning = false
            document.getElementById('page').style.display = 'none';
            document.getElementById('game-over-orange-ball').style.display  = 'block';
    }

    if(currentGame.gameRunning) {
        animationId = requestAnimationFrame(updateCanvas); 
    } else {
        gameOver()
    }
}

function gameOver() {
    cancelAnimationFrame(animationId)
    ballsFrequency = 0;
    currentGame.obstacles = [];
    myMusic.pause()
}