import React from "react";
import "./education.css";
import Separator from "../../common/separator";
import {Eduactiondata} from "../../data/education";
import EducationCard from "./education-card";
function Work() {
  const data = Eduactiondata;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Education</label>
      <div className="work-list">
        {data.map((item) => {
          return <EducationCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Work;