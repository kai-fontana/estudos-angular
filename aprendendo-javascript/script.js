//String
let nome = "Kai";
//Exibir no console, além de concatenar
console.log("Meu nome é: " + nome);

//Tipos de dados, não é tipada, ou seja, define o tipo de dado na compilação ao verificar o valor da variável

//int
let idade = 21;
console.log("A minha idade é: " + idade);

//float
let preco = 29.90;
console.log("O preço do caderno é: " + preco);

//  Declarando variáveis
/*let nome; --> Declara variaveis que podem mudar de valor
var nome; --> O que muda nela é o seu escopo, já que a var é universal e a let é limitada ao seu contexto
const NOME = "Kai"; --> Não pode mudar de valor*/

//Converter tipos de dados
let stringParaNumero = "123";
let stringNumero = Number(stringParaNumero);
let numeroParaString = (50).toString();

//Operadores aritméticos, comparação e lógicos
//+, -, * e / --> Adição, subtração, multiplicação e divisão
//>, <, >=, =<, != ou ==
//!, && e || --> não, e e ou


//null ou undefined

let telefone = null; // --> Quando o valor já foi definido como vazio
let endereco = undefined; // --> Quando há a possibilidade de ter um valor, mas ele não foi definido

//Exibir o tipo de determinada variável
console.log(typeof idade, idade);


//Condicionais
let eMaiorDeIdade = idade >= 18;

if (idade >= 18 && nome == "Kaii") {
    console.log("Bem-vinda ao sistema, Kai!");
} else {
    console.log("Você não possui acesso.");
}

//Operador ternário
idade >= 18 ? console.log("Pode tirar CNH") : console.log("Não tem idade suficiente");

let numero1 = 10;
let numero2 = 20;

var opcao = prompt("Menu: 1- Soma; 2- Subtração; 3- Multiplicação; 4- Divisão.");
//Switch case
switch (opcao) {
    case "1":
        let soma = numero1 + numero2;
        console.log(soma);
        break;
    case "2":
        let subtracao = numero1 - numero2;
        console.log(subtracao);
        break;
    case "3":
        let multiplicacao = numero1 * numero2;
        console.log(multiplicacao);
        break;
    case "4": 
        let divisao = numero1 / numero2;
        console.log(multiplicacao);
        break;
    default:
        console.log("Valor inválido");
}

//Loops
//Fori
for (let i = 0; i <= 10; i++) {
    let numero = i;
    console.log(`Número ${numero}`);

}

//While
while(idade < 18) {
    idade++;
    console.log(idade);
}

//Funções
//Void
function soma() {
    soma = numero1 + numero2;
    console.log("A soma dos números é: " + soma);
}

//Return
function subtracao() {
    subtracao = numero1 - numero2;
    return subtracao;
}

if (numero1 == 10) {
    soma();
} else {
    console.log("Não atendeu os critérios.");
}
