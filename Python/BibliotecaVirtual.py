from datetime import datetime, timedelta

class Livro:
    def __init__(self, titulo, autor, isbn):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.disponivel = True

    def __str__(self):
        return f"Título: {self.titulo}, Autor: {self.autor}, ISBN: {self.isbn}, Disponível: {self.disponivel}"

class Usuario:
    def __init__(self, nome, usuario_id):
        self.nome = nome
        self.usuario_id = usuario_id
        self.livros_emprestados = []

    def __str__(self):
        return f"Nome: {self.nome}, ID: {self.usuario_id}, Livros Emprestados: {[livro.titulo for livro in self.livros_emprestados]}"

class Biblioteca:
    def __init__(self):
        self.livros = []
        self.usuarios = []
        self.emprestimos = {}  # Dicionário para rastrear empréstimos: {livro.isbn: (usuario.usuario_id, data_emprestimo)}
        self.dias_para_devolucao = 7
        self.multa_por_dia = 0.50  # R$ 0.50 por dia de atraso

    def adicionar_livro(self, livro):
        self.livros.append(livro)

    def adicionar_usuario(self, usuario):
        self.usuarios.append(usuario)

    def listar_disponiveis(self):
        return [livro for livro in self.livros if livro.disponivel]

    def emprestar_livro(self, isbn, usuario_id):
        livro = self._encontrar_livro(isbn)
        usuario = self._encontrar_usuario(usuario_id)

        if not livro:
            return "Livro não encontrado."
        if not usuario:
            return "Usuário não encontrado."
        if not livro.disponivel:
            return "Livro não disponível."
        if livro in usuario.livros_emprestados:
            return "Este livro já está emprestado para este usuário."

        livro.disponivel = False
        usuario.livros_emprestados.append(livro)
        self.emprestimos[isbn] = (usuario_id, datetime.now())
        return f"Livro '{livro.titulo}' emprestado para '{usuario.nome}' em {datetime.now().strftime('%d/%m/%Y')}."

    def devolver_livro(self, isbn):
        livro = self._encontrar_livro(isbn)
        if not livro:
            return "Livro não encontrado."
        if livro.disponivel:
            return "Este livro não está emprestado."

        usuario_id, data_emprestimo = self.emprestimos.pop(isbn, (None, None))
        if usuario_id:
            usuario = self._encontrar_usuario(usuario_id)
            if usuario and livro in usuario.livros_emprestados:
                usuario.livros_emprestados.remove(livro)
                livro.disponivel = True
                multa = self._calcular_multa(data_emprestimo)
                if multa > 0:
                    return f"Livro '{livro.titulo}' devolvido com atraso. Multa a pagar: R$ {multa:.2f}."
                else:
                    return f"Livro '{livro.titulo}' devolvido com sucesso."
            else:
                return "Erro ao processar a devolução (usuário não encontrado ou livro não consta como emprestado)."
        else:
            livro.disponivel = True
            return f"Livro '{livro.titulo}' devolvido (informações de empréstimo não encontradas)."

    def _encontrar_livro(self, isbn):
        for livro in self.livros:
            if livro.isbn == isbn:
                return livro
        return None

    def _encontrar_usuario(self, usuario_id):
        for usuario in self.usuarios:
            if usuario.usuario_id == usuario_id:
                return usuario
        return None

    def _calcular_multa(self, data_emprestimo):
        if not data_emprestimo:
            return 0
        hoje = datetime.now()
        dias_decorridos = (hoje - data_emprestimo).days
        atraso = max(0, dias_decorridos - self.dias_para_devolucao)
        return atraso * self.multa_por_dia

# Exemplo de uso
biblioteca = Biblioteca()

# Adicionando livros
livro1 = Livro("Dom Quixote", "Miguel de Cervantes", "978-0142437239")
livro2 = Livro("Cem Anos de Solidão", "Gabriel García Márquez", "978-0307265363")
biblioteca.adicionar_livro(livro1)
biblioteca.adicionar_livro(livro2)

# Adicionando usuários
usuario1 = Usuario("João Silva", 123)
usuario2 = Usuario("Maria Oliveira", 456)
biblioteca.adicionar_usuario(usuario1)
biblioteca.adicionar_usuario(usuario2)

# Listando livros disponíveis
print("Livros disponíveis:", [livro.titulo for livro in biblioteca.listar_disponiveis()])

# Emprestando um livro
print(biblioteca.emprestar_livro("978-0142437239", 123))

# Listando livros disponíveis novamente
print("Livros disponíveis após empréstimo:", [livro.titulo for livro in biblioteca.listar_disponiveis()])

# Tentando emprestar o mesmo livro
print(biblioteca.emprestar_livro("978-0142437239", 456))

# Devolvendo o livro (simulando um atraso)
# Para simular um atraso, podemos alterar a data de empréstimo diretamente (apenas para teste)
if "978-0142437239" in biblioteca.emprestimos:
    usuario_id, data_emprestimo = biblioteca.emprestimos["978-0142437239"]
    biblioteca.emprestimos["978-0142437239"] = (usuario_id, datetime.now() - timedelta(days=10))

print(biblioteca.devolver_livro("978-0142437239"))

# Devolvendo o outro livro no prazo
print(biblioteca.emprestar_livro("978-0307265363", 456))
print(biblioteca.devolver_livro("978-0307265363"))

# Listando livros disponíveis após devoluções
print("Livros disponíveis após devoluções:", [livro.titulo for livro in biblioteca.listar_disponiveis()])

# Listando livros emprestados por um usuário
print(usuario1)
print(usuario2)