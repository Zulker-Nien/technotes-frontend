import { observer } from "mobx-react-lite";
import React from "react";

const Share = (props) => {
    const onBacHandler = () => {
        props.setView(false);
        props.setCreate(false);
        props.setShare(false);
      };
  return (
    <div>
      <div className="bckbtn" onClick={onBacHandler}>
        <button>BACK</button>
      </div>
    </div>
  );
};

export default observer(Share);
