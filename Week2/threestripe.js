// Write a JavaScript program that modifies an image by putting three vertical stripes on it
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
print(img);
