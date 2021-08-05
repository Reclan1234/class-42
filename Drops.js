class Drops {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0.8,
            friction:0.1
        }
        
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body)
        //load Image for BestMan
        
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    showDrops(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push ()
        translate (pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill ("blue");
        ellipse (0,0,this.radius.this.radius);
        pop ()
    }
}



























































