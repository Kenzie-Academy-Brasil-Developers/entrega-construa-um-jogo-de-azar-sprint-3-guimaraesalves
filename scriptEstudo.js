document.getElementById("papel").addEventListener("click", myFunction1);
document.getElementById("tesoura").addEventListener("click", myFunction2);
document.getElementById("pedra").addEventListener("click", myFunction3);

function myFunction1() {
    document.getElementById("papel").innerHTML = " VOCÊ ESCOLHEU  PAPEL!";  
    let x = 1;
    return x
}

function myFunction2() {
    document.getElementById("tesoura").innerHTML = "VOCÊ ESCOLHEU TESOURA!";
    let x = 2;
    return x
}

function myFunction3() {
    document.getElementById("pedra").innerHTML = "VOCÊ ESCOLHEU PEDRA!";
    let x = 3;
    return x
}

function getRndInteger(min, max) {
  resp = Math.floor(Math.random() * (max - min + 1) ) + min;
  
  if (resp == 1){
      return "EU ESCOLHI PAPEL!"      
  } else if (resp == 2){
      return "EU ESCOLHI TESOURA!"
  }else {
      return "EU ESCOLHI PEDRA!"
  }
  
}
document.getElementById("vai").addEventListener("click", 
function (){
    if ((resp == 1) && (x == 1)){
        return document.getElementById("result").innerHTML = "EU TAMBÉM ESCOLHI PAPEL! EMPATAMOS!"
    } else if ((resp == 1) && (x == 2)){
        return document.getElementById("result").innerHTML = "EU ESCOLHI PAPEL! VOCÊ GANHOU!"
    } else if ((resp == 1) && (x == 3)){
        return  document.getElementById("result").innerHTML = "EU ESCOLHI PAPEL! EU GANHEI!"
    } else if ((resp == 2) && (x == 1)){
        return document.getElementById("result").innerHTML = "EU ESCOLHI TESOURA! EU GANHEI!"
    } else if ((resp == 2) && (x == 2)){
        return document.getElementById("result").innerHTML = "EU TAMBÉM ESCOLHI TESOURA! EMPATAMOS!"
    } else if ((resp == 2) && (x == 3)) {
        return document.getElementById("result").innerHTML = "EU ESCOLHI TESOURA! VOCÊ GANHOU!"
    } else if ((resp == 3) && (x == 1)) {
        returndocument.getElementById("result").innerHTML = "EU ESCOLHI PEDRA! VOCÊ GANHOU!"
    } else if ((resp == 3) && (x == 2)) {
        return document.getElementById("result").innerHTML = "EU ESCOLHI PEDRA! VOCÊ PERDEU!"
    } else if ((resp == 3) && (x == 3)) {
        return document.getElementById("result").innerHTML = "EU TAMBÉM ESCOLHI PEDRA! EMPATAMOS!"
    }
});