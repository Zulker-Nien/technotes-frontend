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
  editNote = async (prevNote, newNote) => {
    const body = {
      title: newNote.title,
      details: newNote.details,
    };
    try {
      const note = await Agent.notes.noteEdit(prevNote.id, body);
      runInAction(() =>{
        console.log(note);
        let temp = this.notes.slice()
        let index = this.notes.indexOf(prevNote)
        temp[index] = note
        this.notes = temp
        console.log(this.notes)
      })
    } catch (error) {
      throw error
    }
  };
  deleteNote = async (note) =>{
    try {
      const response = await Agent.notes.noteDelete(note.id);
      runInAction(() => {
        if(response.note === "deleted") {
          this.notes = this.notes.filter(n => n.id === note.id)
        }
      });
    } catch (error) {
      console.log(error)
      
    }
  }
}
export default createContext(new NoteStore());
