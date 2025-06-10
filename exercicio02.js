const prompt = require('prompt-sync')(); 
function jogoDeAdivinhacao() {
  let numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let acertou = false;

  while (!acertou) {
    let palpite = parseInt(prompt("Adivinhe o número de 1 a 100:"));
    tentativas++;

    if (isNaN(palpite)) {
      console.log("Por favor, digite um número válido!");
    } else if (palpite < numeroSecreto) {
      console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
      console.log("Mais baixo!");
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
      acertou = true;
    }
  }
}

jogoDeAdivinhacao();