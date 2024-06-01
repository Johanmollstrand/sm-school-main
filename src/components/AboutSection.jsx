import styled from "styled-components";
import backgroundImage from "../assets/images/bg.jpeg"; // Ensure you have a background image

const AboutSection = () => {
  return (
    <SectionContainer>
      <Content>
        <Title>Vår trafikskola</Title>
        <Subtitle>
          Kul att du har hittat hit till vår trafikskola i centrala Norrköping!
          Vår glada och kompetenta personal, våra trevliga lokaler och vårt
          centrala läge i stan gör det lätt och roligt att ta körkort hos oss
          oavsett förkunskaper!
        </Subtitle>
        <CTAButton>Läs mer om oss</CTAButton>
      </Content>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: url(${backgroundImage}) no-repeat center center/cover;
  background-attachment: fixed;
  color: white;
  text-align: center;
  padding: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Content = styled.div`
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Add a semi-transparent background for better text readability */
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const CTAButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export default AboutSection;
