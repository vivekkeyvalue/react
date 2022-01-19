import { useState } from "react";
import React from 'react'
import { FaAngleDown,FaAngleUp} from "react-icons/fa";
import "./Question.css";

// eslint-disable-next-line react/prop-types
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="question">
      <div className="acc_head">
        <h4 onClick={() => setExpanded(!expanded)}>{title}</h4>
        <button className="acc_btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? < FaAngleUp/> : < FaAngleDown/>}
        </button>
      </div>

      <div className="question_content">{expanded && <p>{info}</p>}</div>
    </div>
  );
};

export default Question;