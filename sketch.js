var x =250;
var y =250;
var newX, newY;
var increment = 0;
var plus = 0.05;
function setup() {
    createCanvas(700, 700);
  }
  
  function draw() {
    background(220);
    //x++;
    //y++;
    increment += plus;
    newX = Math.cos(increment) * (x-width/2) - Math.sin(increment) * (y-height/2) + width/2;
    newY =  Math.sin(increment) * (x-width/2) + Math.cos(increment) * (y-height/2) + height/2;
    ellipse(newX,newY,50,50);
    ellipse(width/2, height/2, 70,70);
   if (keyIsDown(UP_ARROW)) {
       x += 1;
       y += 1;
   }
   if (keyIsDown(DOWN_ARROW)) {
       x -= 1;
       y -= 1;
   }
  }
  function keyPressed() {
      if (key == "ArrowLeft" || key == "W") {
           plus *= -1;
      }
      if(key == "ArrowRight" || key == "D") {
          plus *= -1;
      }
  }