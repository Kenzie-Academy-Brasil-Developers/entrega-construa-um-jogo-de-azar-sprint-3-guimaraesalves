let jogadorescolha = 0;
let resp = 0;

function jogar(jogador) {
    jogadorescolha = jogador

    if (jogadorescolha == 1) {
        document.getElementById('usuario').innerHTML = "VOCÊ ESCOLHEU PEDRA!"
    } else if (jogadorescolha == 2) {
        document.getElementById('usuario').innerHTML = "VOCÊ ESCOLHEU PAPEL!"
    } else if (jogadorescolha == 3) {
        document.getElementById('usuario').innerHTML = "VOCÊ ESCOLHEU TESOURA!"
    }
    

    resp = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    //alert(resp)
    
    if ((resp == 1) && ( jogadorescolha == 1)){
        return document.getElementById('result').innerHTML = "EU TAMBÉM! EMPATAMOS! 👊"
    } else if ((resp == 1) && (jogadorescolha == 2)){
        return document.getElementById('result').innerHTML = "EU ESCOLHI PEDRA! VOCÊ GANHOU! 👏"
    } else if ((resp == 1) && (jogadorescolha == 3)){
        return document.getElementById('result').innerHTML = "EU ESCOLHI PEDRA!! EU GANHEI! 👋"
    } else if ((resp == 2) && (jogadorescolha == 1)){
        return document.getElementById('result').innerHTML = "EU ESCOLHI PAPEL!  VOCÊ GANHOU!! 👏"
    } else if ((resp == 2) && (jogadorescolha == 2)){
        return document.getElementById('result').innerHTML = "EU TAMBÉM!!  EMPATAMOS! 👊"
    } else if ((resp == 2) && (jogadorescolha == 3)) {
        return document.getElementById('result').innerHTML = "EU ESCOLHI PAPEL!  EU GANHEI! 👋"
    } else if ((resp == 3) && (jogadorescolha == 1)) {
        return document.getElementById('result').innerHTML = "EU ESCOLHI TESOURA! VOCÊ GANHOU! 👏"
    } else if ((resp == 3) && (jogadorescolha == 2)) {
        return document.getElementById('result').innerHTML = "EU ESCOLHI TESOURA! GANHEI! 👋"
    } else if ((resp == 3) && (jogadorescolha == 3)) {
        return document.getElementById('result').innerHTML = "EU TAMBÉM! EMPATAMOS! 👊"
    }

    
}