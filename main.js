function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/N7sHGvPy2/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error , results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = " I can hear -" + results[0].label;
        document.getElementById("result_cofidence").innerHTML = " Accuracy -" + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById("cat");
        img2 = document.getElementById("cow");
        img3 = document.getElementById("dog");
        img4 = document.getElementById("lion");

        if (results[0].label == "meow")
        {
            img1.src='cat.gif.gif';
            img2.src='cow.jpg';
            img3.src='dog.png';
            img4.src='lion.jpg';  
        }
        else if (results[0].label == "moo")
        {
            img1.src='cat.jpg';
            img2.src='cow.gif.gif';
            img3.src='dog.png';
            img4.src='lion.jpg';   
        }
        else if (results[0].label == "bark")
        {
            img1.src='cat.jpg';
            img2.src='cow.jpg';
            img3.src='dog.gif.gif';
            img4.src='lion.jpg';   
        }
        else 
        {
            img1.src='cat.jpg';
            img2.src='cow.jpg';
            img3.src='dog.png';
            img4.src='lion.gif.gif';   
        }

    }
}