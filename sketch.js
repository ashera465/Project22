const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
	engine = Engine.create();
	world = engine.world;
var roof, ball1, ball2, ball3, ball4, ball5, rope1, rope2, rope3, rope4, rope5, options;

//Create multiple bobs, mulitple ropes varibale here
	
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	ball1 = new ball(400,500,20);
	World.add(world,ball1);
	 ball2 = new ball(440,500,20);
	World.add(world,ball2);
	 ball3 = new ball(480,500,20);
	World.add(world,ball3);
	 ball4 = new ball(360,500,20);
	World.add(world,ball4);
	 ball5 = new ball(320,500,20);
	World.add(world,ball5); 

	


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	rope1 = new rope(ball1.body, roof,0 ,0);
	World.add(world, rope1);
	rope2 = new rope(ball2.body, roof, 40,0);
	World.add(world, rope2);
	rope3 = new rope(ball3.body, roof, 80,0);
	World.add(world, rope3);
	rope4 = new rope(ball4.body, roof, -40,0);
	World.add(world, rope4);
	rope5 = new rope(ball5.body, roof, -80,0);
	World.add(world, rope5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
	
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  //create ellipse shape for multiple bobs here
  //^Made in 'ball' constructor
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	
  Engine.update(engine);
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-50, y:45} )
	}
}