import React, { useContext, useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import NoteStore from "../Stores/noteStore";
import "../App.css"
import { observer } from "mobx-react-lite";


const AddNotes = (props) => {
  const noteStore = useContext(NoteStore);
  const { addNote } = noteStore;

  const [body, setBody] = useState({
    title: "",
    details: "",
  });
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmitHandler = () => {
    addNote(body);
    props.setView(true);
    props.setCreate(false);
  };
  const onBackHandler = () => {
    props.setView(false);
    props.setCreate(false);
  };

  return (
    <div className="AddNotes">
      <div className="bckbtn" onClick={onBackHandler}>
        <button >BACK</button>
      </div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group widths="equal" >
          
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Add a Title"
            name="title"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          placeholder="Write to your heart's content"
          onChange={onChangeHandler}
          name="details"
        />

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Save"
        />
      </Form>
    </div>
  );
};

export default observer(AddNotes);
