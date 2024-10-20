import json
import os
from faker import Faker
import random

# Inicializa o Faker
faker = Faker('pt_BR')  # Para gerar dados brasileiros

def gerar_dados_ficticios(qtd):
    dados = []
    for _ in range(qtd):
        pessoa = {
            "nome": faker.name(),
            "idade": random.randint(18, 80),
            "cpf": faker.cpf(),
            "endereco": faker.address().replace('\n', ', ')
        }
        dados.append(pessoa)
    current_path = os.path.dirname(os.path.realpath(__file__))
    with open(current_path + '/clients.json', 'w', encoding='utf-8') as json_file:
       json.dump(dados, json_file,indent=4, ensure_ascii=False)
    return dados

# Gerar 5 exemplos de dados fictícios
print(gerar_dados_ficticios(100))
