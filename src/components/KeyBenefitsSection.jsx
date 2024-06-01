import styled from "styled-components";
import { FaCertificate, FaCar } from "react-icons/fa";

const KeyBenefitsSection = () => {
  return (
    <BenefitsContainer>
      <SectionTitle>Why Choose Us</SectionTitle>
      <BenefitsList>
        <BenefitItem>
          <FaCertificate size={50} color="#28a745" />
          <BenefitTitle>Certified Instructors</BenefitTitle>
          <BenefitDescription>
            Learn from experienced and certified driving instructors.
          </BenefitDescription>
        </BenefitItem>
        <BenefitItem>
          <FaCar size={50} color="#28a745" />
          <BenefitTitle>Modern Vehicles</BenefitTitle>
          <BenefitDescription>
            Practice in well-maintained and modern cars.
          </BenefitDescription>
        </BenefitItem>
      </BenefitsList>
    </BenefitsContainer>
  );
};

const BenefitsContainer = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const BenefitsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BenefitItem = styled.div`
  text-align: center;
  margin: 1rem;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 150px;
    margin: 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const BenefitTitle = styled.h3`
  margin: 1rem 0;
`;

const BenefitDescription = styled.p`
  color: #343a40;
`;

export default KeyBenefitsSection;
