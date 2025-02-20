// JSON 

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

// Js string Notation 

const stdJson = JSON.stringify(employee); 
// console.log(stdJson);
// console.log(employee);

// JSON to Js 

const empobj = JSON.parse(stdJson); 
// console.log(empobj);


// fetch

fetch('Url') 
.then(res => res.json())
.then(data => console.log(data)
); 

//keys, values 

const keys = Object.keys(employee); 
const values = Object.values(employee) ; 

// For_loop 

const numbers = [23,24,54,56,34] ; 
numbers.forEach(num => console.log(num)); // if we don't want any return we should use foreach 
numbers.map(num => num *2) ; // if we want return we should use map 

//for of on arry like object 
// loop on an object using in 

const products = [
    {name: 'leptop', price: 3200 , brand:'lenovo' , color: 'black'},
    {name: 'watch', price: 4400 , brand:'casio' , color: 'blue'},
    {name: 'camera', price: 32000 , brand:'cannon' , color: 'black'},
    {name: 'mobile', price: 52000 , brand:'Honor' , color: 'black'},
]; 

const newprod ={name:'webcam', price : 700 , brands:'lal'} ; 

// copy products array and add new products 

const newproduct = [...products, newprod] ; 

//create a new array with out mobile / specific product 

const remain = products.filter(p => p.name!=='mobile'); 

console.log(remain);
