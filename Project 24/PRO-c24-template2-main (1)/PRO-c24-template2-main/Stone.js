class Stone  {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }
  

    display(){
        var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("grey");
    rect(0,0,50,50)
    pop();
    }

}