import React from 'react';

export const Updateform = ({ updateData, changetask, update, cancel }) => {

  return (
    <div>
      <form >
        <div className="row m-4">
          <div className="col">
            <input
              value={updateData && updateData.name}
              onChange={(e) => changetask(e)}
              className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <button
              onClick={update}
              className="btn btn-lg btn-success ">update</button>
            <button 
                onClick={cancel}
                style={{marginLeft:"20px"}} className="btn btn-lg btn-primary ">cancel</button>

          </div>
        </div>
      </form>
    </div>
  );
};
