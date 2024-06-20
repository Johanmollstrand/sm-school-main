import { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "HUR ANSÖKER MAN OM KÖRKORTSTILLSTÅND?",
      answer:
        "Du kan ansöka om körkortstillstånd på Transportstyrelsen's hemsida",
    },
    {
      question: "KAN MAN BÖRJA ÖVNINGSKÖRA PRIVAT DIREKT EFTER VI GÅTT HANDLEDARUTBILDNINGEN?",
      answer:
        "Nej, du måste ansöka om handledarskap innan ni kan börja köra och det gör du online på Transportstyrelsen's hemsida",
    },
    {
      question: "HAR MIN KURS/TILLSTÅND GÅTT UT?",
      answer:
        "Du kan logga in på mina sidor på transportstyrelsen.se för att se dina giltiga kurser och tillstånd.",
    },
    {
      question: "HUR MÅNGA LEKTIONER MÅSTE JAG TA FÖR ATT KLARA KÖRKORTET?",
      answer:
        "Det finns ingen exakt siffra. Det beror på hur fort du lär dig, hur ofta du kör och vilka kunskaper du har sen innan. Du är alltid välkommen att fråga din lärare i samband med en lektion för att få en rekommendation.",
    },
    {
      question: "NÄR SKA JAG GÅ PÅ RISKKURSERNA? (RISK 1 OCH RISK 2)",
      answer:
        "Riskettan kan du göra i början av din utbildning. Risktvåan görs med fördel i slutet av din utbildning. Risk 2 måste ha din lärares godkännande innan den bokas.",
    },
    {
      question: "KAN JAG BLI HÄMTAD OCH LÄMNAD TILL KÖRNINGEN? BETYDER DET ATT DET DRAS PÅ MIN KÖRTID DÅ ELLER?",
      answer:
        "Ja, vi kan hämta eller lämna dig, men den tid det tar för din lärare att hämta och lämna dig räknas som en del av din totala körtid.",
    },
    
    {
      question: "VAD HÄNDER OM JAG MISSAR EN LEKTION?",
      answer:
        "Om du missar en lektion så kommer du debiteras för den om inte sjukintyg eller annat skäligt intyg kan lämnas.",
    },
    
    {
      question: "HUR KAN JAG BOKA LEKTIONER?",
      answer:
        "Du kan boka lektioner genom att ringa till oss eller besöka vår kontor. Adresser och telefonnummer finns under Kontakta Oss",
    },
    
  ];

  return (
    <FAQContainer>
      <SectionTitle>Vanliga frågor</SectionTitle>
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
