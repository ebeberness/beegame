let bee;
let f;
let score = 0;

function preload() {
  flowerImg = loadImage('/flowergame.png');
  beeImg = loadImage('/bee.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 200, 30);
  
  bee = createSprite(windowWidth/2, windowHeight/2);
  bee.addImage(beeImg);
  

  flowers = new Group();
  
  for (let i = 0; i < 10; i++) {
    f = createSprite(random(width), random(height),
    random(25, 100), random(25, 100));
    f.addImage(flowerImg);
    //f.shapeColor = color(random(200, 255));
    f.velocity.y = 0.5;
    flowers.add(f);
    f.onMouseOver = removeAndScore;
  } 
 
}

function draw() {
  
  drawSprites();

  bee.velocity.x = (mouseX-bee.position.x)*0.2;
  bee.velocity.y = (mouseY-bee.position.y)*0.2;
 
  if (score < 10) {
    text(score, windowWidth/2, windowHeight/2);
  }
  else {
    text("you win!", windowWidth/2, windowHeight/2);
  } 
}

function removeAndScore() {
  score += 1;
  this.remove();
}