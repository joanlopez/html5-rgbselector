var canvas;
var ctx;

var initialR = 155;
var initialG = 155;
var initialB = 155;


$(document).ready(function() {
    initSliders();
    initCanvas();
    fillCanvas(initialR,initialG,initialB);
    setValues(initialR,initialG,initialB);
});

function initCanvas() {
	canvas = document.getElementById("canvas");  
	ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function fillCanvas(red, green, blue) {
	ctx.fillStyle = "rgb("+red+","+green+","+blue+")";
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

function initSliders() {
	$("input[type=range][orient=vertical]").on('input', function(e){
        var red = $("#red").val();
        var green = $("#green").val();
        var blue = $("#blue").val();
        fillCanvas(red, green, blue);
        setValues(red, green, blue);
 	});
}

function setValues(red, green, blue) {
	var hex = rgbToHex(red,green,blue);
	$("#rgb").text("R: "+ red + " G: " + green + " B: " + blue);
	$("#hex").text("HEX: "+ hex);
	var complementColor = invertColor(hex);
	$(".value").css('color', complementColor);
}