var img = new SimpleImage("drewRobert.png");
var layover = new SimpleImage("dinos.png");
var output = new SimpleImage(img.getWidth(),img.getHeight());

for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    if( px.getGreen() > px.getRed()+px.getBlue() )
    {
        var pixel = layover.getPixel(x,y);
        output.setPixel(x,y,pixel);
    }
    else
    {
       output.setPixel(x,y,px);
    }

}
print (output);
