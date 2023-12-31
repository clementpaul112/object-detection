Status = "";
battery_image = "";

function preload()
{
    battery_image = loadImage("battery.jpg");
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(sharpner_image,gotResults); 
}

function gotResults(results,error)
{
    if (error){
        console.error(error);
    }
    console.log(results);
}