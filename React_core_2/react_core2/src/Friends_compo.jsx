
 export default function Friends_compo({friend}) {
    // console.log(friend);
    const {name, email} = friend;
    return (
        <div>
     
            
                <h4>Name: {name}</h4>
                <h4>Email: {email}</h4>
            
        </div>
    )
}