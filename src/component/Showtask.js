import React from "react";
import { useState } from "react";
import "./Addtask.css"

export const ShowTask = ({ task, deleteTask }) => {
    // This is state hook toggle button of Edit and Save
    const [edit, editChange] = useState("Edit")

    const editChanged = () => {
        if (edit === "Edit") {
            editChange("Save")
        } else {
            editChange("Edit")
        }
    }
    // this is state hook for saving the task
    const [editMode, savemode] = useState(task.dis)
    const modeHandler = (event) => {
        let disabled = true
        if (edit === "Edit") {
            return disabled
        } else {
            savemode(event.target.value)
        }
    }    
    return (
        <>

            <div className="container">                
                <div className="container">
                    <h4 className="butt">Title:{task.title}</h4>                  
                    <textarea className="remove form-control" value={editMode} onChange={modeHandler}  ></textarea>
                </div>
                <div className="container">
                    <button type="buttton" className="btn btn-danger butt" onClick={() => deleteTask(task)}>Delete</button>
                    <button type="button" className="btn btn-primary m-3 butt" onClick={editChanged}>{edit}</button>

                </div>

            </div>



        </>



    )
}