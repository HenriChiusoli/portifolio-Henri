nome = input("digite seu nome: ")
idade = int(input("digite sua idade: "))
profissão = input("digite sua profissão: ")
vH = float(input("digite o valor da sua hora: "))
segSex = vH * 8 * 5 * 4
segSab = segSex + 40 * 4 
print(f"Bom dia {nome}! Com idade de {idade} anos, registrei aqui que o senhor é {profissão}!")
print(f"De acordo com o seu valor de R${vH}/hora.")
print(f"De segunda a sexta você recebe R${segSex}!")
print(f"Caso você trabalhe de seg a sab será de R${segSab}!")