localStorage.setItem('userID',87952214)
localStorage.setItem('friends',[21,22,44]) ; // it will not show as array 
//to make it array we have to use JSON stringify..lets see

localStorage.setItem('frineds', JSON.stringify([21,22,44])) ; 

// now it's show as array 


//let's try it with object 

const student = {
    name: 'salib khan' , 
    age: 32 , 
    movies:['King khan' , 'Dhakar mastan'] 
}

// now if we want value using normal local storage and set item  ? it will not show valid
// Now usng JSON.stringify and it works

localStorage.setItem('student', JSON.stringify(student));
const AddTolocal=() => {
const idInput = document.getElementById('storage-id'); 
const id = idInput.value ; 
const valueInput = document.getElementById('storage-value'); 
const value = valueInput.value ; 



// Now taking value from local storage 
const storitem = localStorage.getItem('student'); 
console.log(storitem);
// get element 

const objN = JSON.parse(storitem) ; 
console.log(objN);


// Add to local storage 
//run storage.html
if (id && value){
    localStorage.setItem(id,value)
    idInput.value = '' ; 
    valueInput.value = ''

}

}