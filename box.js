class box extends baseclass{
	constructor(x, y) {
	
  super(x,y,30,40);
  
	  }
	  display(){
		
		console.log(this.body.speed);

if((this.body.speed)<3.9)
{
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
  

/*class box extends baseclass{
  constructor(x, y) {*/
      /*var options = {
          "isStatic":false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visiblity=255;
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      World.add(world, this.body);*/
      //this.Visiblity=255;
/*super(x,y,30,40);

    }
    display(){
      super.display();*/
      /*console.log(this.body.speed)
      if((this.body.speed)<3)
      {super.display();
      }else
      {
      World.remove(world,this.body)  
      */
      //push();
     /*this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity)*/
      
      /*var a=this.body.position;
        var b=this.body.width;
        var c=this.body.height;
  
        rect(a.x,a.y, this.width, this.height);
*/
      //pop();
      //}
      //}
  //}

/*class box{
    constructor(x, y, width, height) {
        var options = {
            "isStatic":false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visiblity=255;
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
    
        if((this.body.speed)>5){

          World.remove(world,this.body);
          
          push();

          this.Visiblity=this.Visiblity-5;
          tint(255,this.Visiblity)

          pop();
        }

    console.log(this.body.speed);
    
        var a=this.body.position;
          var b=this.body.width;
          var c=this.body.height;
    
          rect(a.x,a.y, this.width, this.height);
    


      }
      }*/