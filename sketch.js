const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,rand,image,infected,doctor,doctorimg,infectedimg;
var timer=1000

function preload(){
    infectedimg=loadImage("corona.png")
    doctorimg=loadImage("doctor.png")
}
function setup(){
createCanvas(900,500)

engine=Engine.create()
world=engine.world

npc1=createSprite(random(20,700),random(20,500))
npc2=createSprite(random(20,700),random(20,500))
npc3=createSprite(random(20,700),random(20,500))
npc4=createSprite(random(20,700),random(20,500))

npcs=[npc1,npc2,npc3,npc4]
infected=createSprite(500,300,10,10)
infected.addImage(infectedimg)
doctor=createSprite(300,300,30,30)
doctor.addImage(doctorimg)
doctor.scale=0.5
infected.scale=0.5

}

function draw(){
    background("red")
    timer=Math.round(timer-0.05)
    text("Timer:"+timer,750,50)
    Engine.update(engine)
    text(mouseX+","+mouseY,mouseX,mouseY)
//------------npc creation-------------------------


    
//------------------doctor controls---------------
        if(keyDown("w")){
            doctor.position.y-=5
        }
        if(keyDown("a")){
            doctor.position.x-=5
        }   
        if(keyDown("s")){
            doctor.position.y+=5
        }    
        if(keyDown("d")){
            doctor.position.x+=5
        }
//---------------covid controls----------------------
        if(keyDown("UP")){
            infected.position.y-=5
        }
        if(keyDown("down")){
            infected.position.y+=5
        }

        if(keyDown("left")){
            infected.position.x-=5
        }
        if(keyDown("right")){
            infected.position.x+=5
        }
//------------------npc--------------------------------------
       
           
           
        if(frameCount%100===0){
         npcs[1].visible=false
         npcs.push(npc1)
         
          // npcs.push(npc1)
        
        }
        drawSprites()
}