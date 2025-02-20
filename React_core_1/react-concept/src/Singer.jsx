// export default function Singer({name, age ,id}) {
//     return (
//         <div>
//         <h2>Singer Name : {name}</h2>
//         <h3>Age : {age}</h3>
//         <h4>id: {id}</h4>
//         </div>
//     ) 
// }

// map function-02

export default function Singer({singer}) {
    return (
        <div>
        <h2>Singer Name : {singer.name}</h2>
        <h3>Age : {singer.age}</h3>
        <h4>id: {singer.id}</h4>
        </div>
    ) 
}