import React, { useState } from "react";
import { Wrapper, LoginContainer } from "./Login.styles";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <Wrapper>
      <img
        src="https://seeklogo.com/images/A/amazon-logo-86547BFB54-seeklogo.com.png"
        alt="logo"
      />

      <LoginContainer>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={login}>
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button type="submit" onClick={register}>
          Create Your Amazon Account
        </button>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;
