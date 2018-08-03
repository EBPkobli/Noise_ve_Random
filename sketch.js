var randomEkran;
var noiseEkran;

var random2D_Ekran;
var noise2D_Ekran;

function setup() {
    createCanvas(800,600);
    background(0);
    
    

    var y1 = createP("Random Fonksiyon 1D");
    var y2 = createP("Noise Fonksiyon 1D");
    var y3 = createP("Random Fonksiyon 2D");
    var y4 = createP("Noise Fonksiyon 2D");


    y1.position(75, 0);
    y2.position(490, 0);
    y3.position(75, 300);
    y4.position(490, 300);

    randomEkran = createGraphics(390,290);
    randomEkran.background(100);

    noiseEkran = createGraphics(390,290);
    noiseEkran.background(100);

    random2D_Ekran = createGraphics(390,290);
    random2D_Ekran.background(100);

    noise2D_Ekran = createGraphics(390,290);
    noise2D_Ekran.background(100);



    stroke(255);
    noFill();
    rect(0,0,390,290);
    rect(400,0,390,290);
    rect(0,300,390,290);
    rect(400,300,390,290);

    
    
    image(randomEkran,0,0);
    image(noiseEkran,400,0);
    image(random2D_Ekran,0,300);
    image(noise2D_Ekran,400,300);


    setInterval(randomFonksiyon_1D,100);

    setInterval(noiseFonksiyon_1D,100);

    setInterval(random2Dfonksiyon,1000);

    setInterval(noise2Dfonksiyon,1000);
}

function draw() {
    //background(0);
}


function randomFonksiyon_1D()
{
    image(randomEkran,0,0);
    beginShape();
    for(var i = 0;i<randomEkran.width;i++)
    {
        var x = i;
        var y = floor(random(randomEkran.height/3,randomEkran.height));
        randomEkran.vertex(x, y);
    }
    endShape();
    
}
var start = 0;
function noiseFonksiyon_1D()
{
    image(noiseEkran,400,0);
    var xoff=start;

    beginShape();
    for(var i = 0;i<noiseEkran.width;i++)
    {
        var x = i;
        var y = noise(xoff)*noiseEkran.height +50;
        noiseEkran.vertex(x+400, y);
        xoff += 0.01;
    }
    endShape();
    start +=0.1;
    

}

function random2Dfonksiyon()
{
    
    random2D_Ekran.loadPixels();
    for(var i=0;i<random2D_Ekran.width;i++)
    {
        for(var j=0;j<random2D_Ekran.height;j++)
        {
            var index = (i+j*random2D_Ekran.width)*4;
            var r = random(255);

            random2D_Ekran.pixels[index+0] = r;
            random2D_Ekran.pixels[index+1] = r;
            random2D_Ekran.pixels[index+2] = r;
            random2D_Ekran.pixels[index+3] = 255;
        }
    }
    random2D_Ekran.updatePixels();
    image(random2D_Ekran,0,300);

}

var bartis=0.01;
function noise2Dfonksiyon()
{
    var yoff = 0;

    noise2D_Ekran.loadPixels();
    for(var i=0;i<noise2D_Ekran.width;i++)
    {
        var xoff=0;
        for(var j=0;j<noise2D_Ekran.height;j++)
        {
            var index = (i+j*noise2D_Ekran.width)*4;
            var r = noise(xoff,yoff) *255;

            noise2D_Ekran.pixels[index+0] = r;
            noise2D_Ekran.pixels[index+1] = r;
            noise2D_Ekran.pixels[index+2] = r;
            noise2D_Ekran.pixels[index+3] = 255;

            xoff+=bartis;
        }
        yoff +=bartis;

        
    }
    bartis +=0.001;
    noise2D_Ekran.updatePixels();
    image(noise2D_Ekran,400,300);

}