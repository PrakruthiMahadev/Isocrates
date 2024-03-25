const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=> {
    console.log(req);

    // console.log('Request raised');
    // res.write('<p>Hello Isocrates<</p>');
    // res.end();
    //Routing
    let path = './assets/';
    switch(req.url){
        case'/':
        path+='index.html';
       
        break;
        case'/about':
        path+='about.html';
        break;
        case'/aboutus':
        res.statusCode = 301;
        res.setHeader('Location','./about');
        res.end();
        path+='about.html';
        break;
        default:
            path+='404.html';
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
        res.write(data);
        res.end();
        }

    });
});
server.listen(3000,'localhost',()=>{
    console.log('Listening on port 3000');
});
