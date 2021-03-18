class paper
{
	constructor(x,y,r)
	{

		this.image = loadImage("paper.png");


		var options={
			isStatic : false,
			friction : 0.3,
            restitution : 0.5,
            density : 1				
		}

			

		this.x=x;
		this.y=y;
		this.r = r;
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)

			fill(128,128,128)
			image(this.image,0,0,80,150);
			pop()
			
	}

}