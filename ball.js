class ball{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}
	display(){
			
			var ballpos=this.body.position;
			push()
			translate(ballpos.x, ballpos.y);
			rectMode(CENTER)
			fill("red")
			ellipse(0,0,this.r*2, this.r*2);
			pop()		
	}
}