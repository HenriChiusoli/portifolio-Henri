class Carro{
    constructor (marca, modelo, ano) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
    }

    get marca(){
        return this._marca;
    }

    set marca(novaMarca){
        this._marca = novaMarca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(novoModelo){
        this._modelo = novoModelo;
    }

    get ano(){
        return this._ano;
    }

    set ano (novoAno){
        this._ano = novoAno;
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

const carro_01 = new Carro ('Toyota', 'Corolla', 2015);
console.log(carro_01.exibirInfo());
console.log(carro_01.marca);
carro_01.marca = "OOOPS"; // mudando o SET
console.log(carro_01.marca);