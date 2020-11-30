
var img = new SimpleImage("hilton.jpg");

for (var pixel of img.values())
{
    if( pixel.getX() <= img.getWidth()/3)
        pixel.setRed(255);
    else if( pixel.getX() <= 2*img.getWidth()/3)
        pixel.setGreen(255);
    else
        pixel.setBlue(255);
}


function swapRedGreen(Pixel)
{
    var temp = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(temp);
}

for (var pixel of img.values())
{
    swapRedGreen(pixel);
}
print(img);
