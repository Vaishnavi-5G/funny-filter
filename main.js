noseX=0;
noseY=0;
function preload() {
    mustach_filter= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas= createCanvas(300, 300);
    
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustach_filter, noseX, noseY, 45, 35);
}

function take_snapshot () {
    save ('myFilterImage.png');
}
function modelLoaded() {
    console.log('poseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -22;
        noseY = results[0].pose.nose.y +5;
        console.log("nose X = " + noseX);
        console.log("nose y = " + noseY);
    } 
    } 

    