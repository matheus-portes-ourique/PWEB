let iniciar = confirm("Deseja inserir dois números?");

if(iniciar){
    let numero1 = parseFloat(prompt("Digite o Primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o Segundo número: "));

    let soma = (numero1 + numero2);
    let sub = (numero1 - numero2);
    let mult = (numero1 * numero2);
    let div = (numero1 / numero2);
    let mod = (numero1 % numero2);

    alert(`Soma: ${soma.toFixed(2)}`);
    alert(`Subtração: ${sub.toFixed(2)}`);
    alert(`Multiplicação: ${mult.toFixed(2)}`);
    alert(`Divisão: ${div.toFixed(2)}`);
    alert(`Resto da Divisão: ${mod.toFixed(2)}`);
} else {
    alert("Operação cancelada.");
}