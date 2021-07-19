var dog, sadDog, database,happyDog;
var foodS, foodStock, Food;

function preload()
{
	sadDog= loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}
function setup() {
  database= firebase.database();
	createCanvas(500, 500);
  dog= createSprite(250,350,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodStock= database.ref('Food');
  foodStock.on("value",readStock);
}
function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
  }
  drawSprites();
  textSize(20);
  stroke(3);
  fill("white");
  text("Food Remaining: "+ foodS ,150,250)
  textSize(20);
  stroke(3);
  fill("white");
  text("Note: Press Up arrow key to feed Drago Milk!",60,80);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}