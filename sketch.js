function setup(){
    createCanvas(600, 600);
    body1 = new Body(random(width/2),random(height/2),random(1,3));
    body2 = new Body(random(width/2),random(height/2),random(5,8));
}

function draw(){
    background(172);
    body1.applyGravity(body2);
    body1.update();
    body1.show();
    
    body2.applyGravity(body1);
    body2.update();
    body2.show();
    
}