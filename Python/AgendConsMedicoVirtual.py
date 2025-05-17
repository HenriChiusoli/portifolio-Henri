from datetime import datetime, timedelta

class Paciente:
    def __init__(self, nome, cpf, telefone):
        if not all([nome, cpf, telefone]):
            raise ValueError("Nome, CPF e telefone do paciente são obrigatórios.")
        self.nome = nome
        self.cpf = cpf
        self.telefone = telefone

    def __str__(self):
        return f"Nome: {self.nome}, CPF: {self.cpf}, Telefone: {self.telefone}"

class Medico:
    def __init__(self, nome, especialidade):
        if not all([nome, especialidade]):
            raise ValueError("Nome e especialidade do médico são obrigatórios.")
        self.nome = nome
        self.especialidade = especialidade

    def __str__(self):
        return f"Nome: {self.nome}, Especialidade: {self.especialidade}"

class Consulta:
    def __init__(self, data, paciente, medico):
        if not isinstance(data, datetime):
            raise TypeError("A data da consulta deve ser um objeto datetime.")
        if not isinstance(paciente, Paciente):
            raise TypeError("O paciente deve ser um objeto Paciente.")
        if not isinstance(medico, Medico):
            raise TypeError("O médico deve ser um objeto Medico.")
        self.data = data
        self.paciente = paciente
        self.medico = medico

    def __str__(self):
        return f"Data: {self.data.strftime('%d/%m/%Y %H:%M')}, Paciente: {self.paciente.nome}, Médico: {self.medico.nome} ({self.medico.especialidade})"

class Agenda:
    def __init__(self):
        self.consultas = []

    def agendar_consulta(self, data, paciente, medico):
        nova_consulta = Consulta(data, paciente, medico)
        if self.verificar_conflito(nova_consulta):
            return f"Conflito de horário detectado para o médico {medico.nome} em {data.strftime('%d/%m/%Y %H:%M')}."
        self.consultas.append(nova_consulta)
        self.consultas.sort(key=lambda consulta: consulta.data) # Manter as consultas ordenadas por data
        return f"Consulta agendada com sucesso para {paciente.nome} em {data.strftime('%d/%m/%Y %H:%M')} com o médico {medico.nome}."

    def verificar_conflito(self, consulta):
        for existente in self.consultas:
            if existente.medico == consulta.medico and abs((consulta.data - existente.data).total_seconds()) < 3600: # Conflito se a consulta for do mesmo médico e no mesmo horário (tolerância de 1 hora)
                return True
        return False

    def listar_consultas(self):
        if not self.consultas:
            print("Nenhuma consulta agendada.")
            return
        print("\nLista de Consultas Agendadas:")
        for consulta in self.consultas:
            print(f"- {consulta}")

    def cancelar_consulta(self, paciente_cpf, data_str):
        try:
            data = datetime.strptime(data_str, '%d/%m/%Y %H:%M')
        except ValueError:
            return "Formato de data inválido. Use DD/MM/AAAA HH:MM."

        for i, consulta in enumerate(self.consultas):
            if consulta.paciente.cpf == paciente_cpf and consulta.data == data:
                consulta_cancelada = self.consultas.pop(i)
                return f"Consulta de {consulta_cancelada.paciente.nome} em {consulta_cancelada.data.strftime('%d/%m/%Y %H:%M')} com {consulta_cancelada.medico.nome} cancelada."
        return f"Nenhuma consulta encontrada para o paciente com CPF {paciente_cpf} na data {data_str}."

    def reagendar_consulta_mais_proxima(self, medico):
        consultas_medico = sorted([c for c in self.consultas if c.medico == medico and c.data > datetime.now()], key=lambda c: c.data)

        if not consultas_medico:
            return f"Não há consultas futuras agendadas para o médico {medico.nome} para reagendar."

        consulta_para_reagendar = consultas_medico[0]
        data_original = consulta_para_reagendar.data

        # Tentar reagendar para o próximo horário disponível (simplesmente adiantando em 1 hora para demonstração)
        nova_data = data_original + timedelta(hours=1)

        if not self.verificar_conflito(Consulta(nova_data, consulta_para_reagendar.paciente, medico)):
            consulta_para_reagendar.data = nova_data
            return f"Consulta de {consulta_para_reagendar.paciente.nome} com {medico.nome} reagendada de {data_original.strftime('%d/%m/%Y %H:%M')} para {nova_data.strftime('%d/%m/%Y %H:%M')}."
        else:
            # Lógica mais complexa de busca por horário vago poderia ser implementada aqui
            return f"Não foi possível reagendar a consulta de {consulta_para_reagendar.paciente.nome} com {medico.nome} para o próximo horário disponível."

# Exemplo de uso
agenda = Agenda()

# Criando pacientes
paciente1 = Paciente("Ana Silva", "123.456.789-00", "11 9999-8888")
paciente2 = Paciente("Pedro Souza", "987.654.321-11", "11 8888-7777")

# Criando médicos
medico1 = Medico("Dr. Carlos Pereira", "Cardiologia")
medico2 = Medico("Dra. Laura Mendes", "Dermatologia")

# Agendando consultas
print(agenda.agendar_consulta(datetime(2025, 5, 20, 10, 0), paciente1, medico1))
print(agenda.agendar_consulta(datetime(2025, 5, 20, 10, 0), paciente2, medico1)) # Conflito
print(agenda.agendar_consulta(datetime(2025, 5, 20, 11, 0), paciente2, medico1))
print(agenda.agendar_consulta(datetime(2025, 5, 21, 14, 30), paciente1, medico2))

# Listando consultas
agenda.listar_consultas()

# Cancelando uma consulta
print(agenda.cancelar_consulta("123.456.789-00", "20/05/2025 10:00"))
agenda.listar_consultas()

# Reagendando a consulta mais próxima do Dr. Carlos
print(agenda.reagendar_consulta_mais_proxima(medico1))
agenda.listar_consultas()