import React, { useContext } from "react";
import "./App.css";
import Login from "./Components/Login";
import Notepad from "./Components/Notepad";
import UserStore from "./Stores/userStore";
import { observer } from "mobx-react-lite";

function App() {
  const userStore = useContext(UserStore);
  const { userObs, email, logout } = userStore;

  return (
    <>
      <div className="toPer">
        {/* FOR REGISTRATION AND LOGIN */}
        {userObs === null ? (
          <div className="mainContainer">
            <div className="login">
              <h1>Register & Login</h1>
              <Login />
            </div>
          </div>
        ) : (
          <>
          
            <div className="mainContainer">
              <div>
                <h1>You are Logged in with {email}</h1>
              </div>
              <br />
            </div>
            <div className="logoutCnt">
            <button className="logout" onClick={logout}>
              Logout
            </button></div>
          </>
        )}

        {/* TO VIEW THE LOGGED IN PANEL */}
        {userObs !== null && (
          <div className="notepad">
            <Notepad />
          </div>
        )}
      </div>
    </>
  );
}

export default observer(App);
