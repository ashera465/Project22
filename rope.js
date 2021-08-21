class rope{
	constructor(body1, body2,offsetX ,offsetY ){
		//offset x and y parameters will be used for pointB to determine the offset for each new rope object
		this.offsetX = offsetX
		this.offsetY = offsetY
	
	//create rope constraint here
	 var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.offsetX, y:this.offsetY}
	 }
	
	this.rope = Matter.Constraint.create(options);

	World.add(world,this.rope);
	}


    //create display() here 
	display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
	

		strokeWeight(2);
		stroke("black");
	
		line(pointA.x,pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
		
	}
}
