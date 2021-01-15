class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:250
        }
        this.pointB=pointB;
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var pointB=this.pointB;
        var pointA=this.sling.bodyA.position;
        push();
        strokeWeight(5);
        stroke("blue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}