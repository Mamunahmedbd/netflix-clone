import { onAuthStateChanged, getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import ProfileScreen from "./components/ProfileScreen";
import { login, logout } from "./features/userSlice";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
        // navigate("/");
      } else {
        navigate("/login");
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [auth, navigate, dispatch]);

  return (
    <div className="app">
      <Routes>
        {!user ? (
          <Route path="/login" element={<LoginScreen />} />
        ) : (
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
