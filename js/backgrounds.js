class LakersBackground {
    constructor (x, y, width, height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
    }
        drawBackground() {
            const imageLakers = new Image();
            imageLakers.src="./images/lakers-logo.png"
            context.drawImage(imageLakers, this.x, this.y, this.width, this.height)
        }
        clearArea() {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }
}

class GswBackground {
    constructor (x, y, width, height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
    }
        drawBackground() {
            const imageGsw = new Image();
            imageGsw.src="./images/gsw-logo.png"
            context.drawImage(imageGsw, this.x, this.y, this.width, this.height)
        }
        clearArea() {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }
}

class CelticsBackground {
    constructor (x, y, width, height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
    }
        drawBackground() {
            const imageCeltics = new Image();
            imageCeltics.src="./images/celtics-logo.png"
            context.drawImage(imageCeltics, this.x, this.y, this.width, this.height)
        }
        clearArea() {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }
}

class BullsBackground {
    constructor (x, y, width, height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
    }
        drawBackground() {
            const imageBulls = new Image();
            imageBulls.src="./images/bulls-logo.png"
            context.drawImage(imageBulls, this.x, this.y, this.width, this.height)
        }
        clearArea() {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }
}