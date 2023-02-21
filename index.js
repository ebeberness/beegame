let bee;
let f;
let score = 0;
let screen = 0;
let floor;

function preload() {
  flowerImg = loadImage('/flowergame.png');
  beeImg = loadImage('bee.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  
  fill(100, 200, 30);
  floor = new Sprite(windowWidth/2, windowHeight+30, windowWidth, 5, "s");

  flowers = new Group();

  for (let i = 0; i < 30; i++) { 
    f = new Sprite(random(width), random(height/2));
    f.addImage(flowerImg);
    flowers.add(f); 
    f.velocity.y = 1;
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
  if(screen == 0){
  	gameOn();
  }else if(screen==1){
  	endScreen();
  }	
}

function gameOn(){


  background(100, 200, 30);


  bee.velocity.x = (mouseX-bee.position.x)*0.2;
  bee.velocity.y = (mouseY-bee.position.y)*0.2;

  drawSprites();
  
  bee.overlap(flowers, removeAndScore);

  flowers.overlap(floor, updateScreen);

  fill(255);
  noStroke();
  textSize(30);
  textAlign(CENTER, CENTER);

  if (flowers.length > 0) {
    text("Collect the pollen from all of the flowers", width/2, height/2.3);
    text(score + "/30", width/2, height/2);
    }
  else {
    background ("yellow");
    fill("black");
    text("You collected the pollen from all " + score + " flowers! Reload the page to play again", width/2, height/2);
  }

 }

function removeAndScore(b, flower) {
  score += 1;
  flower.remove();
}

function updateScreen (flower, floor){
  screen = 1;
}

function endScreen(){
  clear();
  background("blue");
  text( "You lost, your score was " + score + ". Reload the page to try again", width / 2, height / 2);
  
}
