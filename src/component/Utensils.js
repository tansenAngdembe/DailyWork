import React from "react";
import { useState } from "react";
import { Alert } from "./Alert";

export const Utensils = (props) => {
   const [text,textModify]  =useState("asdfasdf")
   const textChange=(event)=>{
    textModify(event.target.value)
   }
   const upperCase=()=>{
     let toUp = text.toUpperCase()
     textModify(toUp)
     alertMessage("Sucess", "Converted to uppercase.")
   }
   const lowerCase = ()=>{
    let toLow = text.toLowerCase();
    textModify(toLow)
    alertMessage("Sucess", "Converted to lowercase.")
   }
   const copyText =()=>{
    navigator.clipboard.writeText(text)  
    alertMessage("Sucess", "Text copied to clipboard.") 
   }
   const clearSpace =()=>{
    let splitText = text.split(/[ ]+/)
     let withOutSpace= splitText.join(" ")
    textModify(withOutSpace)
    alertMessage("Sucess", "Space cleared")
   }
   const clear=()=>{
    textModify("")
    alertMessage("Sucess", "Text cleared")
   }
// Alert messages 
const [alert ,setAlert] =useState(null)
const alertMessage=(type,msg)=>{
   setAlert({
    type:type,
    msg:msg
   })
   setTimeout(()=>{
    setAlert(null)
   },1000)
    
}

    return (   
     <>
     <Alert alert={alert}/>
        <div className="container" style={props.stylingMode}>
            <h2>{props.heading}</h2>
            <div className="container">
                <textarea className="form-control" value={text} onChange={textChange} placeholder="Enter your text and modify it." style={{ height: "300px" }}></textarea>
            </div>
            <div className="container mt-4  mb-3  ">
                <button  disabled={text.length===0} type="button" onClick={upperCase} className="btn btn-primary mx-2">ToUpperCase</button>
                <button  disabled={text.length===0} type="button" onClick={lowerCase} className="btn btn-primary mx-2">ToLowerCase</button>
                <button  disabled={text.length===0} type="button" onClick={copyText} className="btn btn-primary mx-2">Copy Text</button>
                <button  disabled={text.length===0} type="button" onClick={clearSpace} className="btn btn-primary mx-2">Clear Space</button>
                <button  disabled={text.length===0} type="button" onClick={clear} className="btn btn-danger mx-2">Clear</button>
            </div>
            <div className="container mt-2">
                <strong>{text.split(/\s+/).filter((ele)=>ele.length !== 0).length} words and {text.split(/\s+/).join("").length} character</strong>
            </div>

        </div> 

        </> 
    )


}