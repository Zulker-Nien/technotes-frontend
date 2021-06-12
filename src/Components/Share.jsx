import { observer } from "mobx-react-lite";
import "../App.css";
// import ShareStore from "../Stores/shareStore";
import React, { useContext, useEffect, useState } from "react";
import SharedNotesTable from "./SharedNotesTable";
import Received from "./Received";

const Share = (props) => {
  const [people, setPeople] = useState(false);
  const [received, setReceived] = useState(false);

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
      {!people && !received ? (
        <div>
          <div
            className="Notebtn"
            onClick={() => {
              setPeople(true);
            }}
          >
            <h3>List of Notes Shared</h3>
          </div>{" "}
          <div
            className="Notebtn"
            onClick={() => {
              setReceived(true);
            }}
          >
            <h3>Notes Shared with Me</h3>
          </div>
        </div>
      ) : people && !received ? (
        <SharedNotesTable />
      ) : (
        <Received />
      )}
    </div>
  );
};

export default observer(Share);
