/*
// FOR: É USADO QUANDO SABEMOS, DE ANTEMÃO, QUANTAS VESES QUEREMOS REPETIR UM BLOCO DE CÓDIGO
// ideal para iterar sobre arrays, strings ou qualquer estrutura com um número conhecido de elementos
for (let i = 5; i > 0; i--){
    console.log(i);
}

-----------x-----------

// WHILE: REPETE UM BLOCO DE CÓDIGO ENQUANTO UMA CONDIÇÃO ESPECÍFICA FOR VERDADEIRA
// ideal quando não se sabe quantas vezes o laço será executado, mas sabe-se que ele deve continuar
// enquanto uma condição for verdadeira
let i = 0;
while (i < 5){
    console.log(i);
    i++;
}

-----------x-----------

// DO WHILE: É SEMELHANTE AO WHILE, MAS GARANTE QUE O BLOCO DE CÓDIGO SEJA EXECUTADO PELO MENOS
// UMA VEZ ANTES DE VERIFICAR A SUA CONDIÇÃO
// útil quando você precisa garantir que o bloco de código seja executado pelo menos uma vez, como em
// menus interativos ou validações de entrada
i = 0;
do{
    console.log(i);
    i++;
} while (i<5);

-----------x-----------

// TABUADA
let j = 6;
console.log("Tabuada do " + j );
console.log();

for (i=0; i<=10; i++){
    console.log(j + " x " + i + " = " + (j*i));
}

-----------x-----------

// EXERCÍCIO 1 - CRIE UM LAÇO FOR QUE EXIBA TODOS OS NÚMEROS PARES DE 1 A 20
for (let i = 0; i<=20; i++){
    if (!((i % 2) === 0)){
        console.log(i);
    }
}

-----------x-----------

// EXERCÍCIO 2 - USE UM LAÇO WHILE PARA SOMAR OS NÚMEROS DE 1 A 10
let j = 1;
let soma = 0;
while (j <= 10) {
    soma += j;
    j++;
}
console.log("A soma dos números de 1 a 10 é: " + soma);

// Usando do...while

-----------x-----------

// EXERCÍCIO 3 - ESCREVA UM PROGRAMA USANDO DO...WHILE QUE SOLICITE AO USUÁRIO UM NÚMERO
// E CONTINUE PEDINDO ENQUANTO O NÚMERO FOR MENOR QUE 10
let numero = 0;
do {
    console.log(numero);
    numero++;
} while (numero < 10);

let i = 1;
let soma = 0;
do {
    soma += i;
    i++;    
} while (i <= 10);
console.log("A soma dos números de 1 a 10 é: " + soma);

-----------x-----------

// FOREACH: É UMA FUNÇÃO EMBUTIDA EM ARRAYS QUE EXECUTA UMA FUNÇÃO FORNECIDA UMA VEZ PARA CADA
// ELEMENTO DA ARRAY
// Simplifica o processo de percorrer cada elemento de uma array, tornando o código mais limpo e legível

 */
// DESAFIO 2: Utilize o ForEach para calcular a soma de todos os números em um array
 let numeros = [1, 2, 3, 4, 5];
 let soma = 0;
 numeros.forEach(function(numero){ // função anônima
    soma += numero; 
 });
 console.log("1- A soma dos números é: " + soma);

 soma = 0;
 numeros.forEach((numero) => { // função de seta
    soma += numero;
 })
 console.log("2- A soma dos números é: " + soma);

 //-----------x-----------

 let frutas = ["Maçã", "Banana", "Laranja", "Morango", "Limão", "Pêra"];

 // DESAFIO 1: Crie um array de strings com nomes de frutas e use o ForEach para imprimir cada nome
 frutas.forEach((fruta) => { // função de seta
    //console.log(fruta);
 });

 frutas.forEach((fruta, indice, array) => { // iteração com índice e array
    //console.log(`Índice: ${indice}, Fruta: ${fruta}` );
 });


 let frutasComA = [];

 frutas.forEach((fruta, indice, array) => {
    if (fruta.includes("i")) {
        frutasComA.push(fruta);
    }

    if (indice === array.length - 1){
        console.log(`Última fruta: ${fruta}`);
    }
 });

 //console.log(frutasComA);