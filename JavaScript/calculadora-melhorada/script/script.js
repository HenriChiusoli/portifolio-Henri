document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("calcular").addEventListener("click", function(){
        const numero1 = parseFloat(document.getElementById("numero1").value);
        const numero2 = parseFloat(document.getElementById("numero2").value);
        const operacao = document.getElementById('operacao').value;
        let resultado;

        if (isNaN(numero1) || isNaN(numero2)) {
            resultado = 'Por favor, insira números válidos.';
        } else {
            switch (operacao) {
                case '+':
                    resultado = numero1 + numero2;
                    break;
                case '-':
                    resultado = numero1 - numero2;
                    break;
                case '*':
                    resultado = numero1 * numero2;
                    break;
                case '/':
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                    } else {
                        resultado = 'Divisão por zero não é permitida!';
                    }
                    break;
                default:
                    resultado = 'Operação inválida!';
            }
        }

        document.getElementById('resultado').textContent = resultado;
    })
})