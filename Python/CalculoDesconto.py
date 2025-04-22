valorProduto = float(input("Digite o valor do produto: "))
porcentagemDesconto = float(input("Digite a porcentagem de desconto: "))

if valorProduto < 0 or porcentagemDesconto < 0:
    print("Valores inválidos. O valor do produto e a porcentagem de desconto devem ser positivos.")
else:
    desconto = (porcentagemDesconto / 100) * valorProduto
    valorFinal = valorProduto - desconto

    print(f"O valor final com desconto é: R$ {valorFinal:.2f}")