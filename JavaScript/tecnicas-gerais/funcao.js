/*
function saudacao(nome) {
    return `Olá ${nome}!`;
}

console.log(saudacao('Marjory'));

const saudacao = (nome) =>{
    return `Olá, ${nome}!`;
}
console.log(saudacao('Marjory'));

function saudacaoVisitante (nome='Visitante') { // valor default
    return `Olá, ${nome}!`;
}
console.log(saudacaoVisitante());


// FUNÇÕES DE ALTA ORDEM: PODEM RECEBER OUTRAS FUNÇÕES COMO ARGUMENTOS OU RETORNAR FUNÇÕES

function operacaoMatematica(a, b, operacao){
    return operacao(a, b);
}

const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;

console.log(operacaoMatematica(5, 3, soma));
console.log(operacaoMatematica(5, 3, subtracao));

------------- x ------------- 
*/

// FUNÇÕES RECURSIVAS: FUNÇÕES QUE CHAMAM A SI MESMAS
// Sem a condição de parada, a função continuaria chamando a si mesma indefinidamente, resultando
// em um estouro de pilha

function fatorial(n){
    if (n === 0){
        return 1;
    } else{
        return n * fatorial (n - 1);
    }
}
console.log(fatorial(10000));