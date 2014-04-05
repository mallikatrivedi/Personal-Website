function drawBlurb(){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.scale(3,1);
	ctx.arc(22,25,20,0.75*Math.PI,1.5*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.scale(1,1);
	ctx.arc(7,49,10,1.5*Math.PI,0.3*Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.scale(2,1);
	ctx.arc(10,75,10,1.5*Math.PI, 0.3*Math.PI);
	ctx.stroke();
}

