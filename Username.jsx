import React, { useState } from "react";
let Username=()=>{
    let [state,setState]=useState({
        Username:"John"
    });
    let updateInput=(event)=>{
        setState((state)=>({
            Username:event.target.value

        }))

    }
    return(
        <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <p className="h4">UserName</p>
                    </div>
                    <div className="card-body bg-light"></div>
                    <form >
                        <div className="mb-3">
                            <input 
                            value={state.Username}
                            onChange={updateInput}
                             type="text"className="form-control" />

                        </div>
                        <h3>{state.Username}</h3>
                    </form>

                </div>

            </div>

        </div>

      </div>
        </div>
    )
}
export default Username 