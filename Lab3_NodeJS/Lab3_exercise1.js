const dns = require('dns');
dns.resolve4('www.mum.edu', function(err, addr){
    if(err) throw err;
    console.log(addr);
})

// use Promise
var promise = new Promise(function(resolve, reject){
    dns.resolve4('www.mum.edu', function(err, addr){
        if(err) reject(err);
        else resolve(addr);
    })
})

// promise.then(addr => console.log(addr));

// use async/await
async function lookup(host) {
    console.log('ip is: ')
    await promise.then(addr => console.log(addr));
}

lookup('www.mum.edu');
