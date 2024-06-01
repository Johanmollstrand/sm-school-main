import styled from "styled-components";
import heroImage from "../assets/images/hero.jpeg";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground />
      <HeroContent>
        <Headline>Learn to Drive Safely and Confidently</Headline>
        <Subheadline>
          Join our traffic school today for expert driving lessons.
        </Subheadline>
        <CTAButton>Get Started</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  background-color: #007bff;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${heroImage}) no-repeat center center/cover;

  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
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

export default HeroSection;
