var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("badRobot");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,450,275);
	ctx.drawImage(img, 10, 10);
	//console.log(ctx.drawImage);
	console.log(ctx.fillStyle);