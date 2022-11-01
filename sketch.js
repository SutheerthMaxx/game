var policeMen;
var theif;
var policeCarOffroad;
var policecarSuv;
var policecarSports;
var car;
var background;

function preload(){
theif = loadImage()
background = loadImage("cement-footpath-skyline-space-building.jpg");

}


function setup(){

createCanvas(1000,700);

policeMen = createSprite(700,550,50,40);
theif = createSprite(100,550,50,40);

}

function draw() {
  drawSprites(); 
  
}