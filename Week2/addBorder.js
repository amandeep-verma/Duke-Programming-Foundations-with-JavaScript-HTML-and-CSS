var img = new SimpleImage("smallpanda.png");

function setBlack(pixel)
{
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    pixel.setAlpha(255);
}

function addBorder(image, border)
{
    for (var px of image.values()){
        var x = px.getX();
        var y = px.getY();
        if (x < border || x >= image.getWidth()- border || y < border || y >= image.getHeight()- border )
            setBlack(px)
    }
}
addBorder(img, 10);
print(img);

