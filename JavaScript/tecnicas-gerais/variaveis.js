/*
// Variável numérica para idade
let idade = 25;
idade = 26;
console.log("Valor da variável idade = " + idade);

// constante pi
const pi = 3.1415; //const não pode mudar o valor
//pi = 3.15;
console.log(pi);

let saudacao = "Olá mundo!";
console.log(saudacao);

//array: coleção ordenada de dados
let frutas =["Maçã", "Banana", "Laranja"]; 
console.log(frutas[1]);
console.log(frutas.length);

// objeto: estrutura de dados que representam entidades com propriedades
const pessoa = {
    nome: "Marjory",
    idade: 25
};
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

=========================================================================================================================

    O ESCOPO de uma variável determina onde ela pode ser acessada no código. JS tem dois tipos principais de escopo:
GLOBAL: pode ser acessada em qualquer lugar do código
BLOCO: pode ser acessada apenas dentro do bloco onde ela foi definida

variáveis definidas como 'var' tem escopo global!!

let global = "Eu sou global";
{
    let local = "Eu sou local";
    console.log(local);
    console.log(global);
    {
        let maislocal = "Eu sou mais local";
        console.log(maislocal);
    }
}
//console.log(local); // A VARIÁVEL local NÃO É VISÍVEL FORA DO BLOCO ONDE FOI DEFINIDA

____________________________________________________________
|                                                          |
| USE LET PARA VARIÁVEIS QUE PODEM MUDAR                   |
| USE CONST PARA VARIÁVEIS QUE NÃO DEVEM MUDAR             |
| EVITE USAR VAR DEVIDO AOS PROBLEMAS DE ESCOPO E HOISTING |
|__________________________________________________________|

*/

// HOISTING
// var consegue içar a variável (undefined) / let não consegue
console.log(hoisted);
var hoisted = "Eu fui içado";
console.log(hoisted);