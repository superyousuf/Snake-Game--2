var snake,snakeImage;
var food,foodImage;
var score=0;
var foodGroup;
var position=5;
var obstacles,obstacleImage;
var obstaclesGroup;
var edges;


function preload(){

}

function setup(){
createCanvas(600,400);
snake=createSprite(20,8);
foodGroup=new Group();
obstaclesGroup=new Group();
edges=createEdgeSprites();
}

function draw(){
  background(180);
text("Score: "+score,500,20);
if(keyDown("UP_ARROW")){
  snake.y=snake.y-position;
}
if(keyDown("DOWN_ARROW")){
  snake.y=snake.y+position;
}
if(keyDown("LEFT_ARROW")){
  snake.x=snake.x-position;
}
if(keyDown("RIGHT_ARROW")){
  snake.x=snake.x+position;
}

spawnFood();
spawnObstacles();

if(snake.isTouching(foodGroup)){
snake.overlap(foodGroup,function(collector,collected){
  collected.remove();
});
score=score+1;
position=position+1;
}
drawSprites();


}
function spawnFood(){
  if(frameCount%100===0) {
    food=createSprite(random(10,590),random(10,390),10,10)
    food.lifetime=120;
    foodGroup.add(food);
  }
}
function spawnObstacles(){
  if(frameCount%400===0){
obstacles=createSprite(random(10,590),random(10,390),10,10);
obstacles.lifetime=200;
obstacles.velocityX=random(-2.75,3.0);
obstacles.velocityY=random(-3.0,3.0);
obstaclesGroup.add(obstacles);
obstacles.shapeColor="Red";
obstacles.bounceOff(edges[3]);


}
 }
