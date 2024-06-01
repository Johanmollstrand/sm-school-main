import styled from "styled-components";
import { FaCar, FaRoad } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesList>
        <ServiceItem>
          <FaCar size={50} />
          <ServiceTitle>Beginner Driving Lessons</ServiceTitle>
          <ServiceDescription>
            Comprehensive lessons for new drivers.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <FaRoad size={50} />
          <ServiceTitle>Defensive Driving Courses</ServiceTitle>
          <ServiceDescription>
            Advanced courses to improve your driving skills.
          </ServiceDescription>
        </ServiceItem>
      </ServicesList>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  padding: 2rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ServiceItem = styled.div`
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

const ServiceTitle = styled.h3`
  margin: 1rem 0;
`;

const ServiceDescription = styled.p`
  color: #343a40;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default ServicesSection;
