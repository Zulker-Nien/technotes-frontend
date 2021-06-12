import { action, makeObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import Agent from "../Api/Agent";

class ShareStore {
  constructor() {
    makeObservable(this, {
      sharedNotes: observable,
      shareNote: action,
    });
  }

  sharedNotes = []

  shareNote = async (data) => {
    try {
      const response = await Agent.share.shareNote(data);
      runInAction(() => {
        response.model.source_user = response.model.note.user
        this.sharedNotes.push(response.model)
      });
    } catch (error) {
      console.log(error)
    }
  };

  listSharedNotes = async() => {
    try {
      const response = await Agent.share.sharedNoteList()
      runInAction(() => {
        this.sharedNotes = response.models
        console.log(response)
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export default createContext(new ShareStore());