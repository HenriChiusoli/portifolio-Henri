nomes = []
destinos = []
continua = "sim"
while continua == "sim":
    nome = input("Digite seu nome: ")
    nomes.append(nome)
    reserva = input("Digite o local de destino: ")
    destinos.append(reserva)
    continua = input("Deseja continuar? Sim ou Não: ")
for i in range(len(nomes)):
    print(f"Olá {nomes[i]}, sua reserva para {destinos[i]} foi confirmada! ")
    print("Agradecemos a preferência! Tenha uma boa viagem! ")