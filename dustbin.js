class Dustbin{

    constructor(x,y,width,height)
    {
        var options = {
            isStatic:true,
            density:1.0
        }

        this.image = loadImage("sprites/dustbingreen.png");

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y, width, height, options)
        World.add(world, this.body);
    }
    display()
    {
        
        var dustbinpos = this.body.position;

        push()
        translate(dustbinpos.x, dustbinpos.y);
        imageMode(CENTER);
        fill(255);
        image(this.image, 0,0, this.width, this.height);
        pop()
    }
}
