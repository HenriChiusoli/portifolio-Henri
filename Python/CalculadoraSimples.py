print("CALCULADORA\n ")
print(15 * "*")
print("\n+ = adição ")
print("- = subtracão ")
print("* = multiplicação ")
print("/ = divisão ")
print("** = potenciação\n ")
print(15 * "*")
numeroUm = float(input("Digite o primeiro número desejado: "))
numeroDois = float(input("Digite o segundo número desejado: "))
calculo = input("Digite o calculo desejado: ")
if calculo == "+" or calculo == "adicao":
    print(f"O resultado é = {numeroUm + numeroDois} ")
elif calculo == "-" or calculo == "subtracao":
    print(f"O resultado é = {numeroUm - numeroDois} ")
elif calculo == "*" or calculo == "multiplicacao" :
    print(f"O resultado é = {numeroUm * numeroDois} ")
elif calculo == "/" or calculo == "divisao" :
    print(f"O resultado é = {numeroUm / numeroDois} ")
elif calculo == "**" or calculo == "potenciacao":
    print(f"O resultado é = {numeroUm ** numeroDois} ")