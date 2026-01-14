let opcao = Number(prompt(`
    Calculadora (Insira o número)
    1- Adição;
    2- Subtração;
    3- Multiplicação;
    4- Divisão.
    `));
let numero1 = Number(prompt("Insira o primeiro número: "));
let numero2 = Number(prompt("Insira o segundo número: "));

function somar() {
    let soma = numero1 + numero2;
    console.log(`A soma de ${numero1} e ${numero2} é de ${soma}`);
}

function subtrair() {
    let subtracao = numero1 - numero2;
    console.log(`A subtração de ${numero1} e ${numero2} é de ${subtracao}`);
}
function multiplicar() {
    let multiplicacao = numero1 * numero2;
    console.log(`A multiplicação de ${numero1} e ${numero2} é de ${multiplicacao}`);
}
function dividir() {
    let divisao = numero1 / numero2;
    console.log(`A divião de ${numero1} e ${numero2} é de ${divisao}`);
}

switch (opcao) {
    case 1:
        somar();
        break;
    case 2:
        subtrair();
        break;
    case 3:
        multiplicar();
        break;
    case 4:
        dividir();
        break;
    default:
        console.log("Valor inválido.");
}

