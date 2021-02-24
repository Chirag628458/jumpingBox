var canvas;
var music;
var square;
var surf1, surf2, surf3, surf4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
   var surf1= createSprite(40,550,100,20)
   surf1.shapeColor="blue"

   var surf2= createSprite(90,550,100,20)
   surf2.shapeColor="green"

   var surf3= createSprite(120,550,100,20)
   surf3.shapeColor="red"

   var surf4= createSprite(160,550,100,20)
   surf4.shapeColor="yellow"

    //create box sprite and give velocity
    var square= createSprite(300,300,50,50)
    square.x=200
    square.y=200
    square.velocityX=-4
    square.velocityY=-2
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   if(square.isTouching(surf1)){
       square.shapeColor="blue"
   }

   
   
    //add condition to check if box touching surface and make it box
    drawSprites();
}

function isTouching(){
    if(square.x- surf1.x< square.width/2 + surf1.width/2 && 
        surf1.x- square.x< square.width/2 + surf1.width/2)
      {
       square.velocityX= square.velocityX*(-1);
       
      }
     
      if( square.y- surf1.y< square.height/2 + surf1.height/2 && 
        surf1.y- square.y< square.height/2 + surf1.height/2  )
      {
        square.velocityY= square.velocityY*(-1);
        
      }
}
