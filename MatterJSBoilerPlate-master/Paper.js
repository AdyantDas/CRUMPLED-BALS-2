class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=radius
        this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.width = width;
      this.height = height;
     
      this.image=loadImage("paper.png")

      World.add(world, this.body);
    }
    display(){
      var position=this.body.position;
      push()
      translate(position.x,position.y);
     fill(255);
     imageMode(CENTER)
     image(this.image,0,0,this.r,this.r)
      pop()
    }
}