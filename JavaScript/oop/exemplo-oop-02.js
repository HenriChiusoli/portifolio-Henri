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
        return `Idade do carro: ${anoAtual - this.ano} anos`;
    }
}

class carroEletrico extends Carro{
    constructor (marca, modelo, ano, autonomia){
        super(marca, modelo, ano);
        this.autonomia = autonomia;
    }

    exibirInfo(){
        return `${super.exibirInfo()} >>|<< Autonomia ${this.autonomia}`
    }

    calcularTempoCarregamento(velocidadeCarregamento){
        return this.autonomia / velocidadeCarregamento;
    }
}

class carroCombustao extends Carro{
    constructor (marca, modelo, ano, combustivel){
        super (marca, modelo, ano);
        this.combustivel = combustivel;
    }

    exibirInfo(){
        return `${super.exibirInfo()} >>|<< Combustível ${this.combustivel}`
    }
}

const carroEletrico01 = new carroEletrico('BYD', 'Yuan Plus', 2023, 420);
console.log(carroEletrico01.exibirInfo());
console.log(carroEletrico01.calcularTempoCarregamento(180));

const carroCombustao01 = new carroCombustao('Ford', 'Ka', 2020, 8);
console.log(carroCombustao01.exibirInfo());