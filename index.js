let bee;
let f;
let score = 0;

function preload() {
  flowerImg = loadImage('/flowergame.png');
  beeImg = loadImage('bee.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  bee = createSprite(200,200);
  bee.addImage(beeImg);
  bee.scale = 0.25;
  

  flowers = new Group();
  
  for (let i = 0; i < 10; i++) {
    f = createSprite(random(windowWidth), random(windowHeight/2),
    random(25, 100), random(25, 100));
    f.addImage(flowerImg);
    f.scale=0.25;
    f.velocity.y = 0.5;
    flowers.add(f);
    f.onMouseOver=removeAndScore;
  } 
 
}

function draw() {
background(100, 200, 30);

  bee.velocity.x = (mouseX-bee.position.x)*0.2;
  bee.velocity.y = (mouseY-bee.position.y)*0.2;
 
  if (score < 10) {
    text(score, windowWidth/2, windowHeight/2);
  }
  else {
    text("you win!", windowWidth/2, windowHeight/2);
  } 

  drawSprites();
}

function removeAndScore() {
  score += 1;
  f.remove();
}