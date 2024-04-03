let counter: number = 5;
let isActive: boolean =true;

//Array
let ArrayName: string[] =['Rakesh','Manoj','Mahesh'];

//object
let person:{
    name:string;
    age:number;

};
person ={
    name:'Bipin',
    age:'5'

};
let name: string = 'suresh';
let greeting:(name:string)=> string;
greeting = function(name: string){
    console.log('Hi '+name);
    return `hi ${name}`
};
console.log(greeting("Ramesh"));
greeting("Ramesh");


