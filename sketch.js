
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = 'black';
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyDown(65)) 
  {
    background("#ff0000");
    box.shapeColor = '#2ba6ff';
    
  }
 
    if (keyDown(66)) 
  {
    background("#ffa800");
    box.shapeColor = '#c52bff';
   
  }

  if (keyDown(67)) 
  {
    background("#fff900");
    box.shapeColor = '#2119ff';
  }

  if (keyDown(68)) 
  {
    background("#93ff00");
    box.shapeColor = '#ff88e8';
  }
  
  if (keyDown(69)) 
  {
    background("#00ff5e");
    box.shapeColor = '#ff87a4';
  }

  if (keyDown(70)) 
  {
    background("#00ffc6");
    box.shapeColor = '#ff8c4f';
  }

  if (keyDown(71)) 
  {
    background("#00ecff");
    box.shapeColor = '#ffe04f';
  }

  if (keyDown(72)) 
  {
    background("#0085ff");
    box.shapeColor = '#e7ffb0';
  }

  if (keyDown(73)) 
  {
    background("#1100ff");
    box.shapeColor = '#bcff4f';
  }

  if (keyDown(74)) 
  {
    background("#7c00ff");
    box.shapeColor = '#52ff75';
  }

  if (keyDown(75)) 
  {
    background("#db00ff");
    box.shapeColor = '#2debc3';
  }

  if (keyDown(76)) 
  {
    background("#ff00b0");
    box.shapeColor = '#acfaff';
  }

  if (keyDown(77)) 
  {
    background("#8a5d0f");
    box.shapeColor = '#ffeed6';
  }

  if (keyDown(78)) 
  {
    background("#ffffff");
    box.shapeColor = '#000000';
  }

  if (keyDown(79)) 
  {
    background("#000000");
    box.shapeColor = '#ffffff';
  }

  drawSprites();
}
