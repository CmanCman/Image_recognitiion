//https://teachablemachine.withgoogle.com/models/zpcLRrfaM/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach("#camera")
function take_snapshot(){
Webcam.snap(function(data_url){
    document.getElementById("selfie_image").src=data_url
})
}console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zpcLRrfaM/model.json",modelloaded)
function modelloaded(){
    console.log("modelloaded")
}
function check(){
    img= document.getElementById("selfie_image")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("Object").innerHTML=results[0].label
        document.getElementById("Accuracy").innerHTML=(results[0].confidence).toFixed(3)

    }
}