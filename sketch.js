const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var Ground;
var platform;
var Pig1, Pig2;
var log1, log2, log3, log4;
var bird;
var bgimage;
var logfixed;
var Slingshot1;

function preload(){
    bgimage = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    Ground = new ground(600,height,1200,20);
    platform = new ground(150,305,300,170);

    Pig1 = new pig(810,320);
    Pig2 = new pig(810,240);

    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
    log3 = new log(740,125,150,PI/4);
    log4 = new log(880,125,150,-PI/4);
    logfixed = new log(230,180,80,PI);

    bird = new Bird(100,100);

    Slingshot1 = new slingshot(bird.body,{x:200,y:100});

    
}

function draw(){
    background(bgimage);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground.display();
    platform.display();
    Pig1.display();
    log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    log2.display();
    log3.display();   
    log4.display();
    box5.display();
    bird1.display();
    logfixed.display();
    Slingshot.display();

    
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot.fly();
}