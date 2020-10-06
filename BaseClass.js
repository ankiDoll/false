class BaseClass{
    constructor(x,y,w,h,angle){

        var option = {
            friction: 0.3
        }

        this.width = w;
        this.height = h;

        this.angle = angle;

        this.body = Bodies.rectengle(x,y,w,h,angle,option);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}