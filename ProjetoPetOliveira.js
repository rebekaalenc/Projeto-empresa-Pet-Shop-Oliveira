//Integrantes do grupo: Ana Carolina, Letícia, Larissa, Ludmilla, Rebeka

use "Projeto_PetShopOliveira"
show databases
show collections

//Criando e populando coleções:

db.createCollection("cliente")
db.createCollection("pedido")
db.createCollection("produto")
db.createCollection("transportadora")
db.createCollection("pagamento")
db.cliente.insertMany([
  {
	"ID_Cliente":"482937",
	"nome":"Ana Santos Silva",
	"CEP":"12345-678",
	"CPF":"12345678901",
	"E-mail":"ana.santos.silva@email.com",
	"telefone":"(11) 1111-1111",
	"ID_Pedido":"12-3456",
  },

  {
	"ID_Cliente":"675412",
	"nome":"Pedro Oliveira Rodrigues",
	"CEP":"98765-432",
	"CPF":"23456789012",
	"E-mail":"pedro.oliveira.rodrigues@email.com",
	"telefone":"(11) 2222-2222",
	"ID_Pedido": "45-6789",
  },
  {
    "ID_Cliente": "823649",
    "Nome": "Sofia Pereira Gomes",
    "CEP": "56789-123",
    "CPF": "34567890123",
    "E-mail": "sofia.pereira.gomes@email.com",
    "Telefone": "(11) 3333-3333",
    "ID_Pedido": "78-9012"
  },
  {
    "ID_Cliente": "139845",
    "Nome": "João Fernandes Pereira",
    "CEP": "23456-789",
    "CPF": "45678901234",
    "E-mail": "joao.fernandes.pereira@email.com",
    "Telefone": "(11) 4444-4444",
    "ID_Pedido": "23-4567"
  },
  {
    "ID_Cliente": "746203",
    "Nome": "Maria Carvalho Martins",
    "CEP": "87654-321",
    "CPF": "56789012345",
    "E-mail": "maria.carvalho.martins@email.com",
    "Telefone": "(11) 5555-5555",
    "ID_Pedido": "56-7890"
  },
  {
    "ID_Cliente": "520198",
    "Nome": "André Almeida Santos",
    "CEP": "34567-890",
    "CPF": "67890123456",
    "E-mail": "andre.almeida.santos@email.com",
    "Telefone": "(11) 6666-6666",
    "ID_Pedido": "89-0123"
  },
  {
    "ID_Cliente": "964057",
    "Nome": "Inês Sousa Ferreira",
    "CEP": "65432-109",
    "CPF": "78901234567",
    "E-mail": "ines.sousa.ferreira@email.com",
    "Telefone": "(11) 7777-7777",
    "ID_Pedido": "34-5678"
  },
  {
    "ID_Cliente": "315724",
    "Nome": "Tiago Lima Ribeiro",
    "CEP": "21098-765",
    "CPF": "89012345678",
    "E-mail": "tiago.lima.ribeiro@email.com",
    "Telefone": "(11) 8888-8888",
    "ID_Pedido": "67-8901"
  },
  {
    "ID_Cliente": "687210",
    "Nome": "Beatriz Marques Barbosa",
    "CEP": "78901-234",
    "CPF": "90123456789",
    "E-mail": "beatriz.marques.barbosa@email.com",
    "Telefone": "(11) 9999-9999",
    "ID_Pedido": "162535"
  },
  {
    "ID_Cliente": "254398",
    "Nome": "Diogo Correia Fernandes",
    "CEP": "43210-987",
    "CPF": "98765432101",
    "E-mail": "diogo.correia.fernandes@email.com",
    "Telefone": "(11) 1234-5678",
    "ID_Pedido": "98-7654"
  },
  {
    "ID_Cliente": "761204",
    "Nome": "Carolina Pinto Santos",
    "CEP": "87659-432",
    "CPF": "87654321012",
    "E-mail": "carolina.pinto.santos@email.com",
    "Telefone": "(11) 2345-6789",
    "ID_Pedido": "21-0987"
  },
  {
    "ID_Cliente": "983547",
    "Nome": "Lucas Rodrigues Cardoso",
    "CEP": "34567-890",
    "CPF": "76543210923",
    "E-mail": "lucas.rodrigues.cardoso@email.com",
    "Telefone": "(11) 3456-7890",
    "ID_Pedido": "54-3210"
  },
  {
    "ID_Cliente": "426185",
    "Nome": "Laura Costa Silva",
    "CEP": "10987-654",
    "CPF": "65432109834",
    "E-mail": "laura.costa.silva@email.com",
    "Telefone": "(11) 4567-8901",
    "ID_Pedido": "87-6543"
  },
  {
    "ID_Cliente": "539812",
    "Nome": "Miguel Ferreira Pereira",
    "CEP": "56789-012",
    "CPF": "54321098745",
    "E-mail": "miguel.ferreira.pereira@email.com",
    "Telefone": "(11) 5678-9012",
    "ID_Pedido": "32-1098"
  },
  {
    "ID_Cliente": "871206",
    "Nome": "Mariana Santos Ribeiro",
    "CEP": "43210-987",
    "CPF": "43210987656",
    "E-mail": "mariana.santos.ribeiro@email.com",
    "Telefone": "(11) 6789-0123",
    "ID_Pedido": "65-4321"
  },
  {
    "ID_Cliente": "395846",
    "Nome": "Guilherme Teixeira Alves",
    "CEP": "54321-098",
    "CPF": "32109876567",
    "E-mail": "guilherme.teixeira.alves@email.com",
    "Telefone": "(11) 7890-1234",
    "ID_Pedido": "98-7654"
  },
  {
    "ID_Cliente": "621984",
    "Nome": "Clara Gonçalves Costa",
    "CEP": "89012-345",
    "CPF": "21098765478",
    "E-mail": "clara.goncalves.costa@email.com",
    "Telefone": "(11) 8901-2345",
    "ID_Pedido": "43-2109"
  },
  {
    "ID_Cliente": "437896",
    "Nome": "Rafael Oliveira Almeida",
    "CEP": "67890-123",
    "CPF": "10987654389",
    "E-mail": "rafael.oliveira.almeida@email.com",
    "Telefone": "(11) 9012-3456",
    "ID_Pedido": "76-5432"
  },
  {
    "ID_Cliente": "176245",
    "Nome": "Sofia Pereira Silva",
    "CEP": "23456-789",
    "CPF": "98765432101",
    "E-mail": "sofia.pereira.silva@email.com",
    "Telefone": "(11) 9876-5432",
    "ID_Pedido": "2507635"
  },
  {
    "ID_Cliente": "694801",
    "Nome": "Tomás Santos Gonçalves",
    "CEP": "98765-432",
    "CPF": "87654321012",
    "E-mail": "tomas.santos.goncalves@email.com",
    "Telefone": "(11) 8765-4321",
    "ID_Pedido": "568654"
  },
  {
    "ID_Cliente": "281654",
    "Nome": "Inês Silva Pereira",
    "CEP": "76543-210",
    "CPF": "76543210923",
    "E-mail": "ines.silva.pereira@email.com",
    "Telefone": "(11) 7654-3210",
    "ID_Pedido": "67-8901"
  },
  {
    "ID_Cliente": "912674",
    "Nome": "Gustavo Martins Alves",
    "CEP": "32109-876",
    "CPF": "65432109834",
    "E-mail": "gustavo.martins.alves@email.com",
    "Telefone": "(11) 6543-2109",
    "ID_Pedido": "32-1098"
  },
  {
    "ID_Cliente": "568423",
    "Nome": "Catarina Sousa Santos",
    "CEP": "45678-901",
    "CPF": "54321098745",
    "E-mail": "catarina.sousa.santos@email.com",
    "Telefone": "(11) 5432-1098",
    "ID_Pedido": "76-5432"
  },
  {
    "ID_Cliente": "359148",
    "Nome": "Luís Fernandes Costa",
    "CEP": "54321-098",
    "CPF": "43210987656",
    "E-mail": "luis.fernandes.costa@email.com",
    "Telefone": "(11) 4321-0987",
    "ID_Pedido": "54-3210"
  },
  {
    "ID_Cliente": "748102",
    "Nome": "Matilde Ribeiro Carvalho",
    "CEP": "89012-345",
    "CPF": "32109876567",
    "E-mail": "matilde.ribeiro.carvalho@email.com",
    "Telefone": "(11) 3210-9876",
    "ID_Pedido": "89-0123"
  },
  {
    "ID_Cliente": "142978",
    "Nome": "Gabriel Almeida Sousa",
    "CEP": "67890-123",
    "CPF": "21098765478",
    "E-mail": "gabriel.almeida.sousa@email.com",
    "Telefone": "(11) 2109-8765",
    "ID_Pedido": "23-4567"
  },
  {
    "ID_Cliente": "690234",
    "Nome": "Leonor Martins Rodrigues",
    "CEP": "45678-901",
    "CPF": "10987654389",
    "E-mail": "leonor.martins.rodrigues@email.com",
    "Telefone": "(11) 1098-7654",
    "ID_Pedido": "98-7654"
  },
  {
    "ID_Cliente": "827465",
    "Nome": "João Gomes Pereira",
    "CEP": "98765-432",
    "CPF": "12345678901",
    "E-mail": "joao.gomes.pereira@email.com",
    "Telefone": "(11) 9876-5432",
    "ID_Pedido": "568654"
  },
  {
    "ID_Cliente": "583109",
    "Nome": "Alice Costa Fernandes",
    "CEP": "21098-765",
    "CPF": "23456789012",
    "E-mail": "alice.costa.fernandes@email.com",
    "Telefone": "(11) 8765-4321",
    "ID_Pedido": "56-7890"
  },
  {
    "ID_Cliente": "257468",
    "Nome": "Daniel Santos Ribeiro",
    "CEP": "10987-654",
    "CPF": "34567890123",
    "E-mail": "daniel.santos.ribeiro@email.com",
    "Telefone": "(11) 7654-3210",
    "ID_Pedido": "34-5678"
  }
])
db.cliente.find().pretty()

db.produto.insertMany([
  {
    "id_produto": 82104,
    "nome_produto": "Magnus todo dia",
    "marca_produto": "Magnus",
    "categoria": "Alimentos",
    "descrição": {
      "porte": "Pequeno",
      "sabor": "Carne e frango"
    },
    "validade": new Date("2025-04-07T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 15943,
    "nome_produto": "Magnus Super Premium",
    "marca_produto": "Magnus",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "porte": "Pequeno",
      "sabor": "Frango e arroz"
    },
    "validade": new Date("2026-11-20T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 57329,
    "nome_produto": "Magnus Premium",
    "marca_produto": "Magnus",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "sabor": "Frango e carne"
    },
    "validade": new Date("2026-03-15T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 40678,
    "nome_produto": "GoldeN Gatos",
    "marca_produto": "GoldeN",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos castrados",
      "sabor": "Salmão"
    },
    "validade": new Date("2024-07-04T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 78914,
    "nome_produto": "PremieR Seleção Natural",
    "marca_produto": "Premier Pet",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Filhotes",
      "sabor": "Frango Korin & Batata-doce"
    },
    "validade": new Date("2026-02-26T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 13296,
    "nome_produto": "Origens Premium Especial",
    "marca_produto": "Origens",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Filhotes",
      "raças": "Yorkshire, Maltês E Spitz"
    },
    "validade": new Date("2026-10-09T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 46582,
    "nome_produto": "Gatan Mix",
    "marca_produto": "Gatan",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "sabor": "Carne E Frango"
    },
    "validade": new Date("2025-08-22T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 82405,
    "nome_produto": "Begacat Premium",
    "marca_produto": "Begacat",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "sabor": "Pescados e Arroz"
    },
    "validade": new Date("2026-05-16T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 97863,
    "nome_produto": "Fórmula Natural Pró",
    "marca_produto": "Formula Natural",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Filhotes",
      "porte": "Mini E Pequeno",
      "sabor": "Frango E Arroz Integral"
    },
    "validade": new Date("2027-12-27T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 35026,
    "nome_produto": "Fórmula Natural Fresh Meat",
    "marca_produto": "Formula Natural",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Castrados",
      "sabor": "Carne"
    },
    "validade": new Date("2025-02-01T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 69741,
    "nome_produto": "Royal Canin Maxi",
    "marca_produto": "Royal Canin",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "porte": "Grande"
    },
    "validade": new Date("2026-01-06T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 21589,
    "nome_produto": "GranPlus Choice",
    "marca_produto": "GranPlus",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães",
      "porte": "Médio e Grande",
      "sabor": "Frango e Carne"
    },
    "validade": new Date("2026-04-13T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 68432,
    "nome_produto": "Premier Nutrição Clínica Cardio",
    "marca_produto": "Premier Pet",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "sabor": "Carne e frutas"
    },
    "validade": new Date("2026-07-18T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 24907,
    "nome_produto": "Premier Seleção Natural",
    "marca_produto": "Premier Pet",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "sabor": "Frango"
    },
    "validade": new Date("2026-11-02T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 73816,
    "nome_produto": "Special Dog Pró",
    "marca_produto": "Special Dog",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "sabor": "Vegetais"
    },
    "validade": new Date("2026-09-24T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 50627,
    "nome_produto": "Ração Vitta Natural",
    "marca_produto": "Vitta Dog",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "sabor": "Carne e Cereais"
    },
    "validade": new Date("2026-08-14T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 92145,
    "nome_produto": "Pedigree High Protein",
    "marca_produto": "Pedigree",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "sabor": "Carne e Frango"
    },
    "validade": new Date("2027-03-30T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 64738,
    "nome_produto": "Whiskas Filhote",
    "marca_produto": "Whiskas",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Filhotes",
      "sabor": "Carne"
    },
    "validade": new Date("2026-05-19T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 18450,
    "nome_produto": "CatChow Adultos",
    "marca_produto": "CatChow",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "sabor": "Peixe"
    },
    "validade": new Date("2026-12-05T00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 59273,
    "nome_produto": "Ração Billy Cat Select Premium",
    "marca_produto": "Billy Cat",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Castrados",
      "sabor": "Frango e Salmão"
    },
    "validade": new Date("2026-10-21T00:00:00"),
    "animal": "Gato"
  },

  {
    "id_produto": 30946,
    "nome_produto": "DogChow Filhotes",
    "marca_produto": "DogChow",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Filhotes",
      "porte": "Médias e Grandes",
      "sabor": "Carne, Frango e Arroz"
    },
    "validade": new Date("2026-06-27T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 85614,
    "nome_produto": "Cão Criador",
    "marca_produto": "Criador",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Coelhos",
      "sabor": "Carne e Cereais"
    },
    "validade": new Date("2026-01-11T00:00:00"),
    "animal": "Coelho"
  },
  {
    "id_produto": 72103,
    "nome_produto": "Mit Canario",
    "marca_produto": "Mit",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Ração Aves",
      "raças": "Cánario"
    },
    "validade": new Date("2026-04-08T00:00:00"),
    "animal": "Aves"
  },
  {
    "id_produto": 14968,
    "nome_produto": "Nutricon Nutriflakes",
    "marca_produto": "Nutri Flakes",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Ração para peixes",
      "raças": "todas as especies"
    },
    "validade": new Date("2026-07-03T00:00:00"),
    "animal": "Peixes"
  },
  {
    "id_produto": 35827,
    "nome_produto": "Funny Bunny",
    "marca_produto": "Supra",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Ração para roedores",
      "raças": "Coelhos; Hamster e pequenos roedores"
    },
    "validade": new Date("2026-03-09T00:00:00"),
    "animal": "Roedores"
  },
  {
    "id_produto": 67401,
    "nome_produto": "Magnus Biscoito",
    "marca_produto": "Magnus",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Biscoito Cães Filhotes",
      "sabor": "Sem sabor especifico"
    },
    "validade": new Date("2026-02-10T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 98256,
    "nome_produto": "Magnus Bifinhos",
    "marca_produto": "Magnus",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Bifinho Cães",
      "sabor": "Frango"
    },
    "validade": new Date("2027-08-25T00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 42795,
    "nome_produto": "Magnus Cat",
    "marca_produto": "Magnus",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Petisco",
      "sabor": "Carne"
    },
    "validade": new Date("2026-11-22T00:00:00"),
    "animal": "Gatos"
  },
  {
    "id_produto": 50372,
    "nome_produto": "Whiskas Petisco",
    "marca_produto": "Whiskas",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "sabor": "Anti Bola de Pelo"
    },
    "validade": new Date("2026-12-20T00:00:00"),
    "animal": "Gatos"
  },
  {
    "id_produto": 18645,
    "nome_produto": "Whiskas Sachês",
    "marca_produto": "Whiskas",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Ração Úmida para Gatos Filhotes",
      "sabor": "Carne ao molho"
    },
    "validade": new Date("2027-09-15T00:00:00"),
    "animal": "Gatos"
  },

  {
    "id_produto": 79136,
    "nome_produto": "DogChow Biscoitos",
    "marca_produto": "Purina",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Adultos",
      "porte": "Minis e Pequenos",
      "sabor": "Frango"
    },
    "validade": new Date("2026/05/01 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 26594,
    "nome_produto": "DogChow Sachês",
    "marca_produto": "Purina",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães Filhotes",
      "porte": "Todos os Portes",
      "sabor": "Carne"
    },
    "validade": new Date("2026/01/04 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 91847,
    "nome_produto": "Friskies Biscoitos",
    "marca_produto": "Purina",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Gatos Adultos",
      "porte": "Todos os Portes",
      "sabor": "Camarão, Salmão e Atum"
    },
    "validade": new Date("2026/03/23 00:00:00"),
    "animal": "Gatos"
  },
  {
    "id_produto": 34620,
    "nome_produto": "Doogs Snack",
    "marca_produto": "Doogs",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães",
      "porte": "Todos os Portes",
      "sabor": "Snack Recheado Churros"
    },
    "validade": new Date("2027/07/31 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 67283,
    "nome_produto": "Doogs Snack",
    "marca_produto": "Doogs",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães",
      "porte": "Todos os Portes",
      "sabor": "Snack Costelinha Defumada"
    },
    "validade": new Date("2026/09/28 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 42957,
    "nome_produto": "Cerveja Ipet Dog Beer",
    "marca_produto": "Dog Beer",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães",
      "sabor": "Carne"
    },
    "validade": new Date("2028/03/12 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 75814,
    "nome_produto": "Pedigree Biscoito",
    "marca_produto": "Pedigree",
    "categoria": "Alimentos",
    "descrição": {
      "tipo": "Cães",
      "porte": "Todos os Portes",
      "sabor": "Biscrok"
    },
    "validade": new Date("2026/10/13 00:00:00"),
    "animal": "Cachorro"
  }
])

db.produto.find().pretty()
db.produto.insertMany([
  {
    "id_produto": 73982,
    "nome_produto": "NatuVerm",
    "marca_produto": "NatuVerm Nat",
    "categoria": "Medicamentos",
    "descrição": "Vermífugo",
    "validade": new Date("2026/11/07 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 51247,
    "nome_produto": "StarPet",
    "marca_produto": "Capstar",
    "categoria": "Medicamentos",
    "descrição": "Antípulgas",
    "validade": new Date("2027/06/21 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 89634,
    "nome_produto": "Ducão",
    "marca_produto": "Oriente",
    "categoria": "Medicamentos",
    "descrição": "Coleira antípulgas e carrapatos",
    "validade": new Date("2028/09/14 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 31569,
    "nome_produto": "EnroNew",
    "marca_produto": "World",
    "categoria": "Medicamentos",
    "descrição": "Antibiótico",
    "validade": new Date("2025/03/02 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 62418,
    "nome_produto": "Saralogo",
    "marca_produto": "Matacura",
    "categoria": "Medicamentos",
    "descrição": "Pomada cicatrizante",
    "validade": new Date("2026/12/30 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 47856,
    "nome_produto": "Invermectina",
    "marca_produto": "DogMax",
    "categoria": "Medicamentos",
    "descrição": "Antípulgas e carrapatos",
    "validade": new Date("2026/04/19 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 93210,
    "nome_produto": "Vermitril",
    "marca_produto": "Max Power",
    "categoria": "Medicamentos",
    "descrição": "Vermífugo",
    "validade": new Date("2026/10/11 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 25694,
    "nome_produto": "Avitrin",
    "marca_produto": "Coveli",
    "categoria": "Medicamentos",
    "descrição": "Vermífugo",
    "validade": new Date("2026/02/28 00:00:00"),
    "animal": "Aves"
  },
  {
    "id_produto": 70183,
    "nome_produto": "Proavedin",
    "marca_produto": "Gold",
    "categoria": "Medicamentos",
    "descrição": "Suplemento Vitaminíco",
    "validade": new Date("2026/05/23 00:00:00"),
    "animal": "Aves"
  },
  {
    "id_produto": 14927,
    "nome_produto": "Coccidex",
    "marca_produto": "Aarão",
    "categoria": "Medicamentos",
    "descrição": "Suplemento Vitaminíco",
    "validade": new Date("2026/11/05 00:00:00"),
    "animal": "Aves"
  },
  {
    "id_produto": 58346,
    "nome_produto": "Tabletes Mastigaveis",
    "marca_produto": "Nexgard",
    "categoria": "Medicamentos",
    "descrição": "Antípulgas e carrapatos",
    "validade": new Date("2026/08/17 00:00:00"),
    "animal": "Cachorro"
  },
  {
    "id_produto": 36791,
    "nome_produto": "Cone colar cirurgíco",
    "marca_produto": "Elizabetano Jireh",
    "categoria": "Medicamentos",
    "descrição": "Cone",
    "validade": new Date("2026/01/03 00:00:00"),
    "animal": "Gato e cachorro"
  },

  {
    "id_produto": 91508,
    "nome_produto": "Compressa de gaze estéril",
    "marca_produto": "Texpharma",
    "categoria": "Medicamentos",
    "descrição": "Gaze",
    "validade": new Date("2025/07/29 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 42073,
    "nome_produto": "Roupa pós-cirurgíca",
    "marca_produto": "Pet Med",
    "categoria": "Medicamentos",
    "descrição": "Roupa pós-cirurgíca",
    "validade": new Date("2026/12/08 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 76812,
    "nome_produto": "Seringa",
    "marca_produto": "Pharmax",
    "categoria": "Medicamentos",
    "descrição": "Seringa para aplicação de medicamentos",
    "validade": new Date("2025/03/25 00:00:00"),
    "animal": "Gato e cachorro"
  },
  {
    "id_produto": 23857,
    "nome_produto": "CalceCat",
    "marca_produto": "Pharmax",
    "categoria": "Medicamentos",
    "descrição": "Suplemento Vitaminíco para gatos",
    "validade": new Date("2026/09/10 00:00:00"),
    "animal": "Gato"
  },
  {
    "id_produto": 69415,
    "nome_produto": "Vitamais",
    "marca_produto": "Pharmax",
    "categoria": "Medicamentos",
    "descrição": "Suplemento Vitaminíco para cachorros",
    "validade": new Date("2027/06/12 00:00:00"),
    "animal": "Cachorros"
  }
])
db.produto.insertMany([
  {
    "id_produto": 23569,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Aumigos",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "P",
      "cor": "Preto"
    },
    "animal": "Cachorro"
  },
  {
    "id_produto": 59184,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Aumigos",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "G",
      "cor": "Preto"
    },
    "animal": "Cachorro"
  },
  {
    "id_produto": 17942,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Aumigos",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "M",
      "cor": "Cinza"
    },
    "animal": "Cachorro"
  }])
  
db.produto.insertMany([
    {
    "id_produto": 61425,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Aumigos",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "G",
      "cor": "Vermelho"
    },
    "animal": "Cachorro"
  },
  {
    "id_produto": 30578,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Aumigos",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "M",
      "cor": "Vermelho"
    },
    "animal": "Cachorro"
  },
  {
    "id_produto": 68423,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Felinos sempre",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "P",
      "cor": "Vermelho"
    },
    "animal": "Gato"
  },
  {
    "id_produto": 23750,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Felinos sempre",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "M",
      "cor": "Vermelho"
    },
    "animal": "Gato"
  },
  {
    "id_produto": 91562,
    "nome_produto": "Roupa de inverno premium",
    "marca_produto": "Felinos sempre",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "G",
      "cor": "Vermelho"
    },
    "animal": "Gato"
  },
  {
    "id_produto": 48917,
    "nome_produto": "Roupa de inverno",
    "marca_produto": "Patas e bigodes",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "P",
      "cor": "Estampado Vermelho"
    },
    "animal": "Cachorro"
  },
  {
    "id_produto": 72638,
    "nome_produto": "Roupa de inverno",
    "marca_produto": "Patas e bigodes",
    "categoria": "Acessórios",
    "descrição": {
      "tam": "M",
      "cor": "Estampado Vermelho"
    },
    "animal": "Cachorro"
  },
  {
    "ID_Produto": 54079,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "G",
      "Cor": "Estampado Vermelho"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 12485,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "P",
      "Cor": "Estampado Verde"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 85743,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "M",
      "Cor": "Estampado Azul"
    },
    "Animal": "Cachorro"
  }])
db.produto.insertMany([{
    "ID_Produto": 37026,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "G",
      "Cor": "Estampado Azul"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 69421,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "P",
      "Cor": "Estampado Azul"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 54217,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "P",
      "Cor": "Estampado"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 68214,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "M",
      "Cor": "Estampado"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 21694,
    "Nome_Produto": "Roupa de inverno",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "G",
      "Cor": "Estampado"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 41803,
    "Nome_Produto": "Roupas temáticas",
    "Marca_Produto": "Cat's Lovers",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "P",
      "Tema": "Halloween"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 93768,
    "Nome_Produto": "Roupas temáticas",
    "Marca_Produto": "Cat's Lovers",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "M",
      "Tema": "Halloween"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 59732,
    "Nome_Produto": "Roupas temáticas",
    "Marca_Produto": "Cat's Lovers",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "G",
      "Tema": "Halloween"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 30478,
    "Nome_Produto": "Roupas temáticas",
    "Marca_Produto": "Cat's Lovers",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "P",
      "Tema": "Brasil"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 86429,
    "Nome_Produto": "Roupas temáticas",
    "Marca_Produto": "Cat's Lovers",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "M",
      "Tema": "Brasil"
    },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 15274,
    "Nome_Produto": "Roupas temáticas",
    "Marca_Produto": "Cat's Lovers",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tam": "G",
      "Tema": "Brasil"
    },
    "Animal": "Gato"
  }])
db.produto.find().pretty()
db.produto.insertMany([{
        "ID_Produto": 68390,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Cat's Lovers",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "P",
            "Tema": "Natal"
        },
        "Animal": "Gato"
    },
    {
        "ID_Produto": 12756,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Cat's Lovers",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "M",
            "Tema": "Natal"
        },
        "Animal": "Gato"
    },
    {
        "ID_Produto": 79528,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Cat's Lovers",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "G",
            "Tema": "Natal"
        },
        "Animal": "Gato"
    },
    {
        "ID_Produto": 84053,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Cat's Lovers",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "P",
            "Tema": "Carnaval"
        },
        "Animal": "Gato"
    },
    {
        "ID_Produto": 46237,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Cat's Lovers",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "M",
            "Tema": "Carnaval"
        },
        "Animal": "Gato"
    },
    {
        "ID_Produto": 31849,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Cat's Lovers",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "G",
            "Tema": "Carnaval"
        },
        "Animal": "Gato"
    },
    {
        "ID_Produto": 95621,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "P",
            "Tema": "Halloween"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 74218,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "M",
            "Tema": "Halloween"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 50732,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "G",
            "Tema": "Halloween"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 46925,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "P",
            "Tema": "Brasil"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 28361,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "M",
            "Tema": "Brasil"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 68495,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "G",
            "Tema": "Brasil"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 52703,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "P",
            "Tema": "Natal"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 37462,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "M",
            "Tema": "Natal"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 81095,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "G",
            "Tema": "Natal"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 24978,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "P",
            "Tema": "Carnaval"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 69512,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "M",
            "Tema": "Carnaval"
        },
        "Animal": "Cachorro"
    },
    {
        "ID_Produto": 15248,
        "Nome_Produto": "Roupas tematicas",
        "Marca_Produto": "Fanatidogs",
        "Categoria": "Acessórios",
        "Descrição": {
            "Tam": "G",
            "Tema": "Carnaval"
        },
        "Animal": "Cachorro"
    }])
db.produto.insertMany([{ id_produto: 48517,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas aranha' },
  Animal: 'Gato e cachorro' },
{ id_produto: 97413,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Tubarão' },
  Animal: 'Gato e cachorro' },
{ id_produto: 35826,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Princesa' },
  Animal: 'Gato e cachorro' },
{ id_produto: 82679,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Príncipe' },
  Animal: 'Gato e cachorro' },
{ id_produto: 27184,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Bruxa' },
  Animal: 'Gato e cachorro' },
{ id_produto: 49513,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Supercão' },
  Animal: 'Gato e cachorro' },
{ id_produto: 76402,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Astronauta' },
  Animal: 'Gato e cachorro' },
{ id_produto: 15283,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Cowboy' },
  Animal: 'Gato e cachorro' },
{ id_produto: 34860,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas empresário' },
  Animal: 'Gato e cachorro' },
{ id_produto: 62974,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Toy Story' },
  Animal: 'Gato e cachorro' },
{ id_produto: 54012,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Meninas malvadas' },
  Animal: 'Gato e cachorro' },
{ id_produto: 82067,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas chuky' },
  Animal: 'Gato e cachorro' },
{ id_produto: 17645,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas coraline' },
  Animal: 'Gato e cachorro' },
{ id_produto: 69324,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas jason' },
  Animal: 'Gato e cachorro' },
{ id_produto: 42986,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas monstros s.a' },
  Animal: 'Gato e cachorro' },
{ id_produto: 97146,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas faca' },
  Animal: 'Gato e cachorro' },
{ id_produto: 65108,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas Policial' },
  Animal: 'Gato e cachorro' },
{ id_produto: 23475,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas ladrão' },
  Animal: 'Gato e cachorro' },
{ id_produto: 58437,
  Nome_produto: 'Fantasia',
  Marca_produto: 'MagicWorldPetz',
  Categoria: 'Acessórios',
  Descrição: { Tam: ['P', 'M', 'G'], Tema: 'Personalizadas coloridas' },
  Animal: 'Gato e cachorro' }])
 
 db.produto.insertMany([{
    "ID_Produto": 38056,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "P", "Cor": "Vermelho" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 71549,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "M", "Cor": "Vermelho" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 92764,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "G", "Cor": "Vermelho" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 46372,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "P", "Cor": "Verde" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 85294,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "M", "Cor": "Verde" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 17246,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Patas e bigodes",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "G", "Cor": "Verde" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 42983,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Melhor amigo",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "P", "Cor": "Estampado" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 68251,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Melhor amigo",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "M", "Cor": "Estampado" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 36507,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Melhor amigo",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "G", "Cor": "Estampado" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 92415,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Meow",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "P", "Cor": "Azul" },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 57814,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Meow",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "M", "Cor": "Azul" },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 41635,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Meow",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "G", "Cor": "Azul" },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 25073,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Meow",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "P", "Cor": "Verde" },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 76541,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Meow",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "M", "Cor": "Verde" },
    "Animal": "Gato"
  },
  {
    "ID_Produto": 19364,
    "Nome_Produto": "Coleira de pescoço",
    "Marca_Produto": "Meow",
    "Categoria": "Acessórios",
    "Descrição": { "Tam": "G", "Cor": "Verde" },
    "Animal": "Gato"
  }])
  
db.produto.find().pretty()
db.produto.insertMany([
  {
    "ID_Produto": 48056,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "P", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 62489,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "M", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 57138,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "G", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 31402,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "P", "Cor": "Azul" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 79654,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "M", "Cor": "Azul" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 62841,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "G", "Cor": "Azul" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 45729,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "P", "Cor": "Rosa" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 92107,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Coração", "Tam": "M", "Cor": "Rosa" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 38567,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "G", "Cor": "Brilhante" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 71648,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "P", "Cor": "Brilhante" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 23547,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "M", "Cor": "Brilhante" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 57843,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "P", "Cor": "Azul" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 43261,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "M", "Cor": "Azul" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 86149,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "G", "Cor": "Azul" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 31748,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "P", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 69480,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "M", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52407,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "G", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 18026,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "P", "Cor": "Verde" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 64857,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Osso", "Tam": "G", "Cor": "Verde" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 92543,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "P", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 37682,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "M", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 80246,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "G", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 54973,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "G", "Cor": "Vermelho" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 16432,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "P", "Cor": "Brilhante" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74360,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "M", "Cor": "Brilhante" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 98617,
    "Nome_Produto": "Tag de identificação",
    "Marca_Produto": "Tag&CIA",
    "Categoria": "Acessórios",
    "Descrição": { "Formato": "Bola", "Tam": "G", "Cor": "Brilhante" },
    "Animal": "Gato e cachorro"
  }
])
db.produto.insertMany([
  {
    "ID_Produto": 67185,
    "Nome_Produto": "Coleira unificada",
    "Marca_Produto": "FleaShield",
    "Categoria": "Acessórios",
    "Descrição": "Auxilia em passeios indicada para cães",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 52736,
    "Nome_Produto": "Coleira cabresto",
    "Marca_Produto": "EasyGroom",
    "Categoria": "Acessórios",
    "Descrição": "Auxilia em passeios indicada para cães",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 38954,
    "Nome_Produto": "Guia tradicional",
    "Marca_Produto": "PurrfectPlay",
    "Categoria": "Acessórios",
    "Descrição": "Guia auxiliadora indicada para passeios.",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 26479,
    "Nome_Produto": "Guia extensiva",
    "Marca_Produto": "SmartPaws",
    "Categoria": "Acessórios",
    "Descrição": "Guia auxiliadora e flexível indicada para passeios.",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51748,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Pet Like",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Fralda Higiênica Decartável"
    },
    "Validade": "2027/05/06 00:00:00",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74265,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Dog's Care",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Fralda Higiênica Decartável",
      Especificação: "Macho"
    },
    "Validade": "2026/08/02 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 95081,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Super Secao",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Fralda Higiênica Decartável",
      Especificação: "Filhotes"
    },
    "Validade": "2025/01/08 00:00:00",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 63049,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "PetZoo",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Fralda Higiênica Decartável",
      Especificação: "Fêmea"
    },
    "Validade": "2025/04/26 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 41632,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Oliveirinha's",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Fralda Higiênica Decartável",
      Especificação: "Porte pequeno"
    },
    "Validade": "2025/07/18 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 83756,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Oliveirinha's",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Fralda Higiênica Decartável",
      Especificação: "Porte grande"
    },
    "Validade": "2026/10/22 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 35249,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Oliveirinha's",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável"
    },
    "Validade": "2028/09/05 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 68941,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Goog Ped",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "60x60"
    },
    "Validade": "2026/04/14 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 27658,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Animaiszinho's",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "50x56"
    },
    "Validade": "2028/03/15 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51429,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Animaiszinho's",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "45x50"
    },
    "Validade": "2024/02/20 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 94057,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Animaiszinho's",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "80x70"
    },
    "Validade": "2025/11/09 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 73468,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "65x71"
    },
    "Validade": "2026/12/01 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 67193,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "80x72"
    },
    "Validade": "2028/08/25 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 12486,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "54x64"
    },
    "Validade": "2026/05/11 00:00:00",
    "Animal": "Cachorro"
  }])
  
db.produto.insertMany([{
    "ID_Produto": 58279,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Tapete Higiênico Decartável",
      Tam: "45x50"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 35867,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Excêlente",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Coleira Peitoral para Cães e Gatos material",
      Tam: "M"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 49725,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Excêlente",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Coleira Peitoral para Cães e Gatos material",
      Tam: "G"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 72941,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Coleira Peitoral",
      Especificação: "Reajustável"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 19845,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Coleira Peitoral",
      Especificação: "Porte pequeno"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 64529,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Coleira Peitoral",
      Especificação: "Porte grande"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51743,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Doce",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Coleira Peitoral",
      Especificação: "Reajustável"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 26349,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Ortobom",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 98674,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Premium",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74298,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 42561,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Confort",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91635,
    "Nome_Produto": "Cama",
    "Marca_Produto": "NuvensPet",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 57614,
    "Nome_Produto": "Cama",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 38169,
    "Nome_Produto": "Cama Ortopédica",
    "Marca_Produto": "PawComfort",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Cama Pet",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 63974,
    "Nome_Produto": "Cama Ortopédica",
    "Marca_Produto": "Ortobom",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Mini Cama",
      Especificação: "Ortobom pet"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 48572,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Gravata",
      Especificação: "Kit 30 sortidas"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 27864,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Gravata",
      Especificação: "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 71458,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Gravata",
      Especificação: "Desenhos animados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52697,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Gravata",
      Especificação: "Sortidas"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 96814,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Chapéu",
      Especificação: "Lisos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 34782,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Chapéu",
      Especificação: "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52461,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Chapéu",
      Especificação: "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 81645,
    "Nome_Produto": "Óculos",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Óculos pet"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 69418,
    "Nome_Produto": "Óculos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Óculos pet"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 23784,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Gravata",
      Especificação: "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 58024,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Gravata",
      Especificação: "Desenhos animados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 19486,
    "Nome_Produto": "Comedouro Automático",
    "Marca_Produto": "SmartPaws",
    "Categoria": "Acessórios",
    "Descrição": "Comedouro permite que você programe horários de alimentação",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 82479,
    "Nome_Produto": "Bebedouro Portátil",
    "Marca_Produto": "On-the-Go Pets",
    "Categoria": "Acessórios",
    "Descrição": "Pet hidratado, perfeito para passeios e viagens.",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 45639,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "UtilizaPet",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Bebedouro e comedouro",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 96247,
    "Nome_Produto": "Bebedouro Portátil",
    "Marca_Produto": "UtilizaPet",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Bebedouro e comedouro",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 78154,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Bebedouro e comedouro",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 31542,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Bebedouro e comedouro",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  }])
 
 db.produto.insertMany([{
    "ID_Produto": 64872,
    "Nome_Produto": "Bebedouro",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      Tipo: "Bebedouro",
      Especificação: "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 58279,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Tapete Higiênico Decartável",
      "Tam": "45x50"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 35867,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Excêlente",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Coleira Peitoral para Cães e Gatos material",
      "Tam": "M"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 49725,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Excêlente",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Coleira Peitoral para Cães e Gatos material",
      "Tam": "G"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 72941,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Coleira Peitoral",
      "Especificação": "Reajustável"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 19845,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Coleira Peitoral",
      "Especificação": "Porte pequeno"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 64529,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Coleira Peitoral",
      "Especificação": "Porte grande"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51743,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Doce",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Coleira Peitoral",
      "Especificação": "Reajustável"
    },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 26349,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Ortobom",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 98674,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Premium",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74298,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 42561,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Confort",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91635,
    "Nome_Produto": "Cama",
    "Marca_Produto": "NuvensPet",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 57614,
    "Nome_Produto": "Cama",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 38169,
    "Nome_Produto": "Cama Ortopédica",
    "Marca_Produto": "PawComfort",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Cama Pet",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 63974,
    "Nome_Produto": "Cama Ortopédica",
    "Marca_Produto": "Ortobom",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Mini Cama",
      "Especificação": "Ortobom pet"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 48572,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Gravata",
      "Especificação": "Kit 30 sortidas"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 27864,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Gravata",
      "Especificação": "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 71458,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Gravata",
      "Especificação": "Desenhos animados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52697,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Gravata",
      "Especificação": "Sortidas"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 96814,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Chapéu",
      "Especificação": "Lisos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 34782,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Chapéu",
      "Especificação": "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52461,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Chapéu",
      "Especificação": "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 81645,
    "Nome_Produto": "Óculos",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Óculos pet"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 69418,
    "Nome_Produto": "Óculos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Óculos pet"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 23784,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Gravata",
      "Especificação": "Personalizados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 58024,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Gravata",
      "Especificação": "Desenhos animados"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 19486,
    "Nome_Produto": "Comedouro Automático",
    "Marca_Produto": "SmartPaws",
    "Categoria": "Acessórios",
    "Descrição": "Comedouro permite que você programe horários de alimentação",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 82479,
    "Nome_Produto": "Bebedouro Portátil",
    "Marca_Produto": "On-the-Go Pets",
    "Categoria": "Acessórios",
    "Descrição": "Pet hidratado, perfeito para passeios e viagens.",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 45639,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "UtilizaPet",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Bebedouro e comedouro",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 96247,
    "Nome_Produto": "Bebedouro Portátil",
    "Marca_Produto": "UtilizaPet",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Bebedouro e comedouro",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  }])
  
db.produto.insertMany([{
    "ID_Produto": 78154,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Bebedouro e comedouro",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 31542,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Bebedouro e comedouro",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 64872,
    "Nome_Produto": "Bebedouro",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": {
      "Tipo": "Bebedouro",
      "Especificação": "Cães e Gatos"
    },
    "Animal": "Gato e cachorro"
  }, 
  {
    "ID_Produto": 92716,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Bola Interátiva",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 37298,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Bola de pano",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 24937,
    "Nome_Produto": "Brinquedo Interativo \"Caça ao Tesouro\"",
    "Marca_Produto": "PurrfectPlay",
    "Categoria": "Acessórios",
    "Descrição": "Brinquedo que esconde petiscos e desafia as habilidades do gato.",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 54371,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Bola petisco",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 68725,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Macaco Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 14738,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Urso Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 79436,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Pelúcia leão",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91674,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Pelúcia mordedor",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 26841,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Kit de mini pelúcias",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 35127,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": "Pelúcia Grande",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 72936,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Urso Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 58312,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessórios",
    "Descrição": "Macaco Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 42679,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Pelúcia Gigante",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 69728,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Pelúcia Interátiva",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 15749,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessórios",
    "Descrição": "Pelúcia Colorida",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 31845,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Mordedor",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 62574,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Ossos",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 84723,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Osso grande",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 49267,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessórios",
    "Descrição": "Roedor",
    "Animal": "Rato"
  },
  {
    "ID_Produto": 76519,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessórios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 39457,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 82173,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessórios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 57348,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessórios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 48267,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": "Brinquedo retrátil",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 36951,
    "Nome_Produto": "Cobertor",
    "Marca_Produto": "HydroPaws",
    "Categoria": "Acessórios",
    "Descrição": "Manta para aquecer seu pet",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91563,
    "Nome_Produto": "Mochila astronauta",
    "Marca_Produto": "CozyClimb",
    "Categoria": "Acessórios",
    "Descrição": "Mochila adptada para levar seu pet.",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74251,
    "Nome_Produto": "Coleira liberação rápida",
    "Marca_Produto": "PetJetsetter",
    "Categoria": "Acessórios",
    "Descrição": "Coleira de liberação rápida pet.",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 53642,
    "Nome_Produto": "Almofadas",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessórios",
    "Descrição": "Almofadas de alto conforto pet",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 28417,
    "Nome_Produto": "Laços premium",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessórios",
    "Descrição": "Laço premium personalizada",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 67024,
    "Nome_Produto": "Mamadeira",
    "Marca_Produto": "Chalesco",
    "Categoria": "Acessórios",
    "Descrição": "Mamadeira para filhotes",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 92316,
    "Nome_Produto": "Mamadeira",
    "Marca_Produto": "Chalesco",
    "Categoria": "Acessórios",
    "Descrição": "Kit Mamadeira para filhotes",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 49178,
    "Nome_Produto": "Bolsa de Transporte",
    "Marca_Produto": "TravelPaws",
    "Categoria": "Acessórios",
    "Descrição": "Bolsa de transporte com estilo e segurança em viagens.",
    "Animal": "Gato e cachorro"
  }])
  
db.produto.find().pretty()

db.produto.insertMany([
  {
    "ID_Produto": 67185,
    "Nome_Produto": "Coleira unificada",
    "Marca_Produto": "FleaShield",
    "Categoria": "Acessorios",
    "Descrição": "Auxilia em passeios indicada para cães",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 52736,
    "Nome_Produto": "Coleira cabresto",
    "Marca_Produto": "EasyGroom",
    "Categoria": "Acessorios",
    "Descrição": "Auxilia em passeios indicada para cães",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 38954,
    "Nome_Produto": "Guia tradicional",
    "Marca_Produto": "PurrfectPlay",
    "Categoria": "Acessorios",
    "Descrição": "Guia auxiliadora indicada para passeios.",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 26479,
    "Nome_Produto": "Guia extensiva",
    "Marca_Produto": "SmartPaws",
    "Categoria": "Acessorios",
    "Descrição": "Guia auxiliadora e flexível indicada para passeios.",
    "Validade": "2026/11/07 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51748,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Pet Like",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Fralda Higiênica Decartável" },
    "Validade": "2027/05/06 00:00:00",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74265,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Dog's Care",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Fralda Higiênica Decartável", "Especificação": "Macho" },
    "Validade": "2026/08/02 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 95081,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Super Secao",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Fralda Higiênica Decartável", "Especificação": "Filhotes" },
    "Validade": "2025/01/08 00:00:00",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 63049,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "PetZoo",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Fralda Higiênica Decartável", "Especificação": "Fêmea" },
    "Validade": "2025/04/26 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 41632,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Oliveirinha's",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Fralda Higiênica Decartável", "Especificação": "Porte pequeno" },
    "Validade": "2025/07/18 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 83756,
    "Nome_Produto": "Fralda Higiênica",
    "Marca_Produto": "Oliveirinha's",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Fralda Higiênica Decartável", "Especificação": "Porte grande" },
    "Validade": "2026/10/22 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 35249,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Oliveirinha's",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável" },
    "Validade": "2028/09/05 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 68941,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Goog Ped",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "60x60" },
    "Validade": "2026/04/14 00:00:00",
    "Animal": "Cachorro"
  },
{
    "ID_Produto": 27658,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Animaiszinho's",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "50x56" },
    "Validade": "2028/03/15 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51429,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Animaiszinho's",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "45x50" },
    "Validade": "2024/02/20 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 94057,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Animaiszinho's",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "80x70" },
    "Validade": "2025/11/09 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 73468,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "65x71" },
    "Validade": "2026/12/01 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 67193,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "80x72" },
    "Validade": "2028/08/25 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 12486,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "54x64" },
    "Validade": "2026/05/11 00:00:00",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 58279,
    "Nome_Produto": "Tepete Higiênico",
    "Marca_Produto": "Ralf",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Tapete Higiênico Decartável", "Tam": "45x50" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 35867,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Excêlente",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Coleira Peitoral para Cães e Gatos material", "Tam": "M" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 49725,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Excêlente",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Coleira Peitoral para Cães e Gatos material", "Tam": "G" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 72941,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Coleira Peitoral", "Especificação": "Reajustável" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 19845,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Coleira Peitoral", "Especificação": "Porte    pequeno" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 64529,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Maxx",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Coleira Peitoral", "Especificação": "Porte grande" },
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 51743,
    "Nome_Produto": "Coleira peitoral",
    "Marca_Produto": "Doce",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Coleira Peitoral", "Especificação": "Reajustável" },
    "Animal": "Cachorro"
  },
{
    "ID_Produto": 26349,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Ortobom",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 98674,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Premium",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74298,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 42561,
    "Nome_Produto": "Cama",
    "Marca_Produto": "Confort",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91635,
    "Nome_Produto": "Cama",
    "Marca_Produto": "NuvensPet",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 57614,
    "Nome_Produto": "Cama",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 38169,
    "Nome_Produto": "Cama Ortopédica",
    "Marca_Produto": "PawComfort",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Cama Pet", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 63974,
    "Nome_Produto": "Cama Ortopédica",
    "Marca_Produto": "Ortobom",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Mini Cama", "Especificação": "Ortobom pet" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 48572,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Gravata", "Especificação": "Kit 30 sortidas" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 27864,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Gravata", "Especificação": "Personalizados" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 71458,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Luxo Azul",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Gravata", "Especificação": "Desenhos animados" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52697,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Gravata", "Especificação": "Sortidas" },
    "Animal": "Gato e cachorro"
  },
 {
    "ID_Produto": 96814,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Chapéu", "Especificação": "Lisos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 34782,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Chapéu", "Especificação": "Personalizados" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 52461,
    "Nome_Produto": "Chapéu",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Chapéu", "Especificação": "Personalizados" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 81645,
    "Nome_Produto": "Óculos",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Óculos pet" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 69418,
    "Nome_Produto": "Óculos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Óculos pet" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 23784,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Gravata", "Especificação": "Personalizados" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 58024,
    "Nome_Produto": "Gravatas",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Gravata", "Especificação": "Desenhos animados" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 19486,
    "Nome_Produto": "Comedouro Automático",
    "Marca_Produto": "SmartPaws",
    "Categoria": "Acessorios",
    "Descrição": "Comedouro permite que você programe horários de alimentação",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 82479,
    "Nome_Produto": "Bebedouro Portátil",
    "Marca_Produto": "On-the-Go Pets",
    "Categoria": "Acessorios",
    "Descrição": "Pet hidratado, perfeito para passeios e viagens.",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 45639,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "UtilizaPet",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Bebedouro e comedouro", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 96247,
    "Nome_Produto": "Bebedouro Portátil",
    "Marca_Produto": "UtilizaPet",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Bebedouro e comedouro", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 78154,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "Premiuns",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Bebedouro e comedouro", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
 {
    "ID_Produto": 31542,
    "Nome_Produto": "Bebedouro e comedouro",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Bebedouro e comedouro", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 64872,
    "Nome_Produto": "Bebedouro",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": { "Tipo": "Bebedouro", "Especificação": "Cães e Gatos" },
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 92716,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Bola Interátiva",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 37298,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Bola de pano",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 24937,
    "Nome_Produto": "Brinquedo Interativo \"Caça ao Tesouro\"",
    "Marca_Produto": "PurrfectPlay",
    "Categoria": "Acessorios",
    "Descrição": "Brinquedo que esconde petiscos e desafia as habilidades do gato.",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 54371,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Bola petisco",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 68725,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Macaco Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 14738,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Urso Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 79436,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Pelúcia leão",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91674,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Pelúcia mordedor",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 26841,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Kit de mini pelúcias",
    "Animal": "Gato e cachorro"
  },
 {
    "ID_Produto": 35127,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": "Pelúcia Grande",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 72936,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Urso Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 58312,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessorios",
    "Descrição": "Macaco Pelúcia",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 42679,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Pelúcia Gigante",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 69728,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Pelúcia Interátiva",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 15749,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessorios",
    "Descrição": "Pelúcia Colorida",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 31845,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Mordedor",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 62574,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Ossos",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 84723,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Osso grande",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 49267,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "Doogswoo",
    "Categoria": "Acessorios",
    "Descrição": "Roedor",
    "Animal": "Rato"
  },
  {
    "ID_Produto": 76519,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessorios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 39457,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 82173,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "BrinkDoo",
    "Categoria": "Acessorios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
 {
    "ID_Produto": 57348,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "CatDom",
    "Categoria": "Acessorios",
    "Descrição": "Arranhador",
    "Animal": "Gato"
  },
  {
    "ID_Produto": 48267,
    "Nome_Produto": "Brinquedos",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": "Brinquedo retrátil",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 36951,
    "Nome_Produto": "Cobertor",
    "Marca_Produto": "HydroPaws",
    "Categoria": "Acessorios",
    "Descrição": "Manta para aquecer seu pet",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 91563,
    "Nome_Produto": "Mochila astronauta",
    "Marca_Produto": "CozyClimb",
    "Categoria": "Acessorios",
    "Descrição": "Mochila adaptada para levar seu pet",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 74251,
    "Nome_Produto": "Coleira liberação rápida",
    "Marca_Produto": "PetJetsetter",
    "Categoria": "Acessorios",
    "Descrição": "Coleira de liberação rápida pet",
    "Animal": "Cachorro"
  },
  {
    "ID_Produto": 53642,
    "Nome_Produto": "Almofadas",
    "Marca_Produto": "PetShows",
    "Categoria": "Acessorios",
    "Descrição": "Almofadas de alto conforto pet",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 28417,
    "Nome_Produto": "Laços premium",
    "Marca_Produto": "EstrelaPet",
    "Categoria": "Acessorios",
    "Descrição": "Laço premium personalizada",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 67024,
    "Nome_Produto": "Mamadeira",
    "Marca_Produto": "Chalesco",
    "Categoria": "Acessorios",
    "Descrição": "Mamadeira para filhotes",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 92316,
    "Nome_Produto": "Mamadeira",
    "Marca_Produto": "Chalesco",
    "Categoria": "Acessorios",
    "Descrição": "Kit Mamadeira para filhotes",
    "Animal": "Gato e cachorro"
  },
  {
    "ID_Produto": 49178,
    "Nome_Produto": "Bolsa de Transporte",
    "Marca_Produto": "TravelPaws",
    "Categoria": "Acessorios",
    "Descrição": "Bolsa de transporte com estilo e segurança em viagens",
    "Animal": "Gato e cachorro"
  }])
  
db.produto.insertMany([
  {
    "ID_Produto": 85697,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Pipicat",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2026/02/26 00:00:00"
  },
  {
    "ID_Produto": 24796,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Biocat",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2026/10/09 00:00:00"
  },
  {
    "ID_Produto": 39281,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Florax",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2025/08/22 00:00:00"
  },
  {
    "ID_Produto": 72958,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Clean Pet",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2026/05/16 00:00:00"
  },
  {
    "ID_Produto": 51324,
    "Nome_Produto": "Areia",
    "Marca_Produto": "PetShows",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2027/12/27 00:00:00"
  },
  {
    "ID_Produto": 76892,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Viva",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2025/02/01 00:00:00"
  },
  {
    "ID_Produto": 18437,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Viva",
    "Categoria": "Cuidado Pet",
    "Descrição": "Areia Higiênica para Gatos",
    "Validade": "2026/01/06 00:00:00"
  },
  {
    "ID_Produto": 64235,
    "Nome_Produto": "Areia",
    "Marca_Produto": "Petz",
    "Categoria": "Cuidado Pet",
    "Descrição": "Pó para banho seco",
    "Especificação": "gatos",
    "Validade": "2026/04/13 00:00:00"
  },
  {
    "ID_Produto": 97518,
    "Nome_Produto": "Banho a seco",
    "Marca_Produto": "Petz",
    "Categoria": "Cuidado Pet",
    "Descrição": "Pó para banho seco",
    "Especificação": "cachorros",
    "Validade": "2026/07/18 00:00:00"
  },
  {
    "ID_Produto": 37651,
    "Nome_Produto": "Banho a seco",
    "Marca_Produto": "Petz",
    "Categoria": "Cuidado Pet",
    "Descrição": "Pó para banho seco",
    "Especificação": "hamster",
    "Validade": "2026/11/02 00:00:00"
  },
  {
    "ID_Produto": 92846,
    "Nome_Produto": "Banho a seco",
    "Marca_Produto": "Petz",
    "Categoria": "Cuidado Pet",
    "Descrição": "Pente para pelos",
    "Validade": "2026/06/27 00:00:00"
  },
  {
    "ID_Produto": 24735,
    "Nome_Produto": "Pente",
    "Marca_Produto": "HomePet",
    "Categoria": "Cuidado Pet",
    "Descrição": "Escova bucal",
    "Validade": "2026/01/11 00:00:00"
  },
  {
    "ID_Produto": 58374,
    "Nome_Produto": "Escovas",
    "Marca_Produto": "HomePet",
    "Categoria": "Cuidado Pet",
    "Descrição": "Escova desembaraçadora mantém o pelo do pet sem nós e brilhante.",
    "Validade": "2026/04/08 00:00:00"
  },
  {
    "ID_Produto": 41968,
    "Nome_Produto": "Escova Desembaraçadora",
    "Marca_Produto": "GroomMaster",
    "Categoria": "Cuidado Pet",
    "Descrição": "Escova bucal",
    "Validade": "2026/07/03 00:00:00"
  },
  {
    "ID_Produto": 74621,
    "Nome_Produto": "Escovas",
    "Marca_Produto": "PetShows",
    "Categoria": "Cuidado Pet",
    "Descrição": "Luva tira pelos dos pets",
    "Validade": "2026/03/09 00:00:00"
  },
  {
    "ID_Produto": 61524,
    "Nome_Produto": "Luva tira pelos",
    "Marca_Produto": "PetShows",
    "Categoria": "Cuidado Pet",
    "Descrição": "Luva tira pelos dos pets",
    "Validade": "2026/02/10 00:00:00"
  },
  {
    "ID_Produto": 35872,
    "Nome_Produto": "Luva tira pelos",
    "Marca_Produto": "CatDom",
    "Categoria": "Cuidado Pet",
    "Descrição": "Coletor de fezes na areia",
    "Validade": "2027/08/25 00:00:00"
  },
  {
    "ID_Produto": 98735,
    "Nome_Produto": "Coletor de fezes",
    "Marca_Produto": "Petz",
    "Categoria": "Cuidado Pet",
    "Descrição": "Coletor de fezes na areia",
    "Validade": "2026/11/22 00:00:00"
  },
  {
    "ID_Produto": 42357,
    "Nome_Produto": "Coletor de fezes",
    "Marca_Produto": "HomePet",
    "Categoria": "Cuidado Pet",
    "Descrição": "Higiênizador bucal",
    "Validade": "2026/12/20 00:00:00"
  },
  {
    "ID_Produto": 42357,
    "Nome_Produto": "Coletor de fezes",
    "Marca_Produto": "HomePet",
    "Categoria": "Cuidado Pet",
    "Descrição": "Higiênizador bucal",
    "Validade": "2027/09/15 00:00:00"
  }
])

db.produto.insertMany([
  {
    "ID_Produto": 57436,
    "Nome_Produto": "Periquito",
    "Marca_Produto": "Aves",
    "Categoria": "Animais",
    "Descrição": "Aves"
  },
  {
    "ID_Produto": 73968,
    "Nome_Produto": "Calopsita",
    "Marca_Produto": "Aves",
    "Categoria": "Animais",
    "Descrição": "Aves"
  },
  {
    "ID_Produto": 28495,
    "Nome_Produto": "Canário",
    "Marca_Produto": "Aves",
    "Categoria": "Animais",
    "Descrição": "Aves"
  },
  {
    "ID_Produto": 20293,
    "Nome_Produto": "Diamante de Gould",
    "Marca_Produto": "Aves",
    "Categoria": "Animais",
    "Descrição": "Aves"
  },
  {
    "ID_Produto": 93849,
    "Nome_Produto": "Shih-Tzu",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 94874,
    "Nome_Produto": "Buldogue Francês",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 84748,
    "Nome_Produto": "Spitz Alemão",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 90373,
    "Nome_Produto": "Yorkshire",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 24253,
    "Nome_Produto": "Poodle",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 74652,
    "Nome_Produto": "Lasha Apso",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 74769,
    "Nome_Produto": "Maltês",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 98604,
    "Nome_Produto": "Golden Retriever",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 95758,
    "Nome_Produto": "Pug",
    "Marca_Produto": "Cachorro",
    "Categoria": "Animais",
    "Descrição": "Cachorro"
  },
  {
    "ID_Produto": 93045,
    "Nome_Produto": "Siamês",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 84375,
    "Nome_Produto": "Angorá",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 58504,
    "Nome_Produto": "Persa",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 39598,
    "Nome_Produto": "Ragdoll",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 50294,
    "Nome_Produto": "Ashera",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 59596,
    "Nome_Produto": "America Shorthair",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 37375,
    "Nome_Produto": "Exótico",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 85959,
    "Nome_Produto": "Maine Coon",
    "Marca_Produto": "Gato",
    "Categoria": "Animais",
    "Descrição": "Gato"
  },
  {
    "ID_Produto": 39990,
    "Nome_Produto": "Colisa",
    "Marca_Produto": "Peixe",
    "Categoria": "Animais",
    "Descrição": "Peixe"
  },
  {
    "ID_Produto": 95959,
    "Nome_Produto": "Treta neon",
    "Marca_Produto": "Peixe",
    "Categoria": "Animais",
    "Descrição": "Peixe"
  },
  {
    "ID_Produto": 37463,
    "Nome_Produto": "Coridora",
    "Marca_Produto": "Peixe",
    "Categoria": "Animais",
    "Descrição": "Peixe"
  },
  {
    "ID_Produto": 83723,
    "Nome_Produto": "Betta",
    "Marca_Produto": "Peixe",
    "Categoria": "Animais",
    "Descrição": "Peixe"
  },
  {
    "ID_Produto": 84743,
    "Nome_Produto": "Molinésia",
    "Marca_Produto": "Peixe",
    "Categoria": "Animais",
    "Descrição": "Peixe"
  },
  {
    "ID_Produto": 38465,
    "Nome_Produto": "Peixe arco-íris",
    "Marca_Produto": "Peixe",
    "Categoria": "Animais",
    "Descrição": "Peixe"
  },
  {
    "ID_Produto": 85793,
    "Nome_Produto": "Rex",
    "Marca_Produto": "Coelho",
    "Categoria": "Animais",
    "Descrição": "Coelho"
  },
  {
    "ID_Produto": 94766,
    "Nome_Produto": "Holland Lop",
    "Marca_Produto": "Coelho",
    "Categoria": "Animais",
    "Descrição": "Coelho"
  },
  {
    "ID_Produto": 30999,
    "Nome_Produto": "Cabeça de Leão",
    "Marca_Produto": "Coelho",
    "Categoria": "Animais",
    "Descrição": "Coelho"
  },
  {
    "ID_Produto": 90933,
    "Nome_Produto": "Califórnia",
    "Marca_Produto": "Coelho",
    "Categoria": "Animais",
    "Descrição": "Coelho"
  },
  {
    "ID_Produto": 80001,
    "Nome_Produto": "Angorá",
    "Marca_Produto": "Coelho",
    "Categoria": "Animais",
    "Descrição": "Coelho"
  },
  {
    "ID_Produto": 10001,
    "Nome_Produto": "Anões Russos e Sírios",
    "Marca_Produto": "Hamster",
    "Categoria": "Animais",
    "Descrição": "Hamster"
  },
  {
    "ID_Produto": 39111,
    "Nome_Produto": "Olhos rosas",
    "Marca_Produto": "Twister",
    "Categoria": "Animais",
    "Descrição": "Twister"
  },
  {
    "ID_Produto": 30044,
    "Nome_Produto": "Olhos vermelhos",
    "Marca_Produto": "Twister",
    "Categoria": "Animais",
    "Descrição": "Twister"
  },
  {
    "ID_Produto": 30087,
    "Nome_Produto": "Doble Rex",
    "Marca_Produto": "Twister",
    "Categoria": "Animais",
    "Descrição": "Twister"
  },
  {
    "ID_Produto": 35352,
    "Nome_Produto": "Peruano",
    "Marca_Produto": "Porquinho da Índia",
    "Categoria": "Animais",
    "Descrição": "Porquinho da Índia"
  },
  {
    "ID_Produto": 84020,
    "Nome_Produto": "Inglês",
    "Marca_Produto": "Porquinho da Índia",
    "Categoria": "Animais",
    "Descrição": "Porquinho da Índia"
  },
  {
    "ID_Produto": 83032,
    "Nome_Produto": "Sheltie",
    "Marca_Produto": "Porquinho da Índia",
    "Categoria": "Animais",
    "Descrição": "Porquinho da Índia"
  },
  {
    "ID_Produto": 11039,
    "Nome_Produto": "Coroado",
    "Marca_Produto": "Porquinho da Índia",
    "Categoria": "Animais",
    "Descrição": "Porquinho da Índia"
  },
  {
    "ID_Produto": 11304,
    "Nome_Produto": "Tartaruga pintada",
    "Marca_Produto": "Tartarugas",
    "Categoria": "Animais",
    "Descrição": "Tartarugas"
  },
  {
    "ID_Produto": 19384,
    "Nome_Produto": "Tartaruga-da-madeira",
    "Marca_Produto": "Tartarugas",
    "Categoria": "Animais",
    "Descrição": "Tartarugas"
  },
  {
    "ID_Produto": 13849,
    "Nome_Produto": "Tartaruga-russa",
    "Marca_Produto": "Tartarugas",
    "Categoria": "Animais",
    "Descrição": "Tartarugas"
  },
  {
    "ID_Produto": 87872,
    "Nome_Produto": "Tartaruga-tigre-d'água",
    "Marca_Produto": "Tartarugas",
    "Categoria": "Animais",
    "Descrição": "Tartarugas"
  }
])

db.produto.find().pretty()

db.pedido.insertMany([
  {
    "ID_Cliente": "482937",
    "Produtos": {P1: "85793", P2: "94766", P3: "30999"},
    "Carrinho": {
      "id_carrinho": "3-AZ42",
      "quantidade_produtos": "3"
    },
    "ID_Pedido": "12-3456",
    "Data_Pedido": new Date("2023/08/07 11:09:55"),
    "Valor_pedido": "96.88",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "675412",
    "Produtos": {P1: "58504"},
    "Carrinho": {
      "id_carrinho": "7-RK56",
      "quantidade_produtos": "1"
    },
    "ID_Pedido": "45-6789",
    "Data_Pedido": new Date("2023/08/07 14:33:00"),
    "Valor_pedido": "23.00",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "746203",
    "Produtos": {P1: "83032", P2: "11039"},
    "Carrinho": {
      "id_carrinho": "8-HY12",
      "quantidade_produtos": "2"
    },
    "ID_Pedido": "56-7890",
    "Data_Pedido": new Date("2023/08/07 09:21:16"),
    "Valor_pedido": "86.09",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "964057",
    "Produtos": {P1: "10001", P2: "39111"},
    "Carrinho": {
      "id_carrinho": "9-PL67",
      "quantidade_produtos": "2"
    },
    "ID_Pedido": "34-5678",
    "Data_Pedido": new Date("2023/08/07 12:44:12"),
    "Valor_pedido": "65.98",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "Entregue"
  },
{
    "ID_Cliente": "687210",
    "Produtos": {P1: "37463"},
    "Carrinho": {
      "id_carrinho": "4-CM89",
      "quantidade_produtos": "1"
    },
    "ID_Pedido": "01-2345",
    "Data_Pedido": new Date("2023/08/08 08:10:00"),
    "Valor_pedido": "15.98",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "761204",
    "Produtos": {P1: "37375"},
    "Carrinho": {
      "id_carrinho": "2-GH45",
      "quantidade_produtos": "1"
    },
    "ID_Pedido": "21-0987",
    "Data_Pedido": new Date("2023/08/08 11:32:44"),
    "Valor_pedido": "34.88",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Cliente": "983547",
    "Produtos": {P1: "58504", P2: "39598"},
    "Carrinho": {
      "id_carrinho": "8-LT23",
      "quantidade_produtos": "2"
    },
    "ID_Pedido": "54-3210",
    "Data_Pedido": new Date("2023/08/08 08:30:33"),
    "Valor_pedido": "57.09",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Cliente": "539812",
    "Produtos": {P1: "90373"},
    "Carrinho": {
      "id_carrinho": "3-FK68",
      "quantidade_produtos": "1"
    },
    "ID_Pedido": "32-1098",
    "Data_Pedido": new Date("2023/08/09 15:00:00"),
    "Valor_pedido": "12.54",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "Entregue"
  },
{
    "ID_Cliente": "621984",
    "Produtos": {P1: "48517", P2: "97413", P3: "35826"},
    "Carrinho": {
      "id_carrinho": "6-JP69",
      "quantidade_produtos": "3"
    },
    "ID_Pedido": "43-2109",
    "Data_Pedido": new Date("2023/08/09 14:20:40"),
    "Valor_pedido": "76.09",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "176245",
    "Produtos": {P1: "35026", P2: "69741"},
    "Carrinho": {
      "id_carrinho": "1-ZE37",
      "quantidade_produtos": "2"
    },
    "ID_Pedido": "09-8765",
    "Data_Pedido": new Date("2023/08/10 09:00:00"),
    "Valor_pedido": "46.00",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "912674",
    "Produtos": {P1: "71458", P2: "52697", P3: "96814", P4: "34782"},
    "Carrinho": {
      "id_carrinho": "3-OX28",
      "quantidade_produtos": "4"
    },  
    "ID_Pedido": "32-1098",
    "Data_Pedido": new Date("2023/08/11 18:00:00"),
    "Valor_pedido": "54.76",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "Entregue"
  },
{
    "ID_Cliente": "568423",
    "Produtos": {P1: "96247"},
    "Carrinho": {
      "id_carrinho": "7-CT61",
      "quantidade_produtos": "1"
    },
    "ID_Pedido": "76-5432",
    "Data_Pedido": new Date("2023/08/11 11:00:00"),
    "Valor_pedido": "87.09",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Cliente": "359148",
    "Produtos": {P1: "68495", P2: "21579", P3: "31784", P4: "57294"},
    "Carrinho": {
      "id_carrinho": "2-PL95",
      "quantidade_produtos": "4"
    },
    "ID_Pedido": "54-3210",
    "Data_Pedido": new Date("2023/08/11 14:00:00"),
    "Valor_pedido": "77.99",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Cliente": "142978",
    "Produtos": {P1: "46928", P2: "35817", P3: "78234", P4: "24691"},
    "Carrinho": {
      "id_carrinho": "5-WR17",
      "quantidade_produtos": "4"
    },
    "ID_Pedido": "23-4567",
    "Data_Pedido": new Date("2023/08/12 22:00:00"),
    "Valor_pedido": "55.98",
    "Forma_pagamento": "Cartão Crédito",
    "Status_pedido": "A caminho"
},
{
    "ID_Cliente": "690234",
    "Produtos": {P1: "49528", P2: "83714"},
    "Carrinho": {
      "id_carrinho": "4-VE86",
      "quantidade_produtos": "2"
    },
    "ID_Pedido": "98-7654",
    "Data_Pedido":new Date("2023/08/12 17:30:00"),
    "Valor_pedido": "65.09",
    "Forma_pagamento": "Cartão Débito",
    "Status_pedido": "A caminho"
}
])

db.pedido.insertMany([
  {
    "ID_Pedido": "23-4567",
    "ID_Cliente": "139845",
    "Produto": {P1: "19384",P2: "13849", P3:"87872"},
    "Carrinho": {
      "ID_carrinho": "5-DW93",
      "quantidade_produtos": "3"
    },
    "Data_Pedido": new Date("2023/08/07 10:35:00"),
    "Valor_pedido": "122.88",
    "Forma_pagamento": "Pix",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Pedido": "67-8901",
    "ID_Cliente": "315724",
    "Produto": {P1: "83723", P2: "84743", P3: "38465"},
    "Carrinho": {
      "ID_carrinho": "6-BN25",
      "quantidade_produtos": "3"
    },
    "Data_Pedido": new Date("2023/08/08 14:20:00"),
    "Valor_pedido": "44.87",
    "Forma_pagamento": "Pix",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Pedido": "65-4321",
    "ID_Cliente": "871206",
    "Produto": {P1: "18450", P2: "59273", P3: "30946", P4: "85614", P5: "72103"},
    "Carrinho": {
      "ID_carrinho": "9-NM57",
      "quantidade_produtos": "5"
    },
    "Data_Pedido": new Date("2023/08/09 09:45:00"),
    "Valor_pedido": "65.98",
    "Forma_pagamento": "Pix",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Pedido": "76-5432",
    "ID_Cliente": "437896",
    "Produto": {P1: "73982"},
    "Carrinho": {
      "ID_carrinho": "4-YQ83",
      "quantidade_produtos": "1"
    },
    "Data_Pedido": new Date("2023/08/10 17:10:00"),
    "Valor_pedido": "43.87",
    "Forma_pagamento": "Pix",
    "Status_pedido": "Entregue"
  },
{
    "ID_Pedido": "12-3456",
    "ID_Cliente": "694801",
    "Produto": {P1: "62489"},
    "Carrinho": {
      "ID_carrinho": "0-UD72",
      "quantidade_produtos": "1"
    },
    "Data_Pedido": new Date("2023/08/10 12:15:00"),
    "Valor_pedido": "10.43",
    "Forma_pagamento": "Pix",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Pedido": "12-3456",
    "ID_Cliente": "827465",
    "Produto": {P1: "92316", P2: "49178", P3: "68495"},
    "Carrinho": {
      "ID_carrinho": "1-TM74",
      "quantidade_produtos": "3"
    },
    "Data_Pedido":new Date("2023/08/12 19:30:00"),
    "Valor_pedido": "65.88",
    "Forma_pagamento": "Pix",
    "Status_pedido": "Entregue"
  },
  {
    "ID_Pedido": "56-7890",
    "ID_Cliente": "583109",
    "Produto": {P1: "84748"},
    "Carrinho": {
      "ID_carrinho": "6-HZ32",
      "quantidade_produtos": "1"
    },
    "Data_Pedido": new Date("2023/08/12 16:25:00"),
    "Valor_pedido": "21.88",
    "Forma_pagamento": "Pix",
    "Status_pedido": "Entregue"
  }])

db.pedido.insertMany([
  {
    "ID_Pedido": "78-9012",
    "ID_Cliente": "823649",
    "Produtos": {P1: "93045", P2: "84375"},
    "carrinho": {
      "id_carrinho": "1-QT78",
      "quantidade_produtos": "2"
    },
    "Data_Pedido": new Date("2023/08/07  09:25:47"),
    "Valor_Pedido": "23.76",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Pedido": "89-0123",
    "ID_Cliente": "520198",
    "Produtos": {P1: "30044"},
    "carrinho": {
      "id_carrinho": "2-JU34",
      "quantidade_produtos": "1"
    },
    "Data_Pedido": new Date("2023/08/07 11:38:15"),
    "Valor_Pedido": "34.87",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Pedido": "98-7654",
    "ID_Cliente": "254398",
    "Produtos": {P1: "95959"},
    "carrinho": {
      "id_carrinho": "0-VO76",
      "quantidade_produtos": "1"
    },
    "Data_Pedido": new Date("2023/08/08 15:10:32"),
    "Valor_Pedido": "48.98",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Pedido": "87-6543",
    "ID_Cliente": "426185",
    "Produtos": {P1: "24253", P2: "74652", P3: "74769", P4: "98604"},
    "carrinho": {
      "id_carrinho": "7-XW91",
      "quantidade_produtos": "4"
    },
    "Data_Pedido": new Date("2023/08/09 10:45:59"),
    "Valor_Pedido": "87",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "Entrega"
  },
  {
    "ID_Pedido": "98-7654",
    "ID_Cliente": "395846",
    "Produtos": {P1: "59732", P2: "30478", P3: "86429"},
    "carrinho": {
      "id_carrinho": "5-RV14",
      "quantidade_produtos": "3"
    },
    "Data_Pedido": new Date("2023/08/09 13:20:21"),
    "Valor_Pedido": "76.98",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "Entrega"
  },
{
    "ID_Pedido": "67-8901",
    "ID_Cliente": "281654",
    "Produtos": {P1: "51748", P2: "74265", P3: "95081"},
    "carrinho": {
      "id_carrinho": "8-KB49",
      "quantidade_produtos": "3"
    },
    "Data_Pedido": new Date("2023/08/10 17:55:10"),
    "Valor_Pedido": "34.76",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "Entrega"
  },
  {
    "ID_Pedido": "89-0123",
    "ID_Cliente": "748102",
    "Produtos": {P1: "29754"},
    "carrinho": {
      "id_carrinho": "9-GF53",
      "quantidade_produtos": "1"
    },
    "Data_Pedido": new Date ("2023/08/11 12:12:05"),
    "Valor_Pedido": "32.65",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "A caminho"
  },
  {
    "ID_Pedido": "34-5678",
    "ID_Cliente": "257468",
    "Produtos": {P1: "98735", P2: "42357", P3: "86234", P4: "57436", P5: "73968", P6: "28495", P7: "20293"},
    "carrinho": {
      "id_carrinho": "0-QN79",
      "quantidade_produtos": "7"
    },
    "Data_Pedido":new Date("2023/08/12 16:42:30"),
    "Valor_Pedido": "108.45",
    "Forma_pagamento": "Dinheiro",
    "Status_pedido": "A caminho"
  }])


  
db.pedido.update
db.pedido.find().pretty()

db.transportadora.insertMany([
  {
    "ID_Transportadora": "T-8809234",
    "ID_pedido": "12-3456",
    "ID_Cliente": "482937",
    "Código_de_rastreio": "TRK123456789",
    "Status": "Entregue"
  },
  {
    "ID_Transportadora": "S-4879388",
    "ID_pedido": "45-6789",
    "ID_Cliente": "675412",
    "Código_de_rastreio": "SHP987654321",
    "Status": "Entregue"
  },
  {
    "ID_Transportadora": "L-3324512",
    "ID_pedido": "78-9012",
    "ID_Cliente": "823649",
    "Código_de_rastreio": "LGR555666777",
    "Status": "Entregue"
  },
  {
    "ID_Transportadora": "O-8756445",
    "ID_pedido": "23-4567",
    "ID_Cliente": "139845",
    "Código_de_rastreio": "PKG444555666",
    "Status": "Entregue"
  },
  {
    "ID_Transportadora": "P-5563278",
    "ID_pedido": "56-7890",
    "ID_Cliente": "746203",
    "Código_de_rastreio": "ORD777888999",
    "Status": "Entregue"
  },
  {
    "ID_Transportadora": "T-3298709",
    "ID_pedido": "89-0123",
    "ID_Cliente": "520198",
    "Código_de_rastreio": "SHP222333444",
    "Status": "A caminho"
  },
  {
    "ID_Transportadora": "S-2347788",
    "ID_pedido": "34-5678",
    "ID_Cliente": "964057",
    "Código_de_rastreio": "PKG111222333",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "L-9800787",
    "ID_pedido": "67-8901",
    "ID_Cliente": "315724",
    "Código_de_rastreio": "TRK555444333",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "O-2345333",
    "ID_pedido": "01-2345",
    "ID_Cliente": "687210",
    "Código_de_rastreio": "LGR123123123",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "P-2573450",
    "ID_pedido": "98-7654",
    "ID_Cliente": "254398",
    "Código_de_rastreio": "ORD999888777",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "T-8809234",
    "ID_pedido": "21-0987",
    "ID_Cliente": "761204",
    "Código_de_rastreio": "SHP666777888",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "S-4879388",
    "ID_pedido": "54-3210",
    "ID_Cliente": "983547",
    "Código_de_rastreio": "PKG333444555",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "L-3324512",
    "ID_pedido": "87-6543",
    "ID_Cliente": "426185",
    "Código_de_rastreio": "LGR111222333",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "O-8756445",
    "ID_pedido": "32-1098",
    "ID_Cliente": "539812",
    "Código_de_rastreio": "TRK444555666",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "P-5563278",
    "ID_pedido": "65-4321",
    "ID_Cliente": "871206",
    "Código_de_rastreio": "TRK777888999",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "T-3298709",
    "ID_pedido": "98-7654",
    "ID_Cliente": "395846",
    "Código_de_rastreio": "ORD111222333",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "S-2347788",
    "ID_pedido": "43-2109",
    "ID_Cliente": "621984",
    "Código_de_rastreio": "SHP123456789",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "L-9800787",
    "ID_pedido": "76-5432",
    "ID_Cliente": "437896",
    "Código_de_rastreio": "PKG777888999",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "O-2345333",
    "ID_pedido": "09-8765",
    "ID_Cliente": "176245",
    "Código_de_rastreio": "PKG123456789",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "P-2573450",
    "ID_pedido": "12-3456",
    "ID_Cliente": "694801",
    "Código_de_rastreio": "SHP555666777",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "T-8809234",
    "ID_pedido": "67-8901",
    "ID_Cliente": "281654",
    "Código_de_rastreio": "LGR777888999",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "S-4879388",
    "ID_pedido": "32-1098",
    "ID_Cliente": "912674",
    "Código_de_rastreio": "ORD444555666",
"Status": "Entregue"
  },
  {
    "ID_Transportadora": "L-3324512",
    "ID_pedido": "76-5432",
    "ID_Cliente": "568423",
    "Código_de_rastreio": "PKG222333444",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "O-8756445",
    "ID_pedido": "54-3210",
    "ID_Cliente": "359148",
    "Código_de_rastreio": "LGR444555666",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "P-5563278",
    "ID_pedido": "89-0123",
    "ID_Cliente": "748102",
    "Código_de_rastreio": "TRK222333444",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "T-3298709",
    "ID_pedido": "23-4567",
    "ID_Cliente": "142978",
    "Código_de_rastreio": "ORD555666777",
"Status": "Entrega"
  },
  {
    "ID_Transportadora": "S-2347788",
    "ID_pedido": "98-7654",
    "ID_Cliente": "690234",
    "Código_de_rastreio": "LGR666777888",
"Status": "Entrega"
  },
  {
    "ID_Transportadora": "L-9800787",
    "ID_pedido": "12-3456",
    "ID_Cliente": "827465",
    "Código_de_rastreio": "TRK123123123",
"Status": "Entrega"
  },
  {
    "ID_Transportadora": "O-2345333",
    "ID_pedido": "56-7890",
    "ID_Cliente": "583109",
    "Código_de_rastreio": "SHP999888777",
"Status": "A caminho"
  },
  {
    "ID_Transportadora": "P-2573450",
    "ID_pedido": "34-5678",
    "ID_Cliente": "257468",
    "Código_de_rastreio": "TRK666555444",
"Status": "A caminho"
  }
])



db.transportadora.find().pretty()

db.pagamento.insertMany([
  {
    "ID_Pedido": "12-3456",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Ana Santos Silva",
      "Número_Cartão": "3528 9876 5432 1098",
      "Data_validade": "23/09",
      "Código_de_segurança": "021",
      "Número_de_parcelas": "0"
    }
  },
  {
    "ID_Pedido": "45-6789",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Pedro Oliveira Rodrigues",
      "Número_Cartão": "4929 1234 5678 9012",
      "Data_validade": "23/09",
      "Código_de_segurança": "123",
      "Número_de_parcelas": "3"
    }
  },
  {
    "ID_Pedido": "56-7890",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Maria Carvalho Martins",
      "Número_Cartão": "5450 2345 6789 1234",
      "Data_validade": "23/08",
      "Código_de_segurança": "456",
      "Número_de_parcelas": "0"
    }
  },
  {
    "ID_Pedido": "34-5678",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Inês Sousa Ferreira",
      "Número_Cartão": "4716 7890 1234 5678",
      "Data_validade": "23/03",
      "Código_de_segurança": "789",
      "Número_de_parcelas": "2"
    }
  },
{
    "ID_Pedido": "01-2345",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Beatriz Marques Barbosa",
      "Número_Cartão": "6011 3456 7890 1234",
      "Data_validade": "04/32",
      "Código_de_segurança": "234",
      "Número_de_parcelas": "3"
    }
  },
  {
    "ID_Pedido": "21-0987",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Carolina Pinto Santos",
      "Número_Cartão": "3762 9876 5432 1098",
      "Data_validade": "23/03",
      "Código_de_segurança": "567",
      "Número_de_parcelas": "0"
    }
  },
  {
    "ID_Pedido": "54-3210",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Lucas Rodrigues Cardoso",
      "Número_Cartão": "4111 8765 4321 2345",
      "Data_validade": "23/07",
      "Código_de_segurança": "890",
      "Número_de_parcelas": "1"
    }
  },
  {
    "ID_Pedido": "32-1098",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Miguel Ferreira Pereira",
      "Número_Cartão": "5100 9876 5432 1098",
      "Data_validade": "23/05",
      "Código_de_segurança": "345",
      "Número_de_parcelas": "3"
    }
  },
{
    "ID_Pedido": "43-2109",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Clara Gonçalves Costa",
      "Número_Cartão": "3528 2345 6789 9012",
      "Data_validade": "02/29",
      "Código_de_segurança": "678",
      "Número_de_parcelas": "0"
    }
  },
  {
    "ID_Pedido": "09-8765",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Sofia Pereira Silva",
      "Número_Cartão": "4917 3456 7890 1234",
      "Data_validade": "23/01",
      "Código_de_segurança": "901",
      "Número_de_parcelas": "0"
    }
  },
  {
    "ID_Pedido": "32-1098",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Gustavo Martins Alves",
      "Número_Cartão": "6010 8765 4321 2345",
      "Data_validade": "08/32",
      "Código_de_segurança": "432",
      "Número_de_parcelas": "0"
    }
  },
{
    "ID_Pedido": "76-5432",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Catarina Sousa Santos",
      "Número_Cartão": "4567 2345 6789 9010",
      "Data_validade": "23/10",
      "Código_de_segurança": "765",
      "Número_de_parcelas": "2"
    }
  },
  {
    "ID_Pedido": "54-3210",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Luís Fernandes Costa",
      "Número_Cartão": "3721 3456 7890 1234",
      "Data_validade": "23/11",
      "Código_de_segurança": "098",
      "Número_de_parcelas": "0"
    }
  },
  {
    "ID_Pedido": "23-4567",
    "Pagamento": {
      "Forma_pagamento": "Cartão Crédito",
      "Nome_do_titular": "Gabriel Almeida Sousa",
      "Número_Cartão": "5500 8765 4321 2345",
      "Data_validade": "23/12",
      "Código_de_segurança": "321",
      "Número_de_parcelas": "2"
    }},
{
    "ID_Pedido": "98-7654",
    "Pagamento": {
      "Forma_pagamento": "Cartão Débito",
      "Nome_do_titular": "Leonor Martins Rodrigues",
      "Número_Cartão": "6012 2345 6789 9012",
      "Data_validade": "01/33",
      "Código_de_segurança": "654",
      "Número_de_parcelas": "0"
    }}
])

db.pagamento.insertMany([
  {
    "ID_Pedido": "23-4567",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "A8R4K9P2X7T3W5Z1Y0I6O4U8M9N3Q7L2"
    }
  },
  {
    "ID_Pedido": "67-8901",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "C2B5E8H4G1D3F9J7L2K0M6N4P6O5I1U8"
    }
  },
  {
    "ID_Pedido": "65-4321",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "P9X2T8O7R4U3Q7N6M5L2I1K0J5H9G6F4"
    }
  },
  {
    "ID_Pedido": "76-5432",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "I0M1N2O3U4Y5T6R7W8Q9P0L1K2J3H4G5"
    }
  },
{
    "ID_Pedido": "12-3456",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "H6F7J8D9G0K1L2N3M4O5P6Q7R8T9U0I1"
    }
  },
  {
    "ID_Pedido": "12-3456",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "R2I3N4P5L6K7J8H9M0T1O2U3Q4W5Y6X7"
    }
  },
  {
    "ID_Pedido": "56-7890",
    "Pagamento": {
      "Forma_pagamento": "Pix",
      "QRCode": "W8E9Q0U1I2Y3O4P5G6H7J8K9L0M1N2R3"
    }},
  {
    "ID_Pedido": "78-9012",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "123456789012",
      "Data_Vencimento_Boleto": new Date("2023/08/10 23:59:00")
    }
  },
  {
    "ID_Pedido": "89-0123",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "987654321098",
      "Data_Vencimento_Boleto": new Date("2023/08/10 23:59:00")
    }
  },
  {
    "ID_Pedido": "98-7654",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "543210987654",
      "Data_Vencimento_Boleto": new Date ("2023/08/11 23:59:00")
    }
  },
  {
    "ID_Pedido": "87-6543",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "111222333444",
      "Data_Vencimento_Boleto": new Date("2023/08/12 23:59:00")
    }
  },
  {
    "ID_Pedido": "98-7654",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "999000111222",
      "Data_Vencimento_Boleto": new Date("2023/08/12 23:59:00")
    }
  },
{
    "ID_Pedido": "67-8901",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "777888999000",
      "Data_Vencimento_Boleto": new Date("2023/08/13 23:59:00")
    }
  },
  {
    "ID_Pedido": "89-0123",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "555666777888",
      "Data_Vencimento_Boleto": new Date("2023/08/14 23:59:00")
    }
  },
  {
    "ID_Pedido": "34-5678",
    "Pagamento": {
      "Forma_pagamento": "Dinheiro",
      "Código_de_Barras": "888777666555",
      "Data_Vencimento_Boleto": new Date("2023/08/15 23:59:00")
    }
  }]
  )
db.pagamento.find().pretty()

//Relacionando as coleções:

//cliente com pedido:    CERTO

db.cliente.aggregate([
  {
    $lookup: {
      from: "pedido",
      localField: "ID_Pedido",
      foreignField: "ID_Pedido",
      as: "Pedido"
    }
  },
  {
    $project: {
      "ID_Cliente": 1,
      "nome": 1,
      "CEP": 1,
      "CPF": 1,
      "E-mail": 1,
      "telefone": 1,
      "ID_Pedido": 1,
      "Pedido": {
        $arrayElemAt: ["$Pedido", 0]
      }
    }
  }
])

//pedido com pagamento:    CERTO

///Cartão///
db.pedido.aggregate([
{$match: {"Forma_pagamento": { $in: ["Cartão Débito", "Cartão Crédito"] }}}
{$lookup: {
      from: "pagamento",
      localField: "ID_Pedido",
      foreignField: "ID_Pedido",
      as: "Pagamento"
    }
  },
  {
    $project: {
      "ID_Cliente": 1,
      "Produtos": 1,
      "ID_Pedido": 1,
      "Data_Pedido": 1,
      "Valor_Pedido": 1,
      "Forma_pagamento":1,
      "Pagamento": {
         $mergeObjects: { $arrayElemAt: ["$Pagamento", 0] }
      }
    }
])

///Pix///
db.pedido.aggregate([
  {$match: {"Forma_pagamento": "Pix"}},
  {$lookup: {
      from: "pagamento",
      localField: "ID_Pedido",
      foreignField: "ID_Pedido",
      as: "Pagamento",
      pipeline: [{$match: {"Pagamento.Forma_pagamento": "Pix"}}]
    }
  },
  {$project: {
      "ID_Cliente": 1,
      "Produtos": 1,
      "ID_Pedido": 1,
      "Data_Pedido": 1,
      "Valor_Pedido": 1,
      "Forma_pagamento": 1,
      "Pagamento": { $arrayElemAt: ["$Pagamento", 0] }
    }
  }
])

///Dinheiro///
db.pedido.aggregate([
{$match: {"Forma_pagamento":"Dinheiro"}}}
{$lookup: {
      from: "pagamento",
      localField: "ID_Pedido",
      foreignField: "ID_Pedido",
      as: "Pagamento"
    }
  },
  {
    $project: {
      "ID_Cliente": 1,
      "Produtos": 1,
      "ID_Pedido": 1,
      "Data_Pedido": 1,
      "Valor_Pedido": 1,
      "Forma_pagamento":1,
      "Pagamento": {
         $mergeObjects: { $arrayElemAt: ["$Pagamento", 0] }
      }
    }
])

//pedido com transportadora:   CERTO

db.pedido.aggregate([
  {$lookup: {
      from: "transportadora",
      localField: "ID_Pedido",
      foreignField: "ID_pedido",
      as: "Entrega"
    }
  },
  {$project: {
      "ID_Pedido": 1,
      "ID_Cliente": 1,
      "Produto": 1,
      "Data_Pedido": 1,
      "Valor_Pedido": 1,
      "Forma_pagamento": 1,
      "Status_pedido": 1,
      "Entrega": { $arrayElemAt: ["$Entrega", 0] }
    }
  }
])


// Consultas Gerenciais


//Relatório de pagamento  (semana)  
db.pedido.aggregate([
  {$lookup: {
      from: "pagamento",
      localField: "ID_Pedido",
      foreignField: "ID_Pedido",
      as: "pagamentos_info"
    }
  },
  {$unwind: { path: "$pagamentos_info", preserveNullAndEmptyArrays: true }},
  {$group: {
      _id: {forma_pagamento: "$pagamentos_info.Pagamento.Forma_pagamento",
            pedido_id: "$ID_Pedido"},
      total_compras: { $sum: "$Valor_Pedido" }}
  },
  {$group: {
      _id: "$_id.forma_pagamento",
      total_pedidos: { $sum: 1 },
      total_compras: { $sum: "$total_compras" }}
  },
  {$project: {
      _id: 0,
      forma_pagamento: "$_id",
      total_pedidos: 1,
      total_compras: {
        $concat: [
          "R$ ",
          { $toString: "$total_compras" }]}}}])


// Faturamento total por semana 

db.pedido.aggregate([
  {$match: {
      Data_Pedido: {
        $gte: ISODate("2023-08-07T00:00:00.000Z"), // Início do dia
        $lt: ISODate("2023-08-13T23:59:59.000Z")  // Fim do dia
      }}
  },
  {$group: {
      _id: null,
      faturamento_total: { $sum: "$Valor_Pedido" },
      total_pedidos: { $sum: 1 }
    }
  },
  {$project: {
      _id: 0,
      faturamento_total: {
        $concat: [
          "R$ ",
          { $toString: "$faturamento_total" }]
      },
      total_pedidos: 1
    }
  }])
  
//TOP3 maiores compras  
db.pedido.aggregate([
  {$lookup: {
      from: "cliente",
      localField: "ID_Cliente",
      foreignField: "ID_Cliente",
      as: "cliente_info"
    }},
  {$unwind: "$cliente_info"},
  {$group: {
      _id: "$ID_Cliente",
      nome: { $first: "$cliente_info.nome" },
      total_compras: { $sum: "$Valor_Pedido" }
    }
  },
  {$addFields: {
      total_compras_formatado: {
        $concat: ["R$ ", { $toString: "$total_compras" }]}}
  },
  {$sort: { total_compras: -1 }
  },
  {
    $limit: 3
  },
  {$project: {
      _id: 0,
      ID_Cliente: "$_id",
      total_compras: "$total_compras_formatado"
    }
  }])

//status entrega por transportadora (entregue)
db.pedido.aggregate([
  {$lookup: {
      from: "transportadora",
      localField: "ID_Pedido",
      foreignField: "ID_pedido",
      as: "transportadora_info"
    }
  },
  {$project: {
      _id: 0,
      ID_Pedido: 1,
      Status_pedido: 1
    }
  },
  {$match: {
      Status_pedido: "Entregue"
    }
  }])

//status entrega por transportadora (A caminho)

db.pedido.aggregate([
  {$lookup: {
      from: "transportadora",
      localField: "ID_Pedido",
      foreignField: "ID_pedido",
      as: "transportadora_info"
    }
  },
  {$project: {
      _id: 0,
      ID_Pedido: 1,
      Status_pedido: 1
    }
  },
  {$match: {
      Status_pedido: "A caminho"
    }
  }])

