nomes = []
salarios = []
continua = "sim"
while continua == "sim":
    nome = input("Digite o nome do funcionário: ")
    nomes.append(nome)
    salario = input("Digite o salário: ")
    salarios.append(salario)
    continua = input("Deseja continuar? sim ou não: ")
for i in range(len(nomes)):
    print(f"Olá {nomes[i]} seu salário é de R$ {salarios[i]}. ")