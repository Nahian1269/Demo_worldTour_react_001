import { useState } from "react"

 export default function Team() {
    const [team, setTeam] = useState(11); //useState(0) is the initial value of the state variable count
    // Which is immutable or cant be changed directly
    // setCount is a function that is used to change the value of count
    const teamStyle ={
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadious: '20px'
    }
    return (
        <div style={teamStyle}>
            <h1>Team: {team}</h1>
        </div>
    )

}