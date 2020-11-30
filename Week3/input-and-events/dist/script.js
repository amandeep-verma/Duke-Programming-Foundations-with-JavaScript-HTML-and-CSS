function docolor()
{
  var dd1 = document.getElementById("can1");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  dd1.style.backgroundColor = color;
} 

//function selects the canvas and use the input by user from the slider to draw the square in contast
function dosquare()
{
  var dd1 = document.getElementById("can1");
  var sizeinput = document.getElementById("slider");
  var size = sizeinput.value;
  // remember you take context of canvas not of slider or anything else
  var context = dd1.getContext("2d");
  context.clearRect(0,0,dd1.width,dd1.height);
  context.fillStyle= "yellow";
  context.fillRect(10,10,size,size);
}