class Ball{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:0.5,
            density:1
        }
        this.radius=30;
        this.body=Bodies.circle(x,y,30,options);
        
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        stroke("yellow");
        strokeWeight(4);
        fill("green");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}