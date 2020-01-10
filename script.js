 function sinal() {    

    var image = document.getElementById("sinal").getAttribute("src");
    var fundo = document.getElementById("fundo");
    var sin = document.getElementById("sin");

    if ( image == "./Assets/ImageGreen.png"){
        document.getElementById("sinal").src = "./Assets/ImageYellow.png";
        fundo.className = "yellow";
        sin.className = "layout red"
    } 
    else if ( image == "./Assets/ImageYellow.png" ) {
        document.getElementById("sinal").src = "./Assets/ImageRED.png";        
        fundo.className = "red";
        sin.className = "layout green"
    }
    else{
        document.getElementById('sinal').src='./Assets/ImageGreen.png';
        fundo.className = "green";
        sin.className = "layout yellow"
    }
}