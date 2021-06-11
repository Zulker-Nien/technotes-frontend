import React,{useContext,useState} from "react";
import { Button, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { observer } from "mobx-react-lite";
import UserStore from "../Stores/userStore";

const Login = () => {
  const userStore = useContext(UserStore);
  const { login } = userStore;
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSubmit = () => {
    // console.log(email)
    login(email);
  };
  return (
    <Form onSubmit={onSubmit} >
      <Form.Field>
        <label>Enter your mail</label>
        <input
          value={email}
          onChange={onChangeHandler}
          placeholder="john@doe.com"
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default observer(Login);
