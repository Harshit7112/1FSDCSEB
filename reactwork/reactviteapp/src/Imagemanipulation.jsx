import React, { useState } from 'react'
import cat from './cat.jpg';


function Imagemanipulation(){
    const[height,setHeight]=useState(100);
    const[width,setWidth]=useState(100);
    const[rotateimg,setRotate]=useState(30);
    const[red,setRed]=useState()
    const[green,setGreen]=useState()
    const[blue,setBlue]=useState()


    function EnhanceHeight(){
        setHeight(height+30);
    }
    function EnhanceWidth(){
        setWidth(width+30);
    }
    function Rotateimg(){
        setRotate(rotateimg+30);
    }
    function setColor()
    {
        setRed(Math.random()*255);
        setBlue(Math.random()*255);

        setGreen(Math.random()*255);

    }
    return(
       <div style={{border:'2px solid red', height:'300px',width:'400px',marginLeft:'250px',backgroundColor:'#ff9999'}}>
        <div style={{backgroundColor:`rgb(${red},${green},${blue})`, marginLeft:'100px',marginTop:'20px',border:"1px solid black",height:'200px',width:'200px'}}>
<img src={cat} style={{transform:`rotate(${rotateimg}deg)`}} height={height} width={width}   alt='cat image'/>
        </div>
        <div style={{marginTop:"100px"}}>
            <button id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
            <button id='btn' onClick={EnhanceWidth}>EnhanceWidth</button>
            <button id='btn' onClick={Rotateimg}>Rotate</button>
            <button id='btn' onClick={setColor}>ChangeBackground</button>
            </div></div>
    )
}
export default Imagemanipulation