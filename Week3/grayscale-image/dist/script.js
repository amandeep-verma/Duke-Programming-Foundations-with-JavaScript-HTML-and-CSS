// global variable
var image;
var grayImage;

// function display the original image
function getOriginal()
{
  var imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

// function converts all the pixel to gray scale and display it in canvas
function grayScale()
{
  for (var pix of grayImage.values())
    {
      var avg = ( pix.getRed() + pix.getGreen() + pix.getBlue() ) /3 ;
      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);
    }
  
  var imgcanvas = document.getElementById("can");
  grayImage.drawTo(imgcanvas);
}

// function uploads the original image and display it in canvas
function upload()
{
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}