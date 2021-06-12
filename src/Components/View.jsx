import { observer } from "mobx-react-lite";
import React from "react";
import "../App.css"

const View = (props) => {
  return (
    <>
      <div>
          <h1 className="viewTitle">Note Number:<br/> {props.note.id}</h1>
          <h1 className="viewTitle">Title:<br/> {props.note.title}</h1>
          <h1 className="viewTitle">Description:<br/> {props.note.details}</h1>
      </div>
    </>
  );
};

export default observer(View);
