import { useEffect, useState } from "react"

export default function Users() {
    const [users , setUsers] = useState(0);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

    },[])
    return (
        <div>
             <h3>Users : {users.length}</h3>
            {
                users.map(user => <li>{user.name}</li>)
            }
        </div>
    )
}