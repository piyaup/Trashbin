class Paper{
    constructor(x,y,r){
        var options = {
           'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body=Matter.Bodies.circle(x,y,r,options,50);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add (world,this.body)
    }
  display(){
      var pos = this.body.position;
     //  var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y);
    //  rotate(angle);
      fill (255);
    //  angleMode(RADIANS);
     // rectMode(CENTER);
    //  circle (this.x,this.y,this.r);

      ellipseMode(CENTER);
      ellipse(this.x, this.y, 20, 20);

      pop (); 

  }  
} 

