var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath(); //start drawing

ctx.arc(100, 100, 100, 0, 2*Math.PI);

ctx.stroke(); //dessine les contours
ctx.fill();
ctx.fillStyle = "red";


/*rectangle*/
ctx.beginPath(); //start drawing
ctx.rect( 300, 10, 80, 80);
ctx.strokeStyle = "blue";
ctx.lineWidth = 10; // epaisseur ligne contour
ctx.stroke();

/*image*/

var image = new Image();
image.src = "facebook.png";
image.onload = function(){
ctx.drawImage(image, 150, 150);
}
