class Body{
    constructor(x,y,m){
        this.position = createVector(x,y);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
        this.mass = m;
        this.color = color(random(255),random(255),random(255));
    }

    applyForce = function(force){
        let l_force = p5.Vector.div(force,this.mass);
        this.acceleration.add(l_force);
       // this.velocity.limit(l_force);
    }

    applyGravity = function(anotherBody){
        /* 
            Gravity force is defined as 
            F_gravity   = (G * m1 * m2)/(d^2) * r^
            G = Gravity Constant
            m1 = mass of object1
            m2 = mass of object2
            r = vector difference b/w m1 and m2 object, normalized
            d = magnitude of r before normalization 
        */
        let G = 1;
        let difference = p5.Vector.sub(this.position,anotherBody.position);
        let d = difference.mag(difference);
        let r = difference.normalize();

        let f = ((G * this.mass * anotherBody.mass)/(d * d)) * -1;
        let f_gravity = r.mult(f);
        this.applyForce(f_gravity);
    }

    update = function(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0)
    }

    show = function(){
        fill(this.color,100);
		noStroke();
		ellipse(this.position.x,this.position.y,this.mass * 10,this.mass * 10);
	}
}