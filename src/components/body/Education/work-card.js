import React from "react";
import "./work-card.css";
function WorkCard ({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo}className="work-logo"  alt="education"/>
      <div className="work-info">
        <label className="company-name">{item.Degree}</label>
        <div className="work-dates">
          <label>{item.Specialization}</label>-<label>{item.Organisation}</label>
          <p>{item.Place}</p>
        </div>
        <div className="work-desc">
          <p>{item.Percentage}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;