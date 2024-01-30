var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start(){

document.getElementById("textbox").innerHTML="";
recognition.start();


 }
recognition.onresult=function (lok){
console.log(lok); 
var mm=lok.results[0][0].transcript;
document.getElementById("textbox").innerHTML=mm;

if(mm=="Photo."){
    console.log("Foto");
    speak();
}



}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

setTimeout(function(){
take_selfie();
save();



}, 5000 );


}




function take_selfie() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); }

camera=document.getElementById("camera");
Webcam.set({
    width:500,
height:300,
image_format:"png",
png_quality:80
})


function save() { link = document.getElementById("link");
 image = document.getElementById("selfie_image").src ; 
link.href = image; link.save(".png"); }


