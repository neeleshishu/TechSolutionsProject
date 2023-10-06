import React, { useState } from 'react';

const data = [
  {
    "id": 1,
    "title": "Do I really get unlimited design services?",
    "content": "Do I really get unlimited design services?"
  },
  {
    "id": 2,
    "title": "What is a realistic turnaround time?",
    "content": "What is a realistic turnaround time?"
  },
  {
    "id": 3,
    "title": "I need my designs ASAP—can you help?",
    "content": "I need my designs ASAP—can you help?"
  },
  {
    "id": 4,
    "title": "What types of projects do you work on?",
    "content": "What types of projects do you work on?"
  },
  {
    "id": 5,
    "title": "What if I want to cancel my service?",
    "content": "What if I want to cancel my service?"
  }
];

const AccordionItem = ({ title, content }) => { // Destructure title and content props
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-orange-500 mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className='accordian container px-20 pb-10'>
    <h1 className='accordian_h1 text-center text-3xl font-bold p-10'>Our Most <span className='text-orange-500'>Frequently</span> Asked Questions</h1>
    <div className="grid grid-cols-1 gap-4">
      {data.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
    </div>
  );
};

export default Accordion;
