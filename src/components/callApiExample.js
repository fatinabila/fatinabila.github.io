import React from 'react';


const APIExample = () =>{

  let msg ="Hi react"

  let getMsg = () => {
    alert("hey")
  }

  return (
    <div >
      <h1>Heloo</h1>

      
      <h2 onClick={()=> alert("you clicked the message!")}>{msg}</h2>

      <button onClick= {getMsg}>Hey</button>

    </div>
  )

}

export default APIExample;