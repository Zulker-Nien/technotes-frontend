import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import Agent from "../Api/Agent";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  userObs = null;

  register = async (email) => {
    const body = {
      mail: email,
    };
    try {
      // Response Accept
      const user = await Agent.auth.getAuth(body);
      runInAction(() => {
        this.userObs = user
        console.log(user)
        localStorage.setItem("jwt", userObs.jwt);
      });
    } catch (error) {
      console.log(error);
    }
  };
  login = async (email) => {
    const body = {
      mail: email,
    };
    try {
      // Response Accept
      let user = await Agent.auth.getAuth(body);
      runInAction(() => {
        this.userObs = user;
        console.log(user);
        localStorage.setItem("jwt", user.jwt);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default createContext(new UserStore());
