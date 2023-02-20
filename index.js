let bee;
let f;
let score = 0;

function preload() {
  flowerImg = loadImage('/flowergame.png');
  beeImg = loadImage('bee.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   flowers = new Group();
  
   for (let i = 0; i < 10; i++) {
     f = createSprite(random(width), random(height));
     f.scale=0.25;
     f.addImage(flowerImg)
     //f.onMouseOver=removeAndScore;
     
     f.velocity.y = 0.5;
     flowers.add(f); 
    
   } 

  bee = createSprite(50, 50);
  bee.scale = 0.5;
  bee.addImage(beeImg);
  
}

function draw() {
 background(100, 200, 30);

 bee.velocity.x = (mouseX-bee.position.x)*0.2;
 bee.velocity.y = (mouseY-bee.position.y)*0.2;

bee.collide(flowers, removeAndScore);

drawSprites();
fill(255);
noStroke();
textSize(72);
textAlign(CENTER, CENTER);

    if (flowers.length > 0) {
    text(score, width/2, height/2);
    }
    else {
    text("you win!", width/2, height/2);
    }
}

function removeAndScore(b, flower) {
  score += 1;
  flower.remove();
}



