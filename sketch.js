
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new bob(280,500,20)
bob2= new bob(360,500,20)
bob3= new bob(440,500,20)
bob4= new bob(520,500,20)
bob5= new bob(600,500,20)
rope1=new rope(bob5.body,{x:600,y:298})
rope2=new rope(bob4.body,{x:520,y:298})
rope3=new rope(bob3.body,{x:440,y:298})
rope4=new rope(bob2.body,{x:360,y:298})
rope5=new rope(bob1.body,{x:280,y:298})
roof1= new roof(435,300,475,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  if(keyIsDown(UP_ARROW)){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:15,y:-25})}
  console.log(mouseX,mouseY)
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  bob5.display();

  roof1.display();
  drawSprites();
 
}



