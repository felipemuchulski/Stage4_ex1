/*
Solicitar ao usuário que ele insira dois numeros e, apartir dai calcular:
 - A soma dos dois números;
 - A subtração dos dois números;
 - A multiplicação dos dois números;
 - A divisão dos dois números;
 - O resto da divisão dos dois números;

*/

let number1 = Number(prompt("Digite o primeiro número: "));
let number2 = Number(prompt("Digite o segundo número: "));

let sum = number1 + number2;
alert(`A soma dos dois números é ${sum}`);

let subtraction = number1 - number2;
alert(`A subtração dos dois números é ${subtraction}`);

let multiplication = number1 * number2;
alert(`A multiplicação dos dois números é ${multiplication}`);

let division = number1 / number2;
alert(`A divisão dos dois números é ${division.toFixed(1)}`);

let rest = number1 % number2;
alert(`O resto da divisão é ${rest.toFixed(1)}`);


// verificar se a soma dos números é par ou impar 
 let conversion = (number1 + number2) / 2;
 if (conversion == 0){
    alert("É par");
 } else {
    alert("É impar")
 };

// verificar se os dois números inseridos são iguais ou diverentes:
if (number1 == number2) {
    alert("Os dois números são iguais");
} else {
    alert("Os números são diferentes");
}