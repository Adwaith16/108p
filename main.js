
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yg4xwuMHm/    ', modelReady);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = " rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = " rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('lion');
        img3= document.getElementById('cow');

        if (results[0].label == "Barking") {
            img.src = 'dog.gif';
            img.src1 = 'cat.png';
            img.src2 = 'lion.png';
            img.src= 'cow.png';
        }   else if (results[0].label == "Meowing") {
            img.src = 'dog.png';
            img1.src = 'cat.gif';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
        }   else if (results[0].label == "Roaring") {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'lion.gif';
            img3.src = 'cow.png';
        }   else {
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'lion.png';
            img3.src = 'cow.gif'; 
        }
    }
}

