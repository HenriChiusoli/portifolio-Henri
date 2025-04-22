class Carro{
    constructor (marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo(){
        return `Marca: ${this.marca} >>|<< Modelo: ${this.modelo} >>|<< Ano ${this.ano}`
    }

    calcularIdade(anoAtual){
        const idade = anoAtual - this.ano;
        return `Idade do carro: ${idade} anos`;
    }
}

const carro01 = new Carro('Ford', 'Ka', 2020);
const carro02 = new Carro('Toyota', 'Corolla', 2015);
const carro03 = new Carro('Nissan', 'Frontier', 2012);

console.log(carro03.exibirInfo());
console.log(carro03.calcularIdade(2025));