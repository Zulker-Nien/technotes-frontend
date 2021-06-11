import { observer } from "mobx-react-lite";
import React from "react";

const View = (props) => {
  return (
    <>
      <div>
          <h1 style={{ color: "red" }}>{props.note.title}</h1>
          <h1 style={{ color: "red" }}>{props.note.id}</h1>
          <h1 style={{ color: "red" }}>{props.note.details}</h1>
        
      </div>
    </>
  );
};

export default observer(View);
