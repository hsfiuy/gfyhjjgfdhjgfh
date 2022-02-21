noseX = 0;
noseY = 0;
left_wristX = 0;
right_wristx = 0;
difference = 0;

function setup(){
   video = createCapture(VIDEO);
   video.size(550,500);
   canvas = createCanvas(450,400); 
   canvas.position(560,150);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}


function draw(){
    background('#FFFFCF');
    document.getElementById("square_side").innerHTML = "Width And Height of a square will be = " + difference + " pixels.";
    fill('#1fe433');
    stroke('#fccf3c');
    text("peter", noseX,noseY,difference);
    textSize(difference);
}

function modelLoaded(){
    console.error("model is definetly not loaded haha");
    console.warn("i swear im not lieing");
    console.log("fine the model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;


        console.log("Nose x = " + noseX + " nose y = " + noseY);
        
        right_wristX = results[0].pose.rightWrist.x;
        left_wristX = results[0].pose.leftWrist.x;
        difference = floor(left_wristX-right_wristX);
        console.log("right wrist x = " + right_wristX + " left wrist x = " + left_wristX + " difference = " + difference);
    }
}

