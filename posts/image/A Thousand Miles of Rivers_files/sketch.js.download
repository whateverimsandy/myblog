document.body.style.margin   = 0
document.body.style.overflow = `hidden`

/*function setup () {
   createCanvas (innerWidth, innerHeight)
}

function  draw () {
   background (`turquoise`)
} */

// declare an empty array to store the particles
let particles = [];

// declare a variable 'river'
let river;

//declare a constant variable 'num' and assign value of 200
const num = 300;


//declare a constant variable 'num' and assign value of 0.09/2
const noiseScale = 0.09/2;

//declare function preload() to load a sound file with loadSound()
/*function preload (){
  river = loadSound ("river.mp3")
} */

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(5);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  
  clear();
  background('black'); 
}

function draw() {
   
 
/*if (mouseIsPressed){
    if ( river.isPlaying() ==false){
      river.loop()
    }
  } */

  
 if(mouseX <=100 & mouseY <=100){
// If the mouse is in the top-left corner of the canvas (both mouseX and mouseY are less than or equal to 100), the color of the stroke is set to red    
    stroke('red')
    
  }else if (mouseX >=300 & mouseY >=300){
//If the mouse is in the bottom-right corner of the canvas (both mouseX and mouseY are greater than or equal to 300), the color of the stroke is set to blue   
    stroke ('blue')    
    
  }else if(mouseX > 500){
//If the mouse is to the right of the center of the canvas (mouseX is greater than 500), the color of the  stroke is set to yellow and the stroke weight is increased to 1.5    
    stroke ('yellow')
    strokeWeight(1.5)
    
  }else { 
//If none of these conditions are met, the color of the particle stroke is set to cyan
     stroke ('cyan')
  }

  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}


function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

