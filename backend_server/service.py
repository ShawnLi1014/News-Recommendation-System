import os
import sys
import json
from bson.json_util import dumps
from flask import Flask
from flask_jsonrpc import JSONRPC

sys.path.append(os.path.join(os.path.dirname(__file__), './', 'utils'))
import mongodb_client

# Flask application
app = Flask(__name__)

# Flask-JSONRPC
jsonrpc = JSONRPC(app, '/api', enable_web_browsable_api=True)

@jsonrpc.method('index')
def index():
	return 'Welcome to Flask JSON-RPC'


@jsonrpc.method('add')
def add(a, b):
    """Test method"""
    print("add is called with {} and {}".format(a, b))
    return a + b

@jsonrpc.method('getNews')
def getNews():
    """Get news from mongodb"""
    db = mongodb_client.get_db()
    print(db)
    news = list(db['demo'].find())
    return json.loads(dumps(news))

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
