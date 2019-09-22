class Enemy {

    constructor (x,y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }

    update(dt) {
        // You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
        this.x = this.x + this.speed * dt;
        
        //if the enemey cross the canvas
        if (this.x > 480) {
            this.x = 0;
            this.speed = Math.floor(Math.random() * 300 + 150);
        }

        this.checkCollision();
  
    };
    
    // Draw the enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    checkCollision(){
        if (player.x < this.x + 70 && player.x + 70 > this.x )
        if (player.y < this.y + 60 && 60 + player.y > this.y)
        {
            player.x = 200;
            player.y = 400;
        }
    }

}


class Player {

     constructor(x,y){
        this.x = x;
        this.y = y;
        this.player = 'images/char-boy.png';
     }

     update(dt) {
        // if the player reach the water 
        if (this.y == 0) {
            alert("Congratulations You Did it !");
            player.x = 200;
            player.y = 400;
        };
    };
    
    // Draw the Player on the screen
    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    };
    
    handleInput(keyPress) {
      
        if (keyPress == 'left' && this.x > 0) {this.x -= 100;};
    
        if (keyPress == 'right' && this.x < 400) { this.x += 100;};
    
        if (keyPress == 'up' && this.y > 0) {this.y -= 80;};
    
        if (keyPress == 'down' && this.y < 400) {this.y += 80;};
    
    };
}

var player = new Player(200, 400);

var enemy1 = new Enemy (0 , 60 , 300);
var enemy2 = new Enemy (0 , 145 , 300);
var enemy3 = new Enemy (0 , 220 , 300);

var allEnemies = [ enemy1, enemy2, enemy3 ];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});