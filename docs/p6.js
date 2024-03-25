const http = require('http');
const server = http.createServer((req,res)=> {
    console.log('Request raised');

});
server.listen(3000,'localhost',()=>{
    console.log('Listening on port 3000');
    console.log('req');


res.write('<p>Hello Isocrates<</p>');
res.end();
});