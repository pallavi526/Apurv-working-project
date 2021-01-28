var cat,catImage1,catImage2,catImage3,catImage4;
var mouse,mouseImage;
var background;


function preload() {
    //load the images here
    catImage1 = loadAnimation("cat1.png");
    catImage2 = loadAnimation("cat2.png");
    catImage3 = loadAnimation("cat2.png","cat3.png");
    mouseImage1 = loadAnimation("mouse1.png");
    mouseImage2 = loadAnimation("mouse4.png");
    mouseImage3 = loadAnimation("mouse2.png","mouse3.png");
    bg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", catImage1);
    tom.scale = 0.2;
   

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", mouseImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Text(mouseX + ',' + mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide
   
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", catImage3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouseImage3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", catImage2);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", mouseImage2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}
 

}
