print("--- INÍCIO DA AVALIAÇÃO DE BOLSA ---")
print("Por favor, responda a cada pergunta com 'true' ou 'false' (minúsculas).")
print("-" * 40)

renda_baixa = input("1. O aluno tem renda familiar menor que R$ 2.000,00? (true/false): ").lower() == 'true'

empregado = input("2. O aluno está empregado atualmente? (true/false): ").lower() == 'true'

media_alta = input("3. O aluno contém média acima de 7? (true/false): ").lower() == 'true'

if renda_baixa and (not empregado) and media_alta:
    print("\n")
    print("---------------------------------")
    print("RESULTADO: BOLSA CONCEDIDA")
    print("---------------------------------")

else:
    print("\nNão atendeu aos requisitos principais. Avaliando Bolsa Família...")

    bolsa_familia_cadastro = input("4. O aluno está cadastrado no sistema de bolsa família? (true/false): ").lower() == 'true'

    if bolsa_familia_cadastro:
        print("\n")
        print("---------------------------------")
        print("RESULTADO: Bolsa Família")
        print("---------------------------------")
    else:
        print("\n")
        print("---------------------------------")
        print("RESULTADO: Aluno não atende os requisitos.")
        print("---------------------------------")

print("\n--- FIM DA AVALIAÇÃO ---")