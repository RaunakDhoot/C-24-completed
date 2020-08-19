class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.rectangle(x, y,20,20,options);
        console.log(this.body)
        this.width = width
        this.height = height
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        rect()
        fill("white")
        pop();
    }
    
}