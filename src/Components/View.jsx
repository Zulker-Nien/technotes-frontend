import { observer } from "mobx-react-lite";
import React from "react";
import "../App.css";

const View = (props) => {
  return (
    <>
      <div className="viewContainer">
        <h1 className="viewId">Note Number: {props.note.id}</h1>
        <div className="titleContainer">
          <h1 className="viewTitle">Title: {props.note.title}</h1>
        </div>
        <div className="detailsContainer">
        <h1 className="viewDescription">
           {props.note.details}
        </h1></div>
      </div>
    </>
  );
};

export default observer(View);
