import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import "../App.css";
import NoteStore from "../Stores/noteStore";

const ViewNotes = (props) => {
  const noteStore = useContext(NoteStore);
  const { listNotes, notes } = noteStore;
  const onSubmitHandler = () => {
    props.setView(false);
    props.setCreate(false);
  };
  const onAddHandler = () => {
    props.setView(false);
    props.setCreate(true);
  };
  useEffect(() => {
    listNotes();
  }, [listNotes]);

  return (
    <div>
      <div className="bckbtn" onClick={onSubmitHandler}>
        <button>BACK</button>
      </div>
      <div className="bckbtn2" onClick={onAddHandler}>
        <button>Add a Note</button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="id">ID</th>
            <th className="title">Title</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr>
              <td>{note.id}</td>
              <td>{note.title}</td>
              <td>
                <button>view</button>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(ViewNotes);
