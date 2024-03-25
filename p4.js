//File system
 const fs = require('fs');
// fs.readFile('./docs/iso.txt',(err,data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// fs.writeFile('./docs/ios1.txt','Hello,again iSOCRATES',()=>{
//     console.log('file written successfully');

// // });
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',err=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder created');
// });
// }
// else{
    // console.log('folder already axists');
    // if(!fs.existsSync('./assets')){
        // fs.rmkdir('./assets',err=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log('Folder deleted');
        // });
        // }
        if(fs.existsSync("./docs/ios1.txt")){
            fs.unlink('./docs/ios1.txt',err =>{
                if(err){
                    console.log(err);
                }
                    console.log("file deleted");
                });
        };
        
        
 

 
