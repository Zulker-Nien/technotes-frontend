import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import Agent from "../Api/Agent";

class UserStore {
  email = ""
  constructor() {
    makeAutoObservable(this);
  }

  userObs = null;

  login = async (email) => {
    const body = {
      mail: email,
    };
    try {
      // Response Accept
      let user = await Agent.auth.getAuth(body);
      runInAction(() => {
        this.userObs = user;
        this.email = email
        console.log(user);
        localStorage.setItem("jwt", user.jwt);
      });
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    this.userObs = null;
    this.email = ""
    localStorage.removeItem("jwt")
  }
}

export default createContext(new UserStore());
