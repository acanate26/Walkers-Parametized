let walkers = [];
let numWalkers = 10;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numWalkers; i++) {
    walkers.push({ x: width / 2, y: height / 2, speed: random(1, 3) });
  }
}

function draw() {
  background(0, 10);
  noStroke();
  
  for (let walker of walkers) {
    fill(random(255), random(255), random(255), 150);
    ellipse(walker.x, walker.y, 10, 10);
    
    walker.x += random(-walker.speed, walker.speed);
    walker.y += random(-walker.speed, walker.speed);
    
    walker.x = constrain(walker.x, 0, width);
    walker.y = constrain(walker.y, 0, height);
  }
}
