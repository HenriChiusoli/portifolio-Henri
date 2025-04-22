nota = int(input("Digite uma nota: "))
if nota >= 90 and 100:
    print("Parabéns! Sua nota é A ")
elif nota >= 80 and 89:
    print("Parabéns! Sua nota é B ")
elif nota >= 70 and 79:
    print("Precisa melhorar! Sua nota é C ")
elif nota >= 60 and 69:
    print("Precisa melhorar muito! Sua nota é D ")
elif nota < 60:
    print("Você está de recuperação! Sua nota é F ")