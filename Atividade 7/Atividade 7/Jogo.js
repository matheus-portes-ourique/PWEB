function jogar(escolhaUsuario) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const numeroAleatorio = Math.random(); 
  let escolhaComputador;


  if (numeroAleatorio < 0.33) {
    escolhaComputador = "pedra";
  } else if (numeroAleatorio < 0.66) {
    escolhaComputador = "papel";
  } else {
    escolhaComputador = "tesoura";
  }

  let resultado = "";

  if (escolhaUsuario === escolhaComputador) {
    resultado = `Empate! Ambos escolheram ${escolhaUsuario}.`;
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra")
  ) {
    resultado = `Você venceu! ${capitalize(escolhaUsuario)} vence ${escolhaComputador}.`;
  } else {
    resultado = `Você perdeu! ${capitalize(escolhaComputador)} vence ${escolhaUsuario}.`;
  }

  document.getElementById("resultado").innerText =
    `Você escolheu: ${escolhaUsuario}\nComputador escolheu: ${escolhaComputador}\n${resultado}`;
}

function capitalize(palavra) {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}
