const http = require("http");
const fs = require('fs');
const { error } = require("console");
const server = http.createServer((req,res)=> {
    console.log(req);

    fs.readFile("./asset/index.html",(error,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else
        res.write(data);
        res.end();

    });
    

    // console.log('Request raised');
    // res.write('<p>Hello Isocrates<</p>');
    // res.end();
});
server.listen(3000,'localhost',()=>{
    console.log('Listening on port 3000');
});
