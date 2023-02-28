import requests

response = requests.post('http://127.0.0.1:8000/api-token-auth/', data={'username': 'Dasha', 'password': '1qaz@WSX3edc'})
print(response.status_code) # 200
print(response.json()) # {'token': '1e4d38bf7fdae24edb2d66cf17117de3a2aa316c'}