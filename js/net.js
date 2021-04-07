class Net {
    constructor(x, y, width, height) {
        this.x = 350;
        this.y = 550;
        this.width = 100;
        this.height = 100;
        this.sp

    }
    draw() {
        const imageNet = new Image();
        imageNet.src="./images/basketball-net.png"
        context.drawImage(imageNet, this.x, this.y, this.width, this.height)
    }
    moveNet(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37:
                if(this.x>=0) {
                this.x -= 25;
                }   
            break;
            case 39:
                if(this.x<=700) {
                this.x += 25
                }
            break;
            case 65:
                this.x=1 
            break;
            case 68:
                this.x =700
            break;
            case 83:
                this.x=350
        }
    }
}
