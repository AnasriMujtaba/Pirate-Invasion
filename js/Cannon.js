class Cannon{
constructor(x,y,width,height,angle){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.angle=angle;
}
display(){
fill("grey");
push();
translate(this.x,this.y);
rotate(this.angle)
rect(-10,-20,this.width,this.height);
pop();
arc(this.x-40,this.y+100,60,90,PI,TWO_PI);
noFill();
}
}

