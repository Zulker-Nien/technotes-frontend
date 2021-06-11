import React, { useState } from "react";
import "../App.css";
import ViewNotes from "./ViewNotes";
import AddNotes from "./AddNotes";
import Share from "./Share";
function Notepad() {
  const [view, setView] = useState(false);
  const [create, setCreate] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <div className="notepad">
      {!view && !create && !share ? (
        <>
          <div
            className="Notebtn"
            onClick={() => {
              setView(true);
            }}
          >
            <h3>View Notes</h3>
          </div>
          <div
            className="Notebtn"
            onClick={() => {
              setCreate(true);
            }}
          >
            <h3>Create Notes</h3>
          </div>
          <div
            className="Notebtn"
            onClick={() => {
              setShare(true);
            }}
          >
            <h3>Share With Friends</h3>
          </div>
        </>
      ) : view && !create && !share ? (
        <ViewNotes setView={setView} setCreate={setCreate} setShare={setShare}/>
      ) : !view && create && !share ? (
        <AddNotes setView={setView} setCreate={setCreate} setShare={setShare}/>
      ) : (
        <Share setView={setView} setCreate={setCreate} setShare={setShare}/>
      )}
    </div>
  );
}

export default Notepad;
