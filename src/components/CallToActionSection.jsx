import styled from "styled-components";

const CallToActionSection = () => {
  return (
    <CTAContainer>
      <CTATitle>Ready to Start?</CTATitle>
      <CTAText>
        Enroll in our traffic school and start your driving journey today.
      </CTAText>
      <CTAButton>Kontakt nu</CTAButton>
    </CTAContainer>
  );
};

const CTAContainer = styled.section`
  padding: 2rem;
  background-color: #007bff;
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const CTAText = styled.p`
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #218838;
  }
`;

export default CallToActionSection;
