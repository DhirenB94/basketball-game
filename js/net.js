class Net {
    constructor(x, y, width, height) {
        this.x = 350;
        this.y = 520;
        this.width = 100;
        this.height = 100;

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
                if(this.x>0) {
                this.x -= 50;
                }   
                break;
            case 39:
                if(this.x<700) {
                this.x += 50
                }
                break;

        }
    }
}
