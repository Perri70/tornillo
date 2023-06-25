var tornillo1, tornillo2;


function setup() {
  createCanvas(1000, 400);
  //quise hacer un tornillo
  tornillo1 = createSprite(200, 350, 20, 130);
  tornillo2 = createSprite(200, 350, 30, 40);


}


function draw() {
  background("black");

  drawSprites();
  
}