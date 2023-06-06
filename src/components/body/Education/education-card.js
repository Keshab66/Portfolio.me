import React from "react";
import "./education-card.css";
function EducationCard ({ item }) {
  return (
    <div className="education-card">
      <img src={item.clgLogo}className="work-logo"  alt="education"/>
      <div className="education-info">
        <label className="education-name">{item.Degree}</label>
        <div className="education-dates">
          <label>{item.Specialization}</label>-<label>{item.Organisation}</label>
          <p>{item.Place}</p>
        </div>
        <div className="education-desc">
          <p>{item.Percentage}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;