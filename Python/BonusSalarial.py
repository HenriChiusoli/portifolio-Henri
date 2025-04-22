salario = float(input("Digite seu sálario: "))
tempoServico = int(input("Digite o seu tempo de serviço na empresa: "))
calculo = salario * 1.05
if tempoServico >= 5:
    print(f"De acordo com o seu tempo de {tempoServico} anos na empresa, você terá um aumento de 5% . ")
    print(f"Apartir de agora seu salario será de R$ {calculo}")
else:
    print("Você não receberá um aumento, pois não tem tempo de serviço o suficiente! ")    