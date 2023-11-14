const prompt = require('prompt-sync')();

var numSecreto = parseInt(Math.random() * 1001);
console.log("Jogo da Adivinhação. Voce tem 15 tentativas!")

for (var ten = 1; ten <= 15; ten++) {
    var chute = prompt("Digite um numero entre 0 e 1000:  ");
    //console.log(chute);

    if (chute == -4) {
        console.log("Voce desistiu do jogo :(. O numero era: " + numSecreto);
        break;
    }

    if (chute < 1 || chute > 1000) {
        console.log("Tentativa: " + ten + "Seu chute esta fora do limite");
        continue;
    }

    if (chute == numSecreto) {
        console.log("ACERTOUUU!! Em " + ten + " Tentativas.");
        break;

    } else if (chute > numSecreto) {
        console.log("Tentativa: " + ten + " Errou... Chute mais baixo!!");

    } else if (chute < numSecreto) {
        console.log("Tentativa: " + ten + " Errou... Chute mais alto!!");
    }

}

if (ten > 15) {
    console.log("Suas 15 tentativas acabaram :(. O numero secreto era: " + numSecreto);
}
