class Ball {
    constructor(x, color) {
        this.x = x
        this.y = 0
        this.width = 30
        this.height = 30
        this.color = color; //tied the image and the points to the balls colour
        this.velocity = Math.floor(Math.random() * 8)+1;
        this.image = new Image();
        this.setPoints()

    }

    setPoints() {
        if(this.color === "orange") {
            return 1
        } else if(this.color === "green") {
            return 3
        } else {
            return 0
        }
    }


    draw() {
        if(this.color === "orange") {
            this.image.src="./images/basketball-orange.png"

        } else if(this.color === "green") {
            this.image.src="./images/basketball-green.png"
        } else {
            this.image.src="./images/basketball-red.png"
        }
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}