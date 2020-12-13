const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var score;
var ground,ball,box;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(300,590,600,10)
ground1= new Ground(100,550,10,300)
ground2= new Ground(200,550,10,300)
ground3= new Ground(300,550,10,300)
ground4= new Ground(400,550,10,300)
ground5= new Ground(500,550,10,300)
ground6= new Ground(0,550,10,300)
ground7= new Ground(600,550,10,300)
ball=new Ball(50,100,30,30)
ball1=new Ball(150,100,30,30)
ball2=new Ball(250,100,30,30)
ball3=new Ball(350,100,30,30)
ball4=new Ball(450,100,30,30)
ball5=new Ball(100,200,30,30)
ball6=new Ball(200,200,30,30)
ball7=new Ball(300,200,30,30)
ball8=new Ball(400,200,30,30)
ball9=new Ball(500,200,30,30)
ball10=new Ball(25,200,30,30)
ball11=new Ball(50,300,30,30)
ball12=new Ball(150,300,30,30)
ball13=new Ball(250,300,30,30)
ball14=new Ball(350,300,30,30)
ball15=new Ball(450,300,30,30)
ball16=new Ball(550,300,30,30)
plinko=new Plinko(120,50,10,10)
plinko1=new Plinko(130,50,10,10)
plinko2=new Plinko(245,50,10,10)
plinko3=new Plinko(146,50,10,10)
plinko4=new Plinko(456,50,10,10)
plinko5=new Plinko(354,50,10,10)
plinko6=new Plinko(567,50,10,10)
plinko7=new Plinko(547,50,10,10)
plinko8=new Plinko(364,50,10,10)
plinko9=new Plinko(346,50,10,10)
plinko10=new Plinko(457,50,10,10)
plinko11=new Plinko(568,50,10,10)
plinko12=new Plinko(589,50,10,10)
score=0;

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    ball.display()
    ball1.display()
    ball2.display()
    fill("white")
    stroke("white")
    text("score:"+score,550,50)
    ball3.display()
    ball4.display()
    ball5.display()
    ball6.display()
    ball7.display()
    
    ball8.display()
    ball9.display()
    ball10.display()
    ball11.display()
    ball12.display()
    ball13.display()
    ball14.display()
    ball15.display()
    ball16.display()
    ground1.display()
    ground2.display()
    ground3.display()
    ground4.display()
    ground5.display()
    plinko.display()
    plinko1.display()
    plinko2.display()
    plinko3.display()
    plinko4.display()
    plinko5.display()
    plinko6.display()
    plinko7.display()
    plinko8.display()
    plinko9.display()
    plinko10.display()
    plinko11.display()
    plinko12.display()
    ground6.display()
    ground7.display()
    
        
}










  