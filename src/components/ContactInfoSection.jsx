import styled from "styled-components";

const ContactInfoSection = () => {
  return (
    <ContactContainer>
      <SectionTitle>Contact Us</SectionTitle>
      <ContactDetails>
        <DetailItem>
          <DetailTitle>Address</DetailTitle>
          <DetailText>123 Traffic School Lane, City, State, ZIP</DetailText>
        </DetailItem>
        <DetailItem>
          <DetailTitle>Phone</DetailTitle>
          <DetailText>(123) 456-7890</DetailText>
        </DetailItem>
        <DetailItem>
          <DetailTitle>Email</DetailTitle>
          <DetailText>info@trafficschool.com</DetailText>
        </DetailItem>
      </ContactDetails>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
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

const ContactDetails = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
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

const DetailTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const DetailText = styled.p`
  color: #343a40;
`;

export default ContactInfoSection;
