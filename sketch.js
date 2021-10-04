
function preload(){
  path.loadimage();
  jake1.loadimage();

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var track = createSprite(200, 200)
  track.addImage(pathImg);
  path.velocityY = 5;
  var jake = createSprite();
  jake.addImage(jake1Img);
  var leftboundary = createSprite(10, 200, 400, 20);
  leftboundary.visible = false
  var rightboundary = createSprite(390, 200, 400, 20);
  rightboundary.visible = false
  
}

function draw() {
  background(0);
}
