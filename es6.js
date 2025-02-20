const number = [21 ,34,56,23,45]; 
const std = {
    name : 'sakib khan ' , 
    age : 32 , 
    DOB : 21/12/1995,
    Movie : ['No One Sakib', 'Dhakar mastan'] 
} ; 

const abt = `My name is ${std.name} age of ${std.age} who born ${std.DOB} who create movie ${std.Movie[1]}` ;
console.log(abt);

// Arrow Function 
const getnum = () => 55 ; 
const addsixtyfive = num => num +65 ; 
const iseven =x => x%2 ==0 ; 
const addThree =(x,y,z)=> x+y+z ; 
const doMAth = (num1,num2) =>{
    const sum =num1 +num2 ; 
    return sum ; 
}

// Sprade Operator 

const newNumbers = number; 
const add = [...number]
const addMore = [...number,25]
number.push(99) ; 
number.push(109) ;
number.push(299) ;
console.log(newNumbers);
console.log(add);
console.log(addMore);



