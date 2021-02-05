const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
var score=0

var plinkos = [];
var divisions =[];
var divisionHeight=300;
var par;
var play;
var end;
var gameState=play;
var chance=0
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  text(score+"is the score",100,50)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   if(par.y>760&&par.y<761){


if (par.x<0&&par.x<200){
   score=score+50
}
if (par.x<201&&par.x<400){
   score=score+100
}
if (par.x<401&&par.x<600){
   score=score+200
}
if (par.x<601&&par.x<800){
   score=score+50
}
   }
par.display();
if(chance===5){
   gameState=end
}
}


function mousePressed(){
   if(gameState==="play") {
       count++;
        par=new Particle(mouseX, 10, 10, 10);
        chance=chance+1
    }
}