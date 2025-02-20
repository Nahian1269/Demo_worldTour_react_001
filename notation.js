const student = {
    name: 'salib khan' , 
    age: 32 , 
    movies:['King khan' , 'Dhakar mastan'] , 
    25 : 'summer ',
    'std-mail' : '__@gmail.com'
}

//dot notation 

const std = student.age ; 

//bracket notation 

const std2 = student["age"];

console.log(std2);

//dynamic way 

const stdinf = 'movies' ; 
const std3 = student[stdinf]; 
console.log(std3);


//if property has numaric value ; 
const season = student[25] ; 
console.log(season);

//if property has Quatations 

const take1 = student['std-mail'] ; 
console.log(take1);

