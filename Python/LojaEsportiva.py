class Produto:
    def __init__(self, nome, preco, estoque):
        self.nome = nome
        self.preco = preco
        self.estoque = estoque

    def mostrar(self):
        return f"{self.nome} - R$ {self.preco:.2f}"

    def vender(self, quantidade=1):
        if self.estoque >= quantidade:
            self.estoque -= quantidade
            print(f"Vendeu {quantidade} de {self.nome}.")
            return True
        print(f"Não há estoque suficiente de {self.nome}.")
        return False

class Cliente:
    def __init__(self, nome):
        self.nome = nome
        self.carrinho = {}

    def adicionar(self, produto, quantidade=1):
        self.carrinho[produto.nome] = self.carrinho.get(produto.nome, 0) + quantidade
        print(f"{quantidade} {produto.nome} no carrinho.")

    def ver_carrinho(self, loja):
        total = 0
        print("Carrinho:")
        for nome, qtd in self.carrinho.items():
            produto = loja.achar(nome)
            if produto:
                subtotal = produto.preco * qtd
                print(f"- {nome}: {qtd} x R$ {produto.preco:.2f} = R$ {subtotal:.2f}")
                total += subtotal
        print(f"Total: R$ {total:.2f}")
        return total

    def comprar(self, loja):
        total_final = 0
        for nome, qtd in self.carrinho.items():
            produto = loja.achar(nome)
            if produto and produto.vender(qtd):
                total_final += produto.preco * qtd
        print(f"Comprou por R$ {total_final:.2f}")
        self.carrinho = {}

class Loja:
    def __init__(self, nome):
        self.nome = nome
        self.produtos = []

    def adicionar(self, produto):
        self.produtos.append(produto)
        print(f"{produto.nome} adicionado.")

    def listar(self):
        print("Produtos:")
        for i, p in enumerate(self.produtos):
            print(f"{i+1}. {p.mostrar()}")

    def achar(self, nome):
        for p in self.produtos:
            if p.nome.lower() == nome.lower():
                return p
        return None

def main():
    loja = Loja("Simples")
    bola = Produto("Bola", 50, 5)
    camiseta = Produto("Camiseta", 80, 5)
    loja.adicionar(bola)
    loja.adicionar(camiseta)

    cliente = Cliente("Comprador")
    print(f"Bem-vindo, {cliente.nome}!")
    loja.listar()

    cliente.adicionar(loja.achar("Bola"), 2)
    cliente.adicionar(loja.achar("Camiseta"))
    cliente.ver_carrinho(loja)
    cliente.comprar(loja)

if __name__ == "__main__":
    main()