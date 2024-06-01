import styled from "styled-components";
import schoolImage from "../assets/images/schoolImage.png";

const AboutUsSection = () => {
  return (
    <AboutContainer>
      <AboutImage src={schoolImage} alt="Traffic School" />
      <AboutContent>
        <SectionTitle>About Our Traffic School</SectionTitle>
        <AboutText>
          Our traffic school has been providing quality driving lessons for over
          20 years. Our mission is to ensure that every student becomes a safe
          and confident driver. We value safety, professionalism, and excellence
          in driving education.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  display: flex;
  padding: 2rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const AboutImage = styled.img`
  width: 50%;
  height: auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  color: #343a40;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default AboutUsSection;
