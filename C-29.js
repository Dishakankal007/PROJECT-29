const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, polygon;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    polygon = new Box(50,50,50,50,50)
    block1 = new Block(700,320,70,70);
    block2 = new Block(920,320,70,70);
    block3 = new Block(810, 350),70,70;
    block4 = new Block(810,260,70,70);
    block5 = new Block(700,240,70,70);
    block6 = new Block(920,240,70,70);
    block7 = new Block(810, 220,70,70);
    block8 = new Block(810,180,70,70);
    block9 = new Block(810,160,70,70);
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    polygon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();
    block9.display();

   
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}