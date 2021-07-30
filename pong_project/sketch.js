let myXpos = 125;
let myXpos2 = 850;
let myYPos = 100;
let myYpos2 = 100;
let xPos = 100;
let yPos = 400;

let blueScore = 0
let redScore = 0

let blueLeft, blueRight, blueTop, blueBottom;
let redLeft, redRight, redTop, redBottom;

let xdirection = 2;
let ydirection = 2;

// BASIC BONE STRUCTURE OF PROJECT
function setup() {
    createCanvas(1000, 800);
    noStroke();
    frameRate(60)
    rectMode(CENTER);
    ydirection = random(-5, 5);
}

function draw() {
    background(0);
    //RED BAR

    fill(255, 0, 0)

    rect(myXpos, myYPos, 10, 100)


    //WASD
    if (keyIsDown(87)) {
        myYPos -= 10;
    }
    if (keyIsDown(83)) {
        myYPos += 10;
    }
    //BLUE BAR
    fill(0, 0, 255)
    rect(myXpos2, myYpos2, 10, 100);


    //UP AND DOWN ARROW KEYS

    if (keyIsDown(UP_ARROW)) {
        myYpos2 -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        myYpos2 += 10;
    }

    fill(0, 255, 0);
    ellipse(xPos, yPos, 30, 30);

    xPos += 2 * xdirection;
    yPos += (ydirection - 1.5);

    //we want to check when the X position touches the X position of the bar its moving towards
    // The bar's X position never changes
    //The bar's Y position must also be where the bar's current Y position is
    //If the ball's Y position is = to the bars Y position and the ball's x position is = to the bar's x position it will bounce of 

    // if(yPos == myYpos2 && xPos == 850 || yPos == myYPos && xPos == 125){ 
    //     ydirection *= -1;
    //  }
    if (yPos < 10) {
        ydirection = 3;
    }
    else if (yPos > 800) {
        ydirection = -1;
    }
    if (yPos > myYpos2 - 60 && yPos < myYpos2 + 60 && xPos > myXpos2 - 6 && xPos < myXpos2 + 6 || yPos > myYPos - 60 && yPos < myYPos + 60 && xPos > myXpos - 6 && xPos < myXpos + 6) {
        xdirection *= -1;
    }





    textSize(28);

    fill(random(0, 255), random(0, 255), random(0, 255));
    text('Pong But Better!', 400, 50);

    textSize(20);

    fill(255, 191, 0);
    text('Blue - Score: ' + blueScore, 700, 20)

    fill(255, 191, 0);
    text('Red - Score: ' + redScore, 200, 20)

    if (xPos > 1000) {
        redScore += 1
xPos = 400
    }

    else if (xPos < 0) {
        blueScore += 1
xPos = 400
    }

if(myYpos2 < 0){
myYpos2 = 800
}
else if(myYpos2 > 800)
myYpos2 = 0
}
if(myYPos < 0){
    myYPos = 800
    }
else if(myYPos > 800){
    myYPos = 0
}

function mouseClicked(){
    background(0,0)
    xPos = 400
yPos = 500 
    blueScore = 0
    redScore = 0
}