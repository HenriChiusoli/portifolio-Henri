import math

numero = float(input("Digite um número: "))

if numero < 0:
    print("Não é possível calcular a raiz quadrada de um número negativo.")
else:
    raizQuadrada = math.sqrt(numero)
    print(f"A raiz quadrada de {numero} é: {raizQuadrada:.2f}")
