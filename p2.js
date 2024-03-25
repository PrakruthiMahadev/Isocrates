//global declaration
// const speak = () =>{
//     console.log('Hello iSOCRATES');
// }
// speak();
console.log(global)
// Global Object
global.setTimeout(()=>{
    console.log('in the timeout');
},3000);
// const int = setInterval(()=>{
//     console.log('in the interval');
// },1000);
console.log(__dirname);
console.log(__filename);


