song_1="";
song_2="";
leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;

function preload(){
    song_1=loadSound("Shake.mp3");
    song_2=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();

video= createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on(poseNet,gotPoses);
}
function modelloaded(){
console.log('PoseNet Is Initionlized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristY=results[0].pose.leftWrist.x;
    leftWristX=results[0].pose.leftWrist.y;
    console.log("leftWristX =" + leftWristX + "leftWristY" + leftWristY);
    rightWristY=results[0].pose.rightWrist.x;
    rightWristX=results[0].pose.rightWrist.y;
    console.log("rightWristX =" + rightWristX + "rightWristY" + rightWristY);
} 
}
function draw(){
    image(video,0,0,600,500);
}