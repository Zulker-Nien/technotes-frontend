import { observer } from "mobx-react-lite";
import "../App.css";
// import ShareStore from "../Stores/shareStore";
import React, { useContext, useEffect, useState } from "react";
import SharedNotesTable from "./SharedNotesTable";


const Share = (props) => {
  const [people, setPeople] = useState(false);
  
  const onBacHandler = () => {
    props.setView(false);
    props.setCreate(false);
    props.setShare(false);
  };

  return (
    <div>
      <div className="bckbtn" onClick={onBacHandler}>
        <button>GLOBAL BACK</button>
      </div>
      {!people ? (
        <div>
          <div
            className="Notebtn"
            onClick={() => {
              setPeople(true);
            }}
          >
            <h3>List of Notes Shared</h3>
          </div>{" "}
        </div>
      ) : (
        <SharedNotesTable />
      )}
    </div>
  );
};

export default observer(Share);
