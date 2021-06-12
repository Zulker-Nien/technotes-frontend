import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "../App.css";
import NoteStore from "../Stores/noteStore";
import View from "./View";
import Edit from "./Edit";
import SharedTo from "./SharedTo";

const ViewNotes = (props) => {
  const noteStore = useContext(NoteStore);
  const { listNotes, notes, deleteNote } = noteStore;
  const [details, setDetails] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState();
  const [share, setShare] = useState(false);

  const onSubmitHandler = () => {
    props.setView(false);
    props.setCreate(false);
  };
  const onAddHandler = () => {
    props.setView(false);
    props.setCreate(true);
    props.setShare(false);
  };
  useEffect(() => {
    listNotes();
  }, [listNotes, edit]);

  return (
    <div>
      <div className="bckbtn" onClick={onSubmitHandler}>
        <button>BACK</button>
      </div>

      {!details && !edit && !share ? (
        <>
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
              {notes.map((note, i) => (
                <tr key={i}>
                  <td>{note.id}</td>
                  <td>{note.title}</td>
                  <td>
                    <button
                      onClick={() => {
                        setSelected(note);
                        setDetails(true);
                      }}
                    >
                      view
                    </button>
                    <button
                      onClick={() => {
                        setSelected(note);
                        setEdit(true);
                        setDetails(false);
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => deleteNote(note)}>delete</button>
                    <button
                      onClick={() => {
                        setSelected(note);
                        setDetails(false);
                        setShare(true);
                      }}
                    >
                      Share
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : details && !edit && !share ? (
        <View note={selected} />
      ) : !details && edit && !share ? (
        <Edit note={selected} setEdit={setEdit} />
      ) : (
        <SharedTo note={selected} setView={props.setView} setCreate={props.setCreate} setShare={props.setShare}/>
      )}
    </div>
  );
};

export default observer(ViewNotes);
