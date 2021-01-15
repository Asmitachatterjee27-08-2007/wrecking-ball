class Box{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:0.3,
            density:0.5
        }
        this.width=30;
        this.height=30;
        this.body=Bodies.rectangle(x,y,30,30,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        stroke("orange");
        strokeWeight(4);
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}