
var tom , tomImg, tom_running , tom_sleeping;
var jerry, jerryImg , jerry_teasing , jerry_happy ,jerry_caugth;
var garden, gardenImg;
function preload() {
    //load the images here
    tom_running = 
    loadAnimation("cat2.png","cat3.png","cat4.png");
    tom_sleeping = 
    loadAnimation("cat1.png");
    gardenImg=loadImage("garden.png");
    jerry_teasing = 
    loadAnimation("mouse2.png","mouse3.png");
    jerry_happy = loadImage("mouse1.png");
    jerry_caught = loadAnmiation("mouse4.png");



}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
    tom = createSprite(300,200,15 , 15);
    tom = addAnimation("running", tom_running);
    tom = addAnimation("sleeping",tom_sleeping);

    jerry-createSprite(150 , 100 ,15 , 15);
    jerry = addAnimation("teasing", jerry_teasing);
    jerry = addAnimation("happy", jerry_happy);
    jerry = addAnimation ("caught",jerry_caugth);

    garden = createSprite(600,400);
    garden = addImage("garden", gardenImg);

}

function draw() {

    background("gardenImg");
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x <(tom.width-jerry.height)/2){
        tom.changeAnimation("sleeping",tom_sleeping);
        jerry.cahngeAnimation("caught",jerry_caught);


    }
    if (tom.y-jerry.y <(tom.width-jerry.height)/2){
        tom.changeAnimation("sleeping",tom_sleeping);
        jerry.cahngeAnimation("caught",jerry_caught);
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyPressed("left")){
      jerry.changeAnimation("teasing", jerry_teasing);
      tom.x=jerry.x;
      tom.y=jerry.y;



  }


}
