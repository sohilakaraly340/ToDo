import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

export const Task = ({tasks,markDone,setUpdateData,deleteTask}) => {

  return (
    <div>
      
      {tasks && tasks
      .sort ((a,b) => a.id > b.id ? 1: -1 )
       .map((task) => (
            <div key={task.id}>

              <div className=" taskbg ">

                <div className={task.status ? 'done' : ''}>

                  <span className="tasktext" onClick={(e) => markDone(task.id)} >{task.name}</span>
                </div>

                <div className="icons ">
                  <span>
                    <FontAwesomeIcon id="done"
                      onClick={(e) => markDone(task.id)}
                      className={task.status ? 'complete' : 'notcomplete'}
                      title={task.status ? 'not complete': 'complete'}
                      icon={faCircleCheck} />
                  </span>

                  {task.status ? null : (
                    <span onClick={() => setUpdateData(task)}>
                      <FontAwesomeIcon title="edit" id="edit" icon={faPen} />
                    </span>

                  )}
                  <span>
                   
                   <FontAwesomeIcon
                      onClick={() => deleteTask(task.id)}
                      title="delete"
                      id="remove" icon={faTrashCan} />
                      
                  </span>
                </div>

              </div>

            </div>
          ))}
    </div>
  )
}
