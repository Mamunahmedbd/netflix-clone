import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import "./ProfileScreen.css";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Subscribe an plan</h1>
        <div className="profileScreen__info">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="profile"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button onClick={logOut} className="profileScreen__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
