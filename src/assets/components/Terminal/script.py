# a python scritp to change the value inside cat.json to finale.json

import json

# crypter function to change any letter on data to the next letter in the alphabet
def crypter(data):
    result = ''
    for d in data:
        if d.isalpha():
            if d == 'z':
                result += 'a'
            elif d == 'Z':
                result += 'A'
            else:
                result += chr(ord(d) + 1)
        else:
            result += d
    return result

with open('./cat.json', 'r') as f:
    data = json.load(f)
    for d in data['data']:
        d['name'] = crypter(d['name'])
        d['content'] = crypter(d['content'])
    with open('./finale.json', 'w') as final:
        json.dump(data, final, indent=2)
        print('finale.json created successfully')