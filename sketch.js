var bg,bgImg;



function preload(){
  
 

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)


}

function draw() {
  background(0); 




 

drawSprites();

}
