const products = [
    {name: 'leptop', price: 3200 , brand:'lenovo' , color: 'black'},
    {name: 'watch', price: 4400 , brand:'casio' , color: 'blue'},
    {name: 'camera', price: 32000 , brand:'cannon' , color: 'black'},
    {name: 'mobile', price: 52000 , brand:'Honor' , color: 'black'},
]; 
//kono kisu niye arek jaygay rakha . map muloto ekta object theke jokhn kisu nite chai sera loop kore oi item sobgulo ke niye arek jaygay pathay deh 
const brands = products.map(product => product.brand );
console.log(brands);
const price = products.map(product => product.price );
console.log(price);

// For each . sob gulo ke loop korbo bt map er moto return korbo na 

products.forEach(product => console.log(product.color));

//multiline work 
products.forEach(product =>{



}); 


//Filter
const cheap = products.filter(product => product.price > 5000); 
console.log(cheap);


// Defined filter -- j name er sathe m ase ogula 

const sort = products.filter(p => p.name.includes('m')); 
console.log(sort);


// find -- mane m diye kono kisu search korle ekdom prothom letter jeta m diye start sudhu seta dekhabe 

const sort2 = products.find(p => p.name.includes('m')); 
console.log(sort2);
