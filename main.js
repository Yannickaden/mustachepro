
nosex=0;
nosey=0;

function preload(){
circus=loadImage('https://i.postimg.cc/GhMPtcfp/clown-props-face-removebg-preview.png');
stache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,350);
    video.hide();
    bosenet=ml5.poseNet(video,modelLoaded);
    bosenet.on('pose',gotPoses);
} 
  
function draw(){
  image(video,0,0,300,350);
  image(stache,nosex,nosey,40,40);
}  

function snap(){
    save('my_instagram_status.png');
}

function modelLoaded(){
    console.log('posenet is initilized');
}

function gotPoses(results){
    if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x-15;
nosey=results[0].pose.nose.y;
console.log("nose x ="+nosex);
console.log("nose y ="+nosey);
    }
}







