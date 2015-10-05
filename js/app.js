// Enemies our player must avoid

var enemyStartLoc = [50, 135, 220];

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x;
    this.y;
    this.speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x++;

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.lastDt = new Date();
};

Enemy.prototype.startLoc = function(x, y){
    this.x = x;
    this.y = y;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 435;
    this.speed;
}

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.handleInput = function(key){

    console.log(this.x,this.y);

    switch(key){
        case 'left':
            if (this.x > 0)
                this.x -= 100;
            break;
        case 'right':
            if (this.x < 400)
                this.x += 100;
            break;
        case 'up':
            if (this.y > 35)
                this.y -= 100;
            break;
        case 'down':
            if (this.y < 435)
                this.y += 100;
            break;
        default:

    }



};

var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy = new Enemy();
enemy.startLoc(0,50);

var allEnemies = [ enemy ]

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
