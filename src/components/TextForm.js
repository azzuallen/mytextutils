 import React, { useState } from 'react';



 
 export default function TextForm(props) {

  const handleUpClick =()=> {
    // console.log("onClick  ");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleDownClick =()=> {
    // console.log("onClick  ");
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCopy =()=> {
    // console.log("onClick  ");
    var textCopy =document.getElementById("myBox")
    textCopy.select()
    navigator.clipboard.writeText(textCopy.value)
  }

  const handleExtraSpaces =()=> {
    // console.log("onClick  ");
    let newText =text.split(/[  ]+/);
    setText(newText.join(" "))
  }

  const handleOnChnage =(event)=> {
    setText(event.target.value) ;
  }

  const [text, setText] = useState("Enter text here"); 
  // setText("derer");
   return (
    <>
       <div>
        <div className="mb-3">
            <h1>  {props.heading} </h1>
            <div className='mb-3'>

            <textarea className="form-control" value = {text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
            </div>
            <button className= "btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
            <button className= "btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className= "btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className= "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

          </div>
     </div> 
     <div className='container '>
      <h2> Your Text Summary</h2>
      <p> {text.split(" ").length} words  {text.length} characters</p>
      <p> {0.008 * text.split(" ").length}Mintes to read</p>
      <h2 >Preview</h2>
      <p>{text} </p>
     </div>
    </>
  
   )
 }
  