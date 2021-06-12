import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";
import ShareStore from "../Stores/shareStore";
import { Icon, Input } from "semantic-ui-react";

const SharedTo = (props) => {
  const shareStore = useContext(ShareStore)
  const {shareNote} = shareStore

  const [data, setData] = useState({
    shared_to: "",
    note_id: props.note.id 
  });

  const onChangeHandler = (e) => {
    const {value} = e.target
    setData({
      ...data,
      shared_to: value
    })
  }

  const onSubmitHandler = () => {
    shareNote(data)
    props.setShare(false)
    props.setCreate(false)
    props.setView(false)
  }
  
  return (
    <div style={{ width: "30vw" }}>
      <Input
        fluid
        icon={<Icon name="search" inverted circular link onClick={onSubmitHandler}/>}
        placeholder="Search Users to share with"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default observer(SharedTo);
