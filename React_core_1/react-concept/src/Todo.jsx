export default function Todo({ task, isdone }) {
  task = "learn react";
  //create conditions
  //  if (isdone===true) {
  //    task  = "learn react";
  //  } else {
  //      task = "learn nothing";
  //   }

  //conditional rendering option 2

  //   if(isdone){

  //  return <div>
  //     <h1>Todo</h1> <p>Finish: {task}</p>;  ;

  //  </div>
  // }
  // return<div>
  // <h1>Todo</h1> <p>Unfinish: {task}</p>;
  // </div>

  // General system
  //   return (
  //     <div>

  //       {/* <p>Task : {task}</p> */}
  //     </div>
  //   );

  //conditional rendering option 3_ternary operator
  
//   return (
//     <div>
//       <h1>Todo</h1>
//       {isdone ? <p>Finish: {task}</p> : <p>Unfinish: {task}</p>}
//     </div>
//   );

    //conditional rendering option 4_logical and operator
    // return (
    //     <div>
    //     <h1>Todo</h1>
    //     {isdone && <p>Finish: {task}</p>}
    //     {!isdone && <p>Unfinish: {task}</p>}
    //     </div>
    // );

    //conditional rendering option 5_switch case

    // switch (isdone) {
    //     case true:
    //       return (
    //         <div>
    //           <h1>Todo</h1>
    //           <p>Finish: {task}</p>
    //         </div>
    //       );
    //     case false:
    //       return (
    //         <div>
    //           <h1>Todo</h1>
    //           <p>Unfinish: {task}</p>
    //         </div>
    //       );
    //     default:
    //       return (
    //         <div>
    //           <h1>Todo</h1>
    //           <p>Unfinish: {task}</p>
    //         </div>
    //       );
    //   }

    



}
