import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import { Navbar } from './component/Navbar';
import { Addtask } from './component/AddTask';
import { Gettask } from './component/Gettask';
import { Footer } from './component/Footer';
import { Utensils } from './component/Utensils';
import { About } from './component/About';

import day from "./image/day.png";
import night from "./image/night.png";



function App() {
  let task;
  // saving the task data in localstorage 
  if (localStorage.getItem("tasklist") === null) {
    task = []
  } else {
    task = JSON.parse(localStorage.getItem("tasklist"))
  }

  // Delete function
  const onDelete = (taskItem) => {
    changedTask(stateTask.filter((rem) => {
      return rem !== taskItem

    }))
  }

  // Adding task in daily work
  const addTask = (taskTitle, description) => {
    let sn;
    if (stateTask.length === 0) {
      sn = 0
    } else {
      sn = stateTask[stateTask.length - 1].sn + 1
    }
    const newTask = {
      sn: sn,
      title: taskTitle,
      dis: description
    }
    changedTask([...stateTask, newTask])

  }

  const [stateTask, changedTask] = useState(task)
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(stateTask))
  }, [stateTask])

  // Working on color
  const [initalMode, changeMode] = useState(<img src={day} style={{ width: "40px", height: "30px" }} alt='Light' />)// initlizing the color
  const modeChange = () => {
    if (initalColor.backgroundColor === "#ede8e8") {
      changeColor({
        backgroundColor: "#213835",
        color: "white"
      })
      document.body.style.backgroundColor = "rgb(30 32 32)"
      changeMode(<img src={night} alt="Dark" style={{ width: "40px", height: "30px" }} />)
    } else {
      changeColor({
        backgroundColor: "#ede8e8",
        color: "black"
      })
      document.body.style.backgroundColor = "#ede8e8"
      changeMode(<img src={day} style={{ width: "40px", height: "30px" }} alt='Light' />)
    }

  }
  const [initalColor, changeColor] = useState({
    backgroundColor: "#ede8e8",
    color: "black",
  })


  return (
    <Router>
      <Navbar defaultColor={initalMode} changedColor={modeChange} stylingMode={initalColor} />
      <Routes>
        <Route exact path='/' element={
          <>
            <Addtask title="Daily work with Utlites tools" addingNewTask={addTask} stylingMode={initalColor} />
            <Gettask taskList={stateTask} deleteFun={onDelete} />
          </>
        } />
        <Route exact path='/utensils' element={
          <>          
            <Utensils heading="Use utensils and shift to Daily work" stylingMode={initalColor}  />
          </>
        } />
        <Route exact path='/about' element={<About/>} stylingMode={initalColor}/>           

      </Routes>
      <Footer />         
    </Router>
  );
}

export default App;
