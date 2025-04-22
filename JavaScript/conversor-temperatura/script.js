document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("converter").addEventListener("click", function(){

        const numero = parseFloat(document.getElementById("inputnumber").value);
        const unidade1 = document.getElementById("unidade1").value;
        const unidade2 = document.getElementById("unidade2").value;
        let resultado;

        switch (unidade1) {

            case 'celsius':
                if (unidade2 === "fahrenheit"){
                    resultado = ((numero * (9/5)) + 32);
                } else if(unidade2 === "kelvin"){
                    resultado = (numero + 273.15);
                } else{
                    resultado = numero;
                }
                break;

            case 'fahrenheit':
                if (unidade2 === "celsius"){
                    resultado = ((numero - 32) * (5 / 9));
                } else if(unidade2 === "kelvin"){
                    resultado = ((numero - 32) * (5 / 9)) + 273.15;
                } else{
                    resultado = numero;
                }
                break;

            case 'kelvin':
                if (unidade2 === "celsius"){
                    resultado = ((numero - 273.15));
                } else if(unidade2 === "fahrenheit"){
                    resultado = ((numero - 273.15) * (9 / 5)) + 32;
                } else{
                    resultado = numero;
                }
                break;

            default:
                resultado = 'Operação inválida!';
        }
        

        document.getElementById('resultado').innerText = resultado.toFixed(2);
    })
})