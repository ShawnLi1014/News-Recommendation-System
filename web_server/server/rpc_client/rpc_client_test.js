var client = require('./rpc_client');

client.add(1, 4, (response) => {
    console.assert(response == 3);
});