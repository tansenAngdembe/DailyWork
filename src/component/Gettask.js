import React from "react";
import { ShowTask } from "./Showtask";

export const Gettask = ({ taskList, deleteFun }) => {
    const styling={
        backgroundImage: "linear-gradient(to right,rgb(189, 64, 85) ,rgb(67, 10, 100))",
    WebkitBackgroundClip:"text",
    WebkitTextFillColor: "transparent",
    }
    return (
        <>
            <div className="container mt-5">
                <h4 className="mb-4" style={styling}>Your daily task</h4>
                {taskList.length === 0 ? <p style={{color:"red"}}>No Item to display</p> :
                    taskList.map((item) => {
                        return (<ShowTask task={item} key={item.sn} deleteTask={deleteFun} />)
                    })
                }
            </div>

        </>

    )

}