import React from 'react';

export const AddForm = ({newTask ,setNewTask ,addTask}) => {
    return (
        <div>
           <form  onClick={addTask}>
           < div className="row m-4">
              <div className="col">
                <input placeholder='write task'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="form-control form-control-lg" />

              </div>
              <div className="col-auto">
                <button
                 
                  className="btn btn-lg btn-success mr-20">Add Task </button>

              </div>
            </div>
           </form>
            
        </div>
    );
};

