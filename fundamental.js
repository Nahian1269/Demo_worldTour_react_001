const father = 'Arnold' ; 
let season = 'rainy' ; 
season = ' winter ' ; 

// 6 basic Conditions <,>,===,!==,<= , >= 
//Multiple Conditions: && , ||
//Conditions 

if(father==='Arnold' || season === 'rainy' ){


}
else if (father === 'Arnold'){


}

else{


}



// Arry 
//index
const number =[99,97,23,45]; 
number[0]=32 ; 
//length
//push 
//loop

for(let i = 0 ; i<number.length; i++){

    const result = number[i] ; 
    confirm.console.log(number);
     

}

//functions

function multiply(num1 , num2){
    const result = num1 *num2 ; 
    return result ; 
}

//call 

const output = multiply(35,55); 

//object 

const student = {
    name: 'salib khan' , 
    age: 32 , 
    movies:['King khan' , 'Dhakar mastan'] 
}

//3 way to access property 

const myvar = 'age' ; 

console.log(student.age);
console.log(student['age']);
console.log(student[myvar]);


