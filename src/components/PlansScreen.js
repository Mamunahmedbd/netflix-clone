import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="plansScreen">
      <p>Renewal date:</p>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Basic Plan</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Stardard Plan</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Premium</h5>
          <h6>4K +HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
