import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignUpScreen.css";
import firebaseConfig from "../firebase";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          type="password"
        />
        <button onClick={signIn} className="" type="submit">
          {" "}
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">Now to Netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
