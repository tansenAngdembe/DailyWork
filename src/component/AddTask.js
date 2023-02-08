import React from "react"
import { useState } from "react"
import "./Addtask.css"

export const Addtask = (props) => {

    // this for title
    const [title, changeTitle] = useState("")
    const changeTitlecontent = (event) => {
        changeTitle(event.target.value)
    }
    // this is for textarea 
    const [text, changeTextarea] = useState("")
    const changeTextareaContent = (event) => {
        changeTextarea(event.target.value)
    }
    // creating submit 
    const Submit = (e) => {
        e.preventDefault()
        if (!title || !text) {
            alert("Fileds cannot be empty. Please enter the task")
        } else {
            changeTitle("")
            changeTextarea("")
            props.addingNewTask(title, text)

        }

    }
    return (
        <>      
            <div className="container" style={props.stylingMode}>
                <form onSubmit={Submit}>
                    <div className="container mt-2">
                        <h3 className="butt">{props.title}</h3>
                        <div className="container">
                            <label htmlFor="title" className="dt from-label butt size">Title</label><br />
                            <input className="remove form-control" value={title} name="title" placeholder="Enter your title" onChange={changeTitlecontent}>
                            </input>
                        </div>
                        <div className="container mt-2" >
                            <label htmlFor="des" className="dt from-label butt size">Task</label><br />
                            <textarea className="remove form-control" value={text} nam="des"  placeholder="Enter text" onChange={changeTextareaContent}></textarea><br/>
                            <button type="submit" className="btn butt btn-primary ">Add Task</button>
                        </div>
                    </div>
                </form>
            </div>



        </>
    )

}