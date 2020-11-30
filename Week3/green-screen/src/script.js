// global variable
var foreGroundImg = null;
var backGroundImg = null;
var imgcanvas1;
var imgcanvas2;

// function display the original image
function composite()
{
  cleanCanvas();
  
  if (foreGroundImg == null || !foreGroundImg.complete())
    {
      alert('foreground image not loaded');
      return;
    }
  if (backGroundImg == null || !backGroundImg.complete())
    {
      alert('background image not loaded');
      return;
    }
  
  var output = new SimpleImage(foreGroundImg.getWidth(), foreGroundImg.getHeight());

   for (var px of foreGroundImg.values()){
        var x = px.getX();
        var y = px.getY();
        if( px.getGreen() > px.getRed()+px.getBlue() )
        {
            var pixel = backGroundImg.getPixel(x,y);
            output.setPixel(x,y,pixel);
        }
        else
        {
           output.setPixel(x,y,px);
        }

    }
    
    output.drawTo(imgcanvas1);
}

function cleanCanvas()
{
    doClear(imgcanvas1);
    doClear(imgcanvas2);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

// function uploads the original image and display it in canvas
function upload1()
{
  imgcanvas1 = document.getElementById("can1");
  var fileinput = document.getElementById("fimage");
  foreGroundImg = new SimpleImage(fileinput);
  foreGroundImg.drawTo(imgcanvas1);
}
function upload2()
{
  imgcanvas2 = document.getElementById("can2");
  var fileinput = document.getElementById("bimage");
  backGroundImg = new SimpleImage(fileinput);
  backGroundImg.drawTo(imgcanvas2);
}