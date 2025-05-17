from datetime import datetime
from collections import defaultdict

class Transacao:
    def __init__(self, valor, tipo, data=None, categoria='Outros'):
        if not isinstance(valor, (int, float)):
            raise TypeError("O valor da transação deve ser um número.")
        if tipo not in ['entrada', 'saida']:
            raise ValueError("O tipo da transação deve ser 'entrada' ou 'saida'.")
        self.valor = valor
        self.tipo = tipo
        self.data = data if data else datetime.now().strftime('%Y-%m-%d')
        self.categoria = categoria

    def __str__(self):
        return f"Data: {self.data}, Tipo: {self.tipo.capitalize()}, Valor: R$ {self.valor:.2f}, Categoria: {self.categoria.capitalize()}"

class Carteira:
    def __init__(self, saldo_inicial=0):
        if not isinstance(saldo_inicial, (int, float)):
            raise TypeError("O saldo inicial deve ser um número.")
        self.saldo = saldo_inicial
        self.transacoes = []

    def adicionar_transacao(self, transacao):
        if not isinstance(transacao, Transacao):
            raise TypeError("O objeto deve ser uma instância da classe Transacao.")
        self.transacoes.append(transacao)
        if transacao.tipo == 'entrada':
            self.saldo += transacao.valor
        elif transacao.tipo == 'saida':
            self.saldo -= transacao.valor

    def resumo_mensal(self, ano, mes):
        total_entrada = 0
        total_saida = 0
        transacoes_mensais = []

        for transacao in self.transacoes:
            data_transacao = datetime.strptime(transacao.data, '%Y-%m-%d')
            if data_transacao.year == ano and data_transacao.month == mes:
                transacoes_mensais.append(transacao)
                if transacao.tipo == 'entrada':
                    total_entrada += transacao.valor
                elif transacao.tipo == 'saida':
                    total_saida += transacao.valor

        print(f"\nResumo de {datetime(ano, mes, 1).strftime('%B de %Y')}:")
        for transacao in transacoes_mensais:
            print(f"- {transacao}")
        print(f"\nTotal de Entradas: R$ {total_entrada:.2f}")
        print(f"Total de Saídas: R$ {total_saida:.2f}")
        print(f"Saldo Final do Mês: R$ {total_entrada - total_saida:.2f}")

    def grafico_gastos_por_categoria(self, ano, mes, usar_matplotlib=False):
        gastos_por_categoria = defaultdict(float)
        for transacao in self.transacoes:
            data_transacao = datetime.strptime(transacao.data, '%Y-%m-%d')
            if data_transacao.year == ano and data_transacao.month == mes and transacao.tipo == 'saida':
                gastos_por_categoria[transacao.categoria] += transacao.valor

        if not gastos_por_categoria:
            print(f"\nNão houve gastos em {datetime(ano, mes, 1).strftime('%B de %Y')}.")
            return

        print(f"\nGráfico de Gastos por Categoria ({datetime(ano, mes, 1).strftime('%B de %Y')}):")
        if usar_matplotlib:
            try:
                import matplotlib.pyplot as plt

                categorias = list(gastos_por_categoria.keys())
                valores = list(gastos_por_categoria.values())

                plt.figure(figsize=(10, 6))
                plt.bar(categorias, valores, color='skyblue')
                plt.xlabel("Categoria")
                plt.ylabel("Valor (R$)")
                plt.title(f"Gastos por Categoria em {datetime(ano, mes, 1).strftime('%B de %Y')}")
                plt.xticks(rotation=45, ha='right')
                plt.tight_layout()
                plt.show()

            except ImportError:
                print("A biblioteca matplotlib não está instalada. Gerando gráfico de texto.")
                self._gerar_grafico_texto(gastos_por_categoria)
        else:
            self._gerar_grafico_texto(gastos_por_categoria)

    def _gerar_grafico_texto(self, gastos_por_categoria):
        total_gasto = sum(gastos_por_categoria.values())
        if total_gasto == 0:
            print("Nenhum gasto para exibir no gráfico.")
            return

        print("-----------------------------------------")
        for categoria, valor in sorted(gastos_por_categoria.items(), key=lambda item: item[1], reverse=True):
            percentual = (valor / total_gasto) * 100
            barra = '#' * int(percentual * 0.5)  # Ajuste o fator para controlar o tamanho da barra
            print(f"{categoria.capitalize()}: R$ {valor:.2f} ({percentual:.1f}%) {barra}")
        print("-----------------------------------------")

# Exemplo de uso
minha_carteira = Carteira(1000)

# Adicionando transações
minha_carteira.adicionar_transacao(Transacao(500, 'entrada', '2025-05-01', 'Salário'))
minha_carteira.adicionar_transacao(Transacao(50, 'saida', '2025-05-03', 'Alimentação'))
minha_carteira.adicionar_transacao(Transacao(25, 'saida', '2025-05-03', 'Transporte'))
minha_carteira.adicionar_transacao(Transacao(100, 'saida', '2025-05-10', 'Lazer'))
minha_carteira.adicionar_transacao(Transacao(300, 'entrada', '2025-05-15', 'Freelance'))
minha_carteira.adicionar_transacao(Transacao(80, 'saida', '2025-05-16', 'Compras'))

# Resumo mensal
minha_carteira.resumo_mensal(2025, 5)

# Gráfico de gastos por categoria (texto)
minha_carteira.grafico_gastos_por_categoria(2025, 5)

# Gráfico de gastos por categoria (com matplotlib, se instalado)
minha_carteira.grafico_gastos_por_categoria(2025, 5, usar_matplotlib=True)

print(f"\nSaldo atual da carteira: R$ {minha_carteira.saldo:.2f}")