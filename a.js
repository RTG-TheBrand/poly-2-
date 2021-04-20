class shape{
    constructor(x, y, width, height) {
        var options = {
            "isStatic":false,
            'restitution':0.8,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("poly.png.png");
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
        
        rectMode(CENTER);
        fill("brown");
        stroke("brown");
        var a=this.body.position;
        var b=this.body.width;
        var c=this.body.height;
     imageMode(CENTER);
        image(this.image,a.x,a.y, this.width, this.height);
    
      }
}