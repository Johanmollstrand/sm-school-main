import { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the requirements to enroll?",
      answer:
        "You need to be at least 16 years old and have a learner's permit.",
    },
    {
      question: "What is the duration of the courses?",
      answer:
        "Course durations vary from 2 weeks to 2 months depending on the program.",
    },
    {
      question: "What are the requirements to enroll?",
      answer:
        "You need to be at least 16 years old and have a learner's permit.",
    },
    {
      question: "What is the duration of the courses?",
      answer:
        "Course durations vary from 2 weeks to 2 months depending on the program.",
    },
    {
      question: "What are the requirements to enroll?",
      answer:
        "You need to be at least 16 years old and have a learner's permit.",
    },
    {
      question: "What is the duration of the courses?",
      answer:
        "Course durations vary from 2 weeks to 2 months depending on the program.",
    },
  ];

  return (
    <FAQContainer>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              <ToggleButton>{activeIndex === index ? "-" : "+"}</ToggleButton>
            </FAQQuestion>
            {activeIndex === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

const FAQContainer = styled.section`
  padding: 2rem;
  background-color: #16456c;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const FAQList = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleButton = styled.span`
  font-size: 1.5rem;
`;

const FAQAnswer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
`;

export default FAQSection;
