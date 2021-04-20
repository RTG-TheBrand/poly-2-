class baseclass{
	constructor(x, y, width, height) {
		var options = {
			"isStatic":false,
			'restitution':0.8,
			'friction':1.0,
			'density':1.0
		}
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		this.x=x;
		this.y=y;
		World.add(world, this.body);
	  }
	  display(){
		
		rectMode(CENTER);
		fill("grey");
		stroke("grey");
	
		var a=this.body.position;
		  var b=this.body.width;
		  var c=this.body.height;
	
		  rect(a.x,a.y, this.width, this.height);
  
	  }
	  }

	  class baseclass2{
		constructor(x, y, width, height) {
			var options = {
				"isStatic":false,
				'restitution':0.8,
				'friction':1.0,
				'density':1.0
			}
			this.body = Bodies.rectangle(x, y, width, height, options);
			this.width = width;
			this.height = height;
			this.x=x;
			this.y=y;
			World.add(world, this.body);
		  }
		  display(){
			
			rectMode(CENTER);
			fill("cyan");
			stroke("grey");
		
			var a=this.body.position;
			  var b=this.body.width;
			  var c=this.body.height;
		
			  rect(a.x,a.y, this.width, this.height);
	  
		  }
		  }

		  class baseclass3{
			constructor(x, y, width, height) {
				var options = {
					"isStatic":false,
					'restitution':0.8,
					'friction':1.0,
					'density':1.0
				}
				this.body = Bodies.rectangle(x, y, width, height, options);
				this.width = width;
				this.height = height;
				this.x=x;
				this.y=y;
				World.add(world, this.body);
			  }
			  display(){
				
				rectMode(CENTER);
				fill("pink");
				stroke("grey");
			
				var a=this.body.position;
				  var b=this.body.width;
				  var c=this.body.height;
			
				  rect(a.x,a.y, this.width, this.height);
		  
			  }
			  }
		
			  class baseclass4{
				constructor(x, y, width, height) {
					var options = {
						"isStatic":false,
						'restitution':0.8,
						'friction':1.0,
						'density':1.0
					}
					this.body = Bodies.rectangle(x, y, width, height, options);
					this.width = width;
					this.height = height;
					this.x=x;
					this.y=y;
					World.add(world, this.body);
				  }
				  display(){
					
					rectMode(CENTER);
					fill("lightblue");
					stroke("grey");
				
					var a=this.body.position;
					  var b=this.body.width;
					  var c=this.body.height;
				
					  rect(a.x,a.y, this.width, this.height);
			  
				  }
				  }
			


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	log1=new log(600,300,280,15);
    log2=new log(950,250,220,15);

	box1=new box(600,130);

	box22=new box2(570,170,30,40);
	box23=new box2(630,170,30,40);
	box24=new box2(600,170,30,30);

	box25=new box3(540,210,30,40);
	box26=new box3(570,210,30,40);
	box27=new box3(600,210,30,40);
	box28=new box3(630,210,30,40);
	box29=new box3(660,210,30,40);

	box30=new box4(510,250,30,40);
	box31=new box4(540,250,30,40);
	box32=new box4(570,250,30,40);
	box33=new box4(600,250,30,40);
	box34=new box4(630,250,30,40);
	box35=new box4(660,250,30,40);
	box36=new box4(690,250,30,40);



	box37=new box3(600+350,120,30,40);

	box38=new box2(570+350,160,30,40);
	box39=new box2(630+350,160,30,40);
	box40=new box2(600+350,160,30,40);

	box41=new box4(540+350,200,30,40);
	box42=new box4(570+350,200,30,40);
	box43=new box4(600+350,200,30,40);
	box44=new box4(630+350,200,30,40);
	box45=new box4(660+350,200,30,40);

	
   b=new shape(100,100,70,70);

	sling=new chain(b.body,{x:200,y:200});

	g1=new g(600,405,width,10);

}

function draw(){
    background("black");
    Engine.update(engine);

log1.display();
log2.display();

box1.display();

box22.display();
box23.display();

box24.display();
box25.display();
box26.display();

box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();
box37.display();
box38.display();
box39.display();
box40.display();
box41.display();
box42.display();
box43.display();
box44.display();
box45.display();

b.display();
g1.display();

sling.display();

	drawSprites();
}

function mouseDragged(){

Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){

if(keyCode===32){

sling.attach(b.body);

}

}



