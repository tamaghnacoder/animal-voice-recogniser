function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/70uWC6h60/model.json',{probabilityThreshold:0.7},modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var lion=0;
var bee=0;
var cougar=0;

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Detected voice is of-"+results[0].label;
        document.getElementById("result_count").innerHTML="Detected lion-"+lion+" bee- "+bee+" cougar- "+cougar;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById("animal_image");
        if(results[0].label=="Lion"){
            img.src="lion-roar-44.gif";
            lion=lion+1;
        }
        else if(results[0].label=="Cougar"){
            img.src="cougar.gif";
            cougar=cougar+1;
        }
        else if(results[0].label=="bee"){
            img.src="bee.gif";
            bee=bee+1;
        }
        else{
            img.src="listen.gif";
            document.getElementById("result_label").innerHTML="Voice Not Recognised";
        }
    }
}