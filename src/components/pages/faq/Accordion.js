import React, { useState } from "react";

function Accordion({ ques, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button onClick={toggleAccordion} className="accordion-toggle">
        <span>{ques}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          <p className="accordion-answer">{ans}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
