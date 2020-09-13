var helicopterIMG, helicopterSprite, packageSprite, packageIMG, groundSprite;
var packageBody, groundBody
var rect1Sprite, rect2Sprite, rect3Sprite

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {

	createCanvas(800, 700);

	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	//Create a Package

	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	//Create a Helicopter
	
	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//Create a Ground

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255)

	groundBody = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundBody);

	 	//Create three Rectangles

		//rect1Sprite = createSprite(width/2, height-35, 200, 20);
		//rect1Sprite.shapeColor = color(255,0,0);

		//rect1Body = Bodies.rectangle(width/2 , 650 , width , 10, {isStatic:true});
		//World.add(world, rect1Body);

		//rect2Sprite = createSprite(width/2, 600, 20, 100);
		//rect2Sprite.shapeColor = color(255,0,0);

		//rect2Body = Bodies.rectangle(width/2 , 600 , 5 , 40, {isStatic:true});
		//World.add(world, rect2Body);

		//rect3Sprite = createSprite(width/2, 600, 20 , 100);`	`
		//rect3Sprite.shapeColor = color(255,0,0);

		//rect3Body = Bodies.rectangle(width/2 , 600 , 5 , 40, {isStatic:true});
		//World.add(world, rect3Body);

	boxPosition  =width/2-100
	boxY = 610;


	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);

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

if (keyCode === LEFT_ARROW) {

	helicopterSprite.x=helicopterSprite.x-25;
	} 
	else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+25;
  }

 if (keyCode === DOWN_ARROW) {
    //Make the package body fall
    Matter.Body.setStatic(packageBody, false);
  }
}



