//canvas drawings
// var canvasRec=document.getElementById('mycanvas');
// var ctx=canvasRec.getContext('2d');
// ctx.fillStyle = 'orange';
// ctx.fillRect(40,40,250,200);            

//canvas coordinates
// var canvasCoord=document.getElementById('mycanvas');
// var ctx=canvasCoord.getContext('2d');
// ctx.moveTo(0,0);
// ctx.lineTo(500,300);
// ctx.stroke();

//canvas linear gradient
// var myGradient= document.getElementById('mycanvas');
// var ctx=myGradient.getContext('2d');

// //1.create a gradient
// var grad = ctx.createLinearGradient(0,0,200,0);
// grad.addColorStop(0,"Yellow");
// grad.addColorStop(1,"red");

// ctx.fillStyle=grad;
// ctx.fillRect(10,10,150,80);

// var myGradient= document.getElementById('mycanvas');
// var ctx=myGradient.getContext('2d');

// //1.create a gradient
// var grad = ctx.createRadialGradient(45,50,10,50,60,100);
// grad.addColorStop(0,"Yellow");
// grad.addColorStop(1,"red");

// ctx.fillStyle=grad;
// ctx.fillRect(10,10,150,80);


//canvas text
var myVarCanvas = document.getElementById('myCanvas');
var ctx= myVarCanvas.getContext('2d');


ctx.font = "40px cursive";
var grad=ctx.createLinearGradient(30,20,20,20,40,80);
grad.addColorStop(0,'yellow');
grad.addColorStop(1,'red');
ctx.fillStyle = grad;
ctx.font = "40px cursive";

ctx.textAlign="center";
ctx.fillText("Amrutha",myVarCanvas.width/2,myVarCanvas.height/2);


//circle
// function circle()
// {
//   var canvas = document.getElementById("canvas1"); 
//   var context = canvas.getContext("2d");
//   context.beginPath();
//   context.lineWidth="2";
//   context.arc(100, 100, 90, 0, 2 * Math.PI);
//   context.stroke();
// }
// circle();  