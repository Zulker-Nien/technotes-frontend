import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import "../App.css";
import ShareStore from "../Stores/shareStore";

const SharedNotesTable = () => {
  const shareStore = useContext(ShareStore);
  const { listSharedNotes, sharedNotes } = shareStore;

  useEffect(() => {
    listSharedNotes();
  }, [listSharedNotes]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="id">ID</th>
            <th className="title2">Title</th>
            <th className="details">Details</th>
            <th className="eformail">Email</th>
          </tr>
        </thead>
        <tbody>
          {sharedNotes.map((model, i) => (
            <tr key={i} style={{ color: "white" }}>
              <td>{model.note.id}</td>
              <td>{model.note.title}</td>
              <td>{model.note.details}</td>
              <td>{model.target_user.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(SharedNotesTable);
