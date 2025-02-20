import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const [count, setCount] = useState(0);
  const actor = ["Bappa Raj", "Manna", "Shakib", "Salman", "Shahrukh"];
  const singer = [
    {id:1 ,  name: "Bappa Raj", age: 45 },
    {id:2 ,name: "Manna", age: 55 },
    {id:3 ,name: "Shakib", age: 35 },
    {id:4 ,name: "Salman", age: 40 },
    {id:5 ,name: "Shahrukh", age: 50 },
  ];

  return (
    <>
      {/* <Person></Person>
      //import file from another file
      <Todo task={"learn JSX"}  isdone={true}></Todo> */}

      <Actor name={"Bappa Raj"}></Actor>
      {/* using map function */}
      {actor.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Singer></Singer> */}
      
 {/* using map function-01 */}
      {/* {
        singer.map(singer => <Singer name={singer.name} age={singer.age} id={singer.id} ></Singer>)
      } */}


   {/* using map function-02 */}

   {
    singer.map( singer => <Singer singer={singer}></Singer>)
   }
    </>
  );
}

function Person() {
  const name = "sazzad";
  const age = "3 days";

  const std = {
    name: "sazzad",
    age: "21",
    job: "student",
    address: "Dhaka",
    phone: "01700000000",
    movies: ["king kong", "spider", "batman", "superman"],
    friends: ["sazzad", "sazzad", "sazzad", "sazzad"],

    device: {
      brand: "apple",
      model: "iphone 13 pro max",
      price: "$1500",
    },
  };

  return (
    <div className="person">
      <h3>HELLO WORLD</h3>
      <h4>name: {std.name}</h4>
      <p>age: {std.age}</p>
      <p>device: {std.device.model}</p>
      <p>device: {std.device.price}</p>
      <h4>movies : {std.movies[2]}</h4>
      <h4> Date : {age} </h4>
    </div>
  );
}

export default App;
