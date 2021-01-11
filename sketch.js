var canvas;
var music;
var greenBox;
var redpinkBox;
var orangeBox;
var blueBox;
var coolBox;
var edges;

function preload() {
  
    music = loadSound("music.mp3");
  
}

function setup() {
  
    canvas = createCanvas(650,600);
  
    edges = createEdgeSprites();
  
    blueBox = createSprite(100,500,100,50);
    blueBox.shapeColor = "blue"

    greenBox = createSprite(250,500,100,50);
    greenBox.shapeColor = "green"

    redpinkBox = createSprite(400,500,100,50);
    redpinkBox.shapeColor = "red"
  
    orangeBox = createSprite(550,500,100,50);
    orangeBox.shapeColor = "orange"

    //create box sprite and give velocity
  
    coolBox = createSprite(350,100,50,50);
    coolBox.shapeColor = "white"
    coolBox.velocityX = -5;
    coolBox.velocityY = 7;
    coolBox.x = Math.round(random(20,750));
}

function draw() {
  
    background(rgb(169,169,169));
  
    //add condition to check if box touching surface and make it box
  
  coolBox.bounceOff(edges);
  
  if(coolBox.isTouching(blueBox) && coolBox.bounceOff(blueBox)) {
    
    coolBox.shapeColor = "blue";
    
    music.play();
    
  } 
  
  if(coolBox.isTouching(orangeBox) && coolBox.bounceOff(orangeBox)) {
    
    coolBox.shapeColor = "orange";
    
    coolBox.velocityX = 0;
    coolBox.velocityY = 0;
    
    music.stop();
    
   }

  if(coolBox.isTouching(greenBox) && coolBox.bounceOff(greenBox)){
    
    coolBox.shapeColor = "green"
     
   }

  if(coolBox.isTouching(redpinkBox) && coolBox.bounceOff(redpinkBox)){
    
    coolBox.shapeColor = "red"
     
   }
    
  drawSprites();
  
}
