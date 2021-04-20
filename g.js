class g{
    constructor(x, y, width, height) {
        var options = {
            "isStatic":true,
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
        fill("brown");
        stroke("brown");
        var a=this.body.position;
        var b=this.body.width;
        var c=this.body.height;

        rect(a.x,a.y, this.width, this.height);
    
      }
}