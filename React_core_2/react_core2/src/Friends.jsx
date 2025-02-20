import { useEffect, useState } from "react"
import Friends_compo from "./Friends_compo";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Friends: {friends.length}</h1>
        {
            friends.map( friend => <Friends_compo friend={friend}></Friends_compo>)
        }
        </div>
    )
}