import PySimpleGUI as sg
from pymongo import MongoClient

# Função para cadastrar usuário no MongoDB
def cadastrar_usuario(nome, cep, cpf, email, telefone, senha):
    usuario = {
        'nome': nome,
        'cep': cep,
        'cpf': cpf,
        'email': email,
        'telefone': telefone,
        'senha': senha
    }
    collection.insert_one(usuario)

# Layout da janela de cadastro
layout_cadastro = [
    [sg.Text('Cadastro de Usuário')],
    [sg.Text('Nome:', size=(15, 1)), sg.InputText(key='Nome')],
    [sg.Text('CEP:', size=(15, 1)), sg.InputText(key='CEP')],
    [sg.Text('CPF:', size=(15, 1)), sg.InputText(key='CPF')],
    [sg.Text('E-mail:', size=(15, 1)), sg.InputText(key='E-mail')],
    [sg.Text('Telefone:', size=(15, 1)), sg.InputText(key='Telefone')],
    [sg.Text('Senha:', size=(15, 1)), sg.InputText(key='Senha', password_char='*')],
    [sg.Button('Cadastrar'), sg.Button('Sair')]
]

# Criar a janela de cadastro
window_cadastro = sg.Window('Cadastro de Usuário', layout_cadastro)

# Layout da janela de confirmação
layout_confirmacao = [
    [sg.Text('Usuário cadastrado com sucesso!')],
    [sg.Button('OK')]
]

# Conectar ao MongoDB
connection_string = "mongodb://localhost:27017/"
cliente = MongoClient(connection_string)
db = cliente["Projeto_PetShopOliveira"]
collection = db["cliente"]

# Verifique a conexão
print("Conexão estabelecida com sucesso.")

# Loop de eventos
while True:
    event, values = window_cadastro.read()

    if event == sg.WIN_CLOSED or event == 'Sair':
        break
    elif event == 'Cadastrar':
        nome = values['Nome']
        cep = values['CEP']
        cpf = values['CPF']
        email = values['E-mail']
        telefone = values['Telefone']
        senha = values['Senha']

        # Verificar se todos os campos foram preenchidos
        if not nome or not cep or not cpf or not email or not telefone or not senha:
            sg.popup_error('Por favor, preencha todos os campos.')
        else:
            # Chamar a função para cadastrar o usuário
            cadastrar_usuario(nome, cep, cpf, email, telefone, senha)

            # Abrir a janela de confirmação
            window_confirmacao = sg.Window('Confirmação', layout_confirmacao)
            event_confirmacao, values_confirmacao = window_confirmacao.read()
            window_confirmacao.close()

        # Limpar os campos após o cadastro
        window_cadastro['Nome'].update('')
        window_cadastro['CEP'].update('')
        window_cadastro['CPF'].update('')
        window_cadastro['E-mail'].update('')
        window_cadastro['Telefone'].update('')
        window_cadastro['Senha'].update('')

# Fechar a janela de cadastro
window_cadastro.close()

# Fechar a conexão com o MongoDB
cliente.close()
