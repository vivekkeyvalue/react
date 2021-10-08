import { useState } from "react";
import data from "./data";
import Question from "./Question";
import './Accordion.css';

const Accordion = () => {
  const [question, setQuestion] = useState(data);

  return (
    <div className="acc_container">
      <h1>Frequently Asked Questions</h1>
      <section className="acc_info">
        {question.map((question) => (
          <Question key={question.id} {...question}/>
        ))}
      </section>
    </div>
  );
};

export default Accordion;
