class box2 extends baseclass2{
	constructor(x, y) {
	
  super(x,y,30,40);
  
	  }
	  display(){
		
		console.log(this.body.speed);

if((this.body.speed)<3.9){

	super.display();

}else
{
World.remove(world,this.body)  

push();

this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity);

pop();
}
	  }
	}

/*class box2{
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
        stroke("black");
        var a=this.body.position;
        var b=this.body.width;
        var c=this.body.height;

        rect(a.x,a.y, this.width, this.height);
    
      }
}*/