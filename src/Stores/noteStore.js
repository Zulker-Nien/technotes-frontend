import { action, makeObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import Agent from "../Api/Agent";

class NoteStore {
  constructor() {
    makeObservable(this, {
      notes: observable,
      listNotes: action,
    });
  }
  notes = [];
  listNotes = async () => {
    try {
      const noteList = await Agent.notes.noteList();
      runInAction(() => {
        this.notes = noteList.notes;
      });
    } catch (error) {
      console.log(error);
    }
  };
  addNote = async (note) => {
    const body = {
      title: note.title,
      details: note.details,
    };
    try {
      const note = await Agent.notes.addNotes(body);
      runInAction(() => {
        console.log(note);
        this.notes.push(note);
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export default createContext(new NoteStore());
