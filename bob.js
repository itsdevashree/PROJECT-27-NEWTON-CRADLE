class Bob  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 1,
            density: 0.8,
            friction: 0,
        }

        this.body = Bodies.circle(x,y,23,options);
        World.add(world,this.body);
  
    }
  
        display()   {
            
            var pos = this.body.position;

            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            fill("cyan");
            ellipse(0, 0, this.width );
            pop();
        }
  
  }
  