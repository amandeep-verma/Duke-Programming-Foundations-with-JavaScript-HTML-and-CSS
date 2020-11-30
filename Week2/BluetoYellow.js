

img = new SimpleImage("duke_blue_devil.png");
for (var pixel of img.values())
{
    if (pixel.getGreen() == 255 && pixel.getBlue() ==255 && pixel.getRed() == 255 )
    {
        
    }
    else
    {
        pixel.setGreen(255);
        pixel.setRed(255);
        pixel.setBlue(0);
    }
}
print(img);
