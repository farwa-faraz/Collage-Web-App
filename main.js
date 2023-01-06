var speech_recognition = window.webkitSpeechRecognition;
var result
var recognition = new speech_recognition();

function start()
{
    recognition.start();
}

camera = document.getElementById("camera");
Webcam.set({
    width:260,
    height:250,
    image_format: "png",
    png_quality:90
});

recognition.onresult = function(event)
{
    console.log(event);
    var result = event.results[0][0].transcript;
    console.log(result);
    if(result=="selfie")
    {
        speak()
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    console.log("speak");
    setTimeout(function() 
    {
        img = "img1";
        Snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function() 
    {
        img = "img2";
        Snapshot();
        speak_data = "Taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function() 
    {
        img = "img3";
        Snapshot();
    }, 15000);
}

function Snapshot()
{
    console.log(img);
    Webcam.snap(function(data_uri){
        if(img=="img1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>'; 
        }

        if(img=="img2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>'; 
        }

        if(img=="img3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>'; 
        }
    });
}