import requests
import json



with open('./MOCK_DATA.json') as f:
  data = json.load(f)
  
print("hey")
print(len(data))
payload = {"name":"Andrew","email": "andrew6@gmail.com", "password": "testii" }

for user in data:
	r = requests.post('http://localhost:4000/api/user', json = user)




