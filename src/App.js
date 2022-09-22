import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddForm } from "./components/AddForm";
import { Updateform } from "./components/Updateform";
import { Task } from "./components/Task";


function App() {
  const [tasks, setTasks] = useState([
    { "id": 1, "name": "Task 1", "status": false },
    { "id": 2, "name": "Task 2", "status": false },

  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');


  const addTask = (e) => {
    e.preventDefault();
    if (newTask) {
      let ind = tasks.length + 1;
      setTasks([...tasks, { id: ind, name: newTask, status: false }])
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const cancel = () => {
    setUpdateData('')
  }
  

  
  const mark = (id) => {
    setTasks(tasks.map(
      task => task.id === id ? ({ ...task, status: !task.status }) : (task)));
  }

  
  
  const changetask = (e) => {
    setUpdateData({ ...updateData, name: e.target.value });
  }
  
  
  const update = () => {
    
    const newtasks = [...tasks].filter(task => task.id !== updateData.id)
    setTasks([...newtasks, updateData]);
    setUpdateData('');
    
  }





  return (
    <div className="App">
      <div className="cont">

        <div className="header">
          <h1>To-Do list </h1>
        </div>


        {updateData && updateData ? (
          <>
            <Updateform
              updateData={updateData}
              changetask={changetask}
              update={update}
              cancel={cancel}
            />
          </>
        ) : (
          <>
            <AddForm
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />

          </>
        )}



        <div div className="todos">

          {tasks && tasks.length ? '' : <h4 className="p-5">No Tasks ...</h4>}

          <Task
            tasks={tasks}
            markDone={mark}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
          />

        </div>
      </div>


    </div >
  );
}

export default App;
