// DESAFIO: Crie uma função fatorial sem recursividade

function fatorial(n){

    let total = 1;
    if (n < 0){
        console.log("Não é possível calcular o fatorial de um número negativo");
    }else{
        for (let i = 1; i <= n; i++){
            total = total * i;
        }
        return total;
    }
}

console.log(fatorial(5));