import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <QuickLinks>
          <FooterLink href="#">Vår Policy</FooterLink>
          <FooterLink href="#">Vilkor</FooterLink>
        </QuickLinks>
        <CompanyInfo>
          <InfoTitle>Företagsuppgifter</InfoTitle>
          <InfoItem>Swish Nummer: 123 456 7890</InfoItem>
          <InfoItem>Bankgiro: 560-3931</InfoItem>
          <InfoItem>Org. nr: 123456-7890</InfoItem>
        </CompanyInfo>
        <SocialMedia>
          <SocialMediaIcon href="https://www.facebook.com/people/M%C3%B6llstrands-Trafikskola/61559963756477/">
            <FaFacebookF />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.tiktok.com/@mollstrandstrafikskola?_t=8nAcUzO8bA0&_r=1">
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com">
            <FaInstagram />
          </SocialMediaIcon>
        </SocialMedia>
        <NewsletterSignup>
          <NewsletterInput type="email" placeholder="Din e-mail" />
          <SignupButton>Skicka</SignupButton>
        </NewsletterSignup>
      </ContentWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background-color: #343a40;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.a`
  margin: 0.5rem 0;
  color: #f8f9fa;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const CompanyInfo = styled.div`
  text-align: center;
`;

const InfoTitle = styled.h4`
  margin-bottom: 1rem;
`;

const InfoItem = styled.p`
  margin: 0.25rem 0;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SocialMediaIcon = styled.a`
  margin: 0 0.5rem;
  color: #f8f9fa;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;

const NewsletterSignup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #f8f9fa;
  border-radius: 5px 0 0 5px;
  background-color: #343a40;
  color: #f8f9fa;

  @media (max-width: 768px) {
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;

const SignupButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 0 5px 5px 0;

  @media (max-width: 768px) {
    border-radius: 5px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

export default Footer;
