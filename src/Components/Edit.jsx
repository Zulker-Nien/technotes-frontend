import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import NoteStore from "../Stores/noteStore";

const Edit = (props) => {
  const noteStore = useContext(NoteStore);
  const { editNote } = noteStore;

  const [body, setBody] = useState({
    title: props.note.title,
    details: props.note.details,
  });
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmitHandler = () => {
    console.log(body);
    editNote(props.note, body)
      .then(() => props.setEdit(false))
      .catch((error) => console.log(error));

    // props.setView(true);
    // props.setCreate(false);
    // props.setShare(false);
  };
  return (
    <div className="AddNotes">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Add a Title"
            name="title"
            value={body.title}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          placeholder="Write to your heart's content"
          onChange={onChangeHandler}
          value={body.details}
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

export default observer(Edit);
