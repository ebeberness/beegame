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
  
   for (let i = 0; i < 20; i++) {
     f = createSprite(random(width), random(height/2));
     f.addImage(flowerImg)
     
     f.velocity.y = 0.5;
     flowers.add(f); 
     f.scale=0.15;
   } 

  bee = new Sprite();
  bee.pos={x:50, y:50};

  bee.addImage(beeImg);
  bee.w=5;
  bee.h=5;
  bee.scale = 0.15;
  
  
}

function draw() {
 background(100, 200, 30);

 drawSprites();
 
 bee.velocity.x = (mouseX-bee.position.x)*0.2;
 bee.velocity.y = (mouseY-bee.position.y)*0.2;

 bee.overlap(flowers, removeAndScore);


 fill(255);
 noStroke();
 textSize(30);
 textAlign(CENTER, CENTER);

    if (flowers.length > 0) {
    text(score, width/2, height/2);
    }
    else {
    text("You collected the pollen from all 20 flowers!", width/2, height/2);
    }

    if (flowers.position>windowWidth && flowers.position>windowHeight){
      text("You lose :( You didn't collect the pollen from all of the flowers.")
    }
}

function removeAndScore(b, flower) {
  score += 1;
  flower.remove();
}



