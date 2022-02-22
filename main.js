function preload(){
classifier= ml5.imageClassifier('DoodleNet');
}

function setup(){
canvas= createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth= window.speechSynthesis;


}

function draw(){
strokeWeight(10);//To set line width
stroke(0);//to set colour to black- 0
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);//pmouseX and pmouseY are co-ordinates of previous point in p5.js libary
    //mouseX and mouseY are co-ordinates of current point in p5.js libary

}

}

function clearCanvas(){
    background("white"); 
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);

}

function gotResult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    var label= results[0].label;
    var confidence= Math.round(results[0].confidence * 100) ;
    document.getElementById("label").innerHTML= "Label: "+label;
    document.getElementById("confidence").innerHTML= "Confidence: "+confidence + "%" ;
    utterThis= new SpeechSynthesisUtterance(label);
    synth.speak(utterThis);
}
}