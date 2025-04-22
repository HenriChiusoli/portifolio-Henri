import math

raio = float(input("Digite o raio do círculo: "))

if raio < 0:
    print("O raio não pode ser negativo.")
else:
    area = math.pi * raio**2
    print(f"A área do círculo é: {area:.2f}")