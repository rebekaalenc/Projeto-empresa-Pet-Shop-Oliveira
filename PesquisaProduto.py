import PySimpleGUI as sg
from pymongo import MongoClient

def pesquisar_produto(id_produto, produto):
    produto = collection.find_one({'id_produto': id_produto})
    return produto

# Conectar ao MongoDB
connection_string = "mongodb://localhost:27017/"
client = MongoClient(connection_string)
db = client["Projeto_PetShopOliveira"]
collection = db["produto"]

# Layout da janela de pesquisa
layout_pesquisa = [
    [sg.Text('Pesquisar Produto')],
    [sg.Text('ID do Produto:', size=(15, 1)), sg.InputText(key='id_produto_pesquisa')],
    [sg.Button('Pesquisar'), sg.Button('Sair')],
    [sg.Text('', size=(40, 10), key='resultado')],
]

# Criar a janela de pesquisa
window_pesquisa = sg.Window('Pesquisa de Produto', layout_pesquisa)

# Função para formatar e exibir todas as informações do produto na janela
def exibir_resultado(resultado, window):
    if resultado:
        info_produto = f'Informações do Produto:\n\n'
        for key, value in resultado.items():
            info_produto += f'{key}: {value}\n'
        window['resultado'].update(info_produto)
    else:
        window['resultado'].update('Produto não encontrado.')

# Loop de eventos da janela de pesquisa
while True:
    event, values = window_pesquisa.read()

    if event == sg.WIN_CLOSED or event == 'Sair':
        break

    if event == 'Pesquisar':
        id_produto_pesquisa = values['id_produto_pesquisa']
        resultado_pesquisa = pesquisar_produto(id_produto_pesquisa, collection)
        exibir_resultado(resultado_pesquisa, window_pesquisa)

# Fechar a janela de pesquisa
window_pesquisa.close()

# Fechar a conexão com o MongoDB
client.close()