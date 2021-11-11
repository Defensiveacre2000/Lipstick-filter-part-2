

nose_X = "";
nose_Y = "";



function preload() {
}

function setup() {
    canvas = createCanvas(850, 660);
    canvas.position(100, 0);
    video = createCapture(VIDEO);
    video.hide();

  //initialize the poseNet model
  poseNet = ml5.poseNet(video, modelLoaded);


  //executing poseNet
     poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('PoseNet is initialized');
}




function gotPoses(results){
    if(results.length > 0 )
    {
         console.log(results);

         nose_X = results[0].pose.nose.x;
         nose_Y = results[0].pose.nose.y;

         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
    }
}




function draw() {
    image(video, 310, 250, 640, 480);
}

function capture_img() {
    
}

function apply_color()
{
    
}