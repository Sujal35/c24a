class Paper{
    constructor(x, y,radius){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=bodies.circle(x, y,radius,options);
         this.x = x;
         this.y = y;
         this.radius=radius;

    }
  
display(){
    //var pos =this.body.position;
 //   Mode(CENTER);
 //   fill("white");
    circle(this.body.position.x, this.body.position.y,this.radius);
}
}
