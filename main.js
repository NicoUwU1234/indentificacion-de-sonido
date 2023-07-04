function inicio(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/y5jaRF-a8/model.json',modelocargado);
}
function modelocargado(){
    console.log("modelo cargado");
    classifier.classify(gotResults);
}
function gotResults(error, resultados){
if (error){
    console.log(error)
}else{
    console.log(resultados)
    random_r = Math.floor(Math.random()*255)+1;
    random_g = Math.floor(Math.random()*255)+1;
    random_v = Math.floor(Math.random()*255)+1;
    document.getElementById("etiqueta_resultado").innerHTML = "Escucho - "+resultados[0].label;
    document.getElementById("porcentaje").innerHTML = "Porcentaje - "+(resultados[0].confidence*100).toFixed(2)+"%";
    document.getElementById("etiqueta_resultado").style.color = "rgb("+random_r+","+random_g+","+random_v+")";
    document.getElementById("porcentaje").style.color = "rgb("+random_r+","+random_g+","+random_v+")";
    img1 = document.getElementById('img1');
    img2 = document.getElementById('img2');
    img3 = document.getElementById('img3');
    img4 = document.getElementById('img4');
    if(resultados[0].label=="snap"){
        img1.src = 'aliens-01.gif';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png'
    }else if(resultados[0].label == "tocar puerta"){
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.gif';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
    }else if(resultados[0].label == "masticando"){
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.gif';
        img4.src = 'aliens-04.png';
    }else if(resultados[0].label == "Background Noise"){
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.gif';
    }
}
}