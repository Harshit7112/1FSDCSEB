import React, { useState } from 'react'

 function UseStudentState() {
    const[count,setCount]=useState(20);
    function doIncrement(){
      console.log("hi inside increment");
      setCount(count+10);
    }
    function doDecrement(){
      console.log("hi inside increment");
      setCount(count-10);
    }
  return (
    
    <div style={{color:"red",border:"2px solid red",width:"200px",height:"400px",marginLeft:"500px",backgroundColor:"green",fontSize:"50px",paddingLeft:"150px",paddingTop:"300px"}}>{count}
    <div>
    
      <button id='btn' onClick={doIncrement} style={{backgroundColor:'blue',paddingRight:"2px"}}>Increment Counter</button>
      <button id='btn' onClick={doDecrement} style={{backgroundColor:'blue',paddingRight:"2px"}}>Increment Counter</button>

    </div>
    </div>

  )
}
export default UseStudentState
