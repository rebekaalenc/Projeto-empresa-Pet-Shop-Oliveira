import PySimpleGUI as sg
from pymongo import MongoClient

# Função para cadastrar usuário no MongoDB
def cadastrar_produto(nome_produto, marca_produto, categoria, descrição):
    usuario = {
        'Nome': nome_produto,
        'Marca': marca_produto,
        'Categoria': categoria,
        'Descrição': descrição
    }
    collection.insert_one(usuario)

# Layout da janela de cadastro
layout_cadastro = [
    [sg.Text('Cadastro do Produto')],
    [sg.Text('Nome:', size=(15, 1)), sg.InputText(key='Nome')],
    [sg.Text('Marca:', size=(15, 1)), sg.InputText(key='Marca')],
    [sg.Text('Categoria:', size=(15, 1)), sg.InputText(key='Categoria')],
    [sg.Text('Descrição:', size=(15, 1)), sg.InputText(key='Descrição')],
    [sg.Button('Cadastrar'), sg.Button('Sair')]
]

# Criar a janela de cadastro
window_cadastro = sg.Window('Cadastro do Produto', layout_cadastro)

# Layout da janela de confirmação
layout_confirmacao = [
    [sg.Text('Produto cadastrado com sucesso!')],
    [sg.Button('OK')]
]

# Conectar ao MongoDB
connection_string = "mongodb://localhost:27017/"
produto = MongoClient(connection_string)
db = produto["Projeto_PetShopOliveira"]
collection = db["produto"]

# Verifique a conexão
print("Conexão estabelecida com sucesso.")

# Loop de eventos
while True:
    event, values = window_cadastro.read()

    if event == sg.WIN_CLOSED or event == 'Sair':
        break
    elif event == 'Cadastrar':
        nome_produto = values['Nome']
        marca_produto = values['Marca']
        categoria = values['Categoria']
        descrição = values['Descrição']
    

        # Verificar se todos os campos foram preenchidos
        if not nome_produto or not marca_produto or not categoria or not descrição:
            sg.popup_error('Por favor, preencha todos os campos.')
        else:
            # Chamar a função para cadastrar o usuário
            cadastrar_produto(nome_produto, marca_produto, categoria, descrição)

            # Abrir a janela de confirmação
            window_confirmacao = sg.Window('Confirmação', layout_confirmacao)
            event_confirmacao, values_confirmacao = window_confirmacao.read()
            window_confirmacao.close()

        # Limpar os campos após o cadastro
        window_cadastro['Nome'].update('')
        window_cadastro['Marca'].update('')
        window_cadastro['Categoria'].update('')
        window_cadastro['Descrição'].update('')
       

# Fechar a janela de cadastro
window_cadastro.close()

# Fechar a conexão com o MongoDB
produto.close()