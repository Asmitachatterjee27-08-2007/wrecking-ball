const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var blocks=[];
function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(500,390,1000,20,ground_options);
    World.add(world,ground);
    for(var i=300; i<800; i=i+50){
        console.log(i);
        blocks.push(new Box(i,300))
    }
    for(var i=300; i<800; i=i+50){
        console.log(i);
        blocks.push(new Box(i,250))
    }
    for(var i=300; i<800; i=i+50){
        console.log(i);
        blocks.push(new Box(i,200))
    }
    for(var i=300; i<800; i=i+50){
        console.log(i);
        blocks.push(new Box(i,150))
    }
    for(var i=300; i<800; i=i+50){
        console.log(i);
        blocks.push(new Box(i,100))
    }
    ball1 = new Ball(200,200);
    sling1 = new Sling(ball1.body,{x:200,y:50});
    console.log(ground);
}

function draw(){
    
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);
    for(var i=0; i<blocks.length; i++){
        blocks[i].display();
    }
    ball1.display();
    sling1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}