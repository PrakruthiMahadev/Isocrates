const http = require('http');
const server = http.createServer((req,res)=> {
    console.log(req);

    // console.log('Request raised');
    res.write('<p>Hello Isocrates<</p>');
    res.end();
});
server.listen(3000,'localhost',()=>{
    console.log('Listening on port 3000');
});
