import pyjsonrpc
import os
import sys
import json
from bson.json_util import dumps

sys.path.append(os.path.join(os.path.dirname(__file__), './', 'utils'))
import mongodb_client
SERVER_HOST = 'localhost'
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):

    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        """Test method"""
        print("add is called with {} and {}".format(a, b))
        return a + b

    @pyjsonrpc.rpcmethod
    def getNews(self):
        """Get news from mongodb"""
        db = mongodb_client.get_db()
        print(db)
        news = list(db['demo'].find())
        return json.loads(dumps(news))


# Threading HTTP-Server
http_server = pyjsonrpc.ThreadingHttpServer(
    server_address = (SERVER_HOST, SERVER_PORT),
    RequestHandlerClass = RequestHandler
)
print ("Starting HTTP server ...")
print ("URL: http://localhost:4040")
http_server.serve_forever()
