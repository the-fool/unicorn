import os
import requests
import json


def to_msg(name, email):
    return {
        'members': [{
            'email_address': email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': name
            }
        }],
        'update_existing': True
    }


def lambda_handler(event, context):
    # TODO implement
    name = event['name']
    email = event['email']

    user = os.environ['user']
    key = os.environ['key']
    host = os.environ['host']
    api_root = os.environ['api_root']
    list_id = os.environ['list_id']

    path = api_root + list_id

    data = to_msg(name, email)

    print('Posting', data)
    url = 'https://' + host + path
    print('url', url)

    res = requests.post(url, data=json.dumps(data), auth=(user, key))

    print(res.status_code)
    print(res.text)
    print(res.json())
    print(res)
    return res.status_code
