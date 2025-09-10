import react from "react";
import React, { useState } from "react";
import "../../App.css";

function Certification() {
  return (
    <div className="certification" id="certification">
      <h2>Certifications</h2>
      <div className="certification-list">
        <div className="certification-item">
          <img
            src="./assets/certifications/ai.png"
            alt="GEN AI Certification"
          />
        </div>
        <div className="certification-item">
          <img
            src="./assets/certifications/react.png"
            alt="React Certification"
          />
        </div>
        <div className="certification-item">
          <img src="./assets/certifications/js.png" alt="JS Certification" />
        </div>
        <div className="certification-item">
          <img
            src="./assets/certifications/html.png"
            alt="HTML Certification"
          />
        </div>
        <div className="certification-item">
          <img src="./assets/certifications/css.png" alt="CSS Certification" />
        </div>
        <div className="certification-item">
          <img
            src="./assets/certifications/hacking.png"
            alt="EHCR Certification"
          />
        </div>
      </div>
    </div>
  );
}

export default Certification;
