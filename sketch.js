var canvas;
var music,rect1,rect2,rect3,rect4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     rect1 = createSprite(0,580,360,30)
     rect1.shapeColor = "blue"
    rect2 = createSprite(295,580,200,30)
    rect2.shapeColor = "orange"
    rect3 = createSprite(515,580,200,30)
    rect3.shapeColor = "red"
    rect4 = createSprite(740,580,220,30)
    rect4.shapeColor = "green"
    box = createSprite(random(20,750) , 100,40,40)
    box.shapeColor = "white"

    //create box sprite and give velocity
    box.velocityY = 9;
    box.velocityX = 4;
}

function draw() {
    background("black");
    //create edgeSprite
   edges =  createEdgeSprites()
   box.bounceOff(edges)

   if(rect1.isTouching(box) && box.bounceOff(rect1)) {
    box.shapeColor = "blue"
    music.play();
   }
   if(rect2.isTouching(box)) {
       box.shapeColor = "orange"
       box.velocityX =0; 
       box.velocityY = 0;
       music.stop();
   }

   if(rect3.isTouching(box) && box.bounceOff(rect3)) {
    box.shapeColor = "red"

   }

   if(rect4.isTouching(box) && box.bounceOff(rect4)) {
    box.shapeColor = "green"

   }
   

    drawSprites()
    //add condition to check if box touching surface and make it box
}
