import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import {Eduactiondata} from "../../data/education";
import WorkCard from "./work-card";
function Work() {
  const data = Eduactiondata;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Education</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Work;