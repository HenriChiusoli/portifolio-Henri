from datetime import date, datetime
from typing import List

class Tarefa:
    def __init__(self, titulo: str, descricao: str, prioridade: int, vencimento: date, status: str = "pendente"):
        self.titulo = titulo
        self.descricao = descricao
        self.prioridade = prioridade  # 1 = alta, 2 = média, 3 = baixa
        self.vencimento = vencimento
        self.status = status

    def __repr__(self):
        return (f"Tarefa('{self.titulo}', Prioridade: {self.prioridade}, "
                f"Status: {self.status}, Vencimento: {self.vencimento})")

class Usuario:
    def __init__(self, nome: str):
        self.nome = nome
        self.tarefas: List[Tarefa] = []

    def adicionar_tarefa(self, tarefa: Tarefa):
        self.tarefas.append(tarefa)

    def __repr__(self):
        return f"Usuário: {self.nome} | Tarefas: {len(self.tarefas)}"

class GerenciadorDeTarefas:
    def __init__(self, usuario: Usuario):
        self.usuario = usuario

    def ordenar_por_prioridade(self):
        return sorted(self.usuario.tarefas, key=lambda t: t.prioridade)

    def filtrar_por_status(self, status: str):
        return [t for t in self.usuario.tarefas if t.status == status]

    def lembretes_hoje(self):
        hoje = date.today()
        tarefas_hoje = [t for t in self.usuario.tarefas if t.vencimento == hoje and t.status == "pendente"]
        if tarefas_hoje:
            print(f"Lembrete para {self.usuario.nome}: Você tem {len(tarefas_hoje)} tarefa(s) para hoje!")
            for t in tarefas_hoje:
                print(f"- {t.titulo} (Prioridade {t.prioridade})")
        else:
            print(f"Nenhuma tarefa pendente para hoje, {self.usuario.nome}!")

# Exemplo de uso
if __name__ == "__main__":
    user = Usuario("Ana")
    tarefa1 = Tarefa("Reunião", "Reunião com equipe", 1, date.today())
    tarefa2 = Tarefa("Estudar Python", "Estudar classes e objetos", 2, date.today())
    tarefa3 = Tarefa("Enviar relatório", "Relatório mensal", 1, date(2025, 5, 20))

    user.adicionar_tarefa(tarefa1)
    user.adicionar_tarefa(tarefa2)
    user.adicionar_tarefa(tarefa3)

    gerenciador = GerenciadorDeTarefas(user)

    gerenciador.lembretes_hoje()
    print("Tarefas ordenadas por prioridade:")
    for tarefa in gerenciador.ordenar_por_prioridade():
        print(tarefa)
