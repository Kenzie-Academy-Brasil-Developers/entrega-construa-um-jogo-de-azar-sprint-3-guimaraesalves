let jogadorescolha = 0;
let resp = 0;

function jogar(jogador) {
    jogadorescolha = jogador

    if (jogadorescolha == 1) {
        alert("Você escolheu PEDRA.")
    } else if (jogadorescolha == 2) {
        alert ("Você escolheu TESOURA.")
    } else if (jogadorescolha == 3) {
        alert("Você escolheu PAPEL. ")
    }
    

    resp = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    //alert(resp)
    
    if ((resp == 1) && ( jogadorescolha == 1)){
        return document.getElementById('result').innerHTML = "EU TAMBÉM ESCOLHI PEDRA! EMPATAMOS!"
    } else if ((resp == 1) && (jogadorescolha == 2)){
        return document.getElementById('result').innerHTML = "EU ESCOLHI PEDRA! EU GANHEI!"
    } else if ((resp == 1) && (jogadorescolha == 3)){
        return document.getElementById('result').innerHTML = "EU ESCOLHI PEDRA! VOCÊ GANHOU!"
    } else if ((resp == 2) && (jogadorescolha == 1)){
        return document.getElementById('result').innerHTML = "EU ESCOLHI TESOURA! VOCÊ GANHOU!"
    } else if ((resp == 2) && (jogadorescolha == 2)){
        return document.getElementById('result').innerHTML = "EU TAMBÉM ESCOLHI TESOURA! EMPATAMOS!"
    } else if ((resp == 2) && (jogadorescolha == 3)) {
        return document.getElementById('result').innerHTML = "EU ESCOLHI TESOURA! EU GANHEI!"
    } else if ((resp == 3) && (jogadorescolha == 1)) {
        return document.getElementById('result').innerHTML = "EU ESCOLHI PAPEL! EU GANHEI!"
    } else if ((resp == 3) && (jogadorescolha == 2)) {
        return document.getElementById('result').innerHTML = "EU ESCOLHI PAPEL! VOCÊ GANHOU!"
    } else if ((resp == 3) && (jogadorescolha == 3)) {
        return document.getElementById('result').innerHTML = "EU TAMBÉM ESCOLHI PAPEL! EMPATAMOS!"
    }

    
}