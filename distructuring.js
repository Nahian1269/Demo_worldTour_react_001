//1. Array dist. 

const num = [42,44] ; 
const x = num [0]; 
const y = num [1];  

// new way 
const [a ,b ] = [42 ,44] ; 

const[q,w] = num ; 

function getfun(num1 , num2 ) {
    
    const nums = [num1 , num2]; 
    return nums ; 
    
}
console.log(getfun(23,24));

const student = {
    name: 'salib khan' , 
    age: 32 , 
    movies:['King khan' , 'Dhakar mastan'] 
}

const [firmov ,secmov] = student.movies

console.log(firmov);


// object distructuring 
const employee = {
    name : "Rohan", 
    ID : 323421 , 
    Device : 'mac' , 
    IP: 192.256 ,
    specifications:{
        chip: 'M4',
        Model:'Macbook Air', 
        price: 100000 , 
        
        periferals:{
            keyboad:'A4tech' , 
            Mouse  : 'Appleclick',
            Headphone: 'Airpods pro'
        }
    } 

   

}
const { IP , Device } = employee ; 
console.log(Device);

const {chip , Model} = employee.specifications;
console.log(Model);

const {Mouse ,keyboad} = employee.specifications.periferals ; 
console.log(keyboad);


