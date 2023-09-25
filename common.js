function playSound(sound){
    var audio = new Audio('sounds/' + sound + '.mp3');
    audio.play();
}

function writeText(text) {
    ctx.font = "30px Monospace";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function writePoints(text) {
    ctx.font = "12px Monospace";
    ctx.textAlign = "left";
    ctx.fillText(text, 12, canvas.height);
}

function writeSubText(text) {
    ctx.font = "20px Monospace";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 30);
}

function writeScore(text) {
    ctx.font = "20px Monospace";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, 20);
}

var initialSeconds = Math.floor(Date.now() / 1000)

function writeTime() {
    var seconds = Math.floor(Date.now() / 1000) - initialSeconds;
    ctx.font = "12px Monospace";
    ctx.textAlign = "right";
    ctx.fillText(seconds, canvas.width - 12, canvas.height);
}

function clearCanvas(canvas, canvasContext) {
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

var controls = {
    rightPressed: false,
    leftPressed: false,
    upPressed: false,
    downPressed: false
}

console.log("listening to arrows");
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        controls.rightPressed = true;
    }
    else if (e.keyCode == 37 || e.keyCode == 65) {
        controls.leftPressed = true;
    }
    else if (e.keyCode == 38 || e.keyCode == 87) {
        controls.upPressed = true;
    }
    else if (e.keyCode == 40 || e.keyCode == 83) {
        controls.downPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        controls.rightPressed = false;
    }
    else if (e.keyCode == 37 || e.keyCode == 65) {
        controls.leftPressed = false;
    }
    else if (e.keyCode == 38 || e.keyCode == 87) {
        controls.upPressed = false;
    }
    else if (e.keyCode == 40 || e.keyCode == 83) {
        controls.downPressed = false;
    }
}

//Fonction appeler lors de l'appui d'une touche
$(document).keydown(function(e){
    nom = e.keyCode;
    console.log(nom);
    if((nom == 38)||(nom == 90)||(nom == 87)){
        upPacman();
        $("#controls a#btnUP").addClass("press-upArrow");
        controls.upPressed = true;         		
    }
    if((nom == 40)||(nom == 83)){
        downPacman();
        $("#controls a#btnDOWN").addClass("press-downArrow");
            this.command = "down";
        controls.downPressed = true;  			
    }
    if((nom == 37)||(nom == 81)||(nom == 65)){
        leftPacman();
        $("#controls a#btnLEFT").addClass("press-leftArrow");
            this.command = "left";
        controls.leftPressed = true;  			
    }
    if((nom == 39)||(nom == 68)){
        rightPacman();
        $("#controls a#btnRIGHT").addClass("press-rightArrow");
            this.command = "right";
        controls.rightPressed = true;  			
    }
    if(nom == 82){
        resolveMaze();
        $("#bigRedButton").addClass("press-redButton");
    }
});

//Fonction appeler lors du relachement d'une touche
$(document).keyup(function(e){
    nom = e.keyCode;
    if((nom == 38)||(nom == 90)||(nom == 87)){
	    $("#controls a#btnUP").removeClass("press-upArrow");
        controls.upPressed = false;		
    }
    if((nom == 40)||(nom == 83)){
        $("#controls a#btnDOWN").removeClass("press-downArrow");
        controls.downPressed = false;		 
 }
    if((nom == 37)||(nom == 81)){
        $("#controls a#btnLEFT").removeClass("press-leftArrow");
        controls.leftPressed = false;				
    }
    if((nom == 39)||(nom == 68)){
        $("#controls a#btnRIGHT").removeClass("press-rightArrow");
        controls.rightPressed = false;		
    }
    if(nom == 82){
        $("#bigRedButton").removeClass("press-redButton");
    }
    if(nom == 71){
        $("aside#control form button").removeClass("press-genButton");
    }
});
