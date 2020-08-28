var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottomBox
var rightBox
var leftBox

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	bottomBox = createSprite(400,650,200,20);
	rightBox = createSprite(490,600,20,100);
	leftBox = createSprite(310,600,20,100);
	bottomBox.shapeColor = "red"
	rightBox.shapeColor = "red"
	leftBox.shapeColor = "red"

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bottomBox = Bodies.rectangle(bottomBox.x,bottomBox.y,bottomBox.width,bottomBox.height,{isStatic:true} );
	 World.add(world, bottomBox);
	 
	 rightBox = Bodies.rectangle(rightBox.x,rightBox.y,rightBox.width,rightBox.height,{isStatic:true} );
	 World.add(world, rightBox);
	 
	 leftBox = Bodies.rectangle(leftBox.x,leftBox.y,leftBox.width,leftBox.height,{isStatic:true} );
 	 World.add(world, leftBox);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}