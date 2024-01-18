import React, { useState } from "react";

const DA = ({ ...props }) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#555"
      d="M10.1025513,12.7783485 L16.8106554,6.0794438 C17.0871744,5.80330401 17.5303978,5.80851813 17.8006227,6.09108986 C18.0708475,6.37366159 18.0657451,6.82658676 17.7892261,7.10272655 L10.5858152,14.2962587 C10.3114043,14.5702933 9.87226896,14.5675493 9.60115804,14.2901058 L2.2046872,6.72087106 C1.93149355,6.44129625 1.93181183,5.98834118 2.20539811,5.7091676 C2.47898439,5.42999401 2.92223711,5.43031926 3.19543076,5.70989407 L10.1025513,12.7783485 Z"
    />
  </svg>
);

const UA = ({ ...props }) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#555"
      fillRule="evenodd"
      d="M10.1025513,7.22165154 C13.549533,10.6902823 15.8466074,12.9862104 16.9937744,14.109436 C17.1906416,14.2940129 17.5317688,14.6698914 18.0392151,14.1790161 C18.3775126,13.851766 18.3644409,13.4939982 18,13.1057129 L10.556488,5.67610168 C10.432251,5.55870056 10.2805653,5.5 10.1014311,5.5 C9.92229687,5.5 9.76473264,5.55870056 9.6287384,5.67610168 L2.17555237,13.3108978 C1.93475791,13.6991321 1.94470649,14.025777 2.20539811,14.2908324 C2.46608974,14.5558878 2.78324382,14.5701396 3.15686035,14.3335876 L10.1025513,7.22165154 Z"
    />
  </svg>
);

const Question = ({ question, answer }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    return (
      <div className="mb-4">
        <div
          className={`border border-blue-800 rounded-lg p-4 cursor-pointer flex items-center ${
            dropdownOpen ? "bg-blue-200" : ""
          }`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="font-semibold">{question}</span>
          <div className="ml-auto">
            {dropdownOpen ? <UA /> : <DA />}
          </div>
        </div>
        {dropdownOpen && (
          <div className="p-4 bg-blue-100 rounded-b">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };
  
  const FaqComponent = () => {
    return (
      <div className="max-w-md mt-8">
        <h1 className="font-montserrat text-4xl font-bold bg-gradient-text mb-8">
          FAQ
        </h1>
  
        <Question
          question="Can education flashcards be used for all age groups?"
          answer="Yes, education flashcards can be adapted for various age groups. They are versatile tools that can be customized to suit the learning needs and levels of different age ranges."
        />
  
        <Question
          question="How do education flashcards work?"
          answer="Education flashcards work by presenting information in a concise and visual format. They typically contain a question on one side and the answer on the reverse side. Flashcards are used for active recall, helping learners reinforce their knowledge through repetition and practice."
        />
  
        <Question
          question="Can education flashcards be used for test preparation?"
          answer="Yes, education flashcards are effective for test preparation. They allow students to review key concepts, facts, and information in a quick and interactive manner. Flashcards are a valuable tool for self-assessment and can enhance memory retention during the preparation for tests and exams."
        />
      </div>
    );
  };
  
  export default FaqComponent;
