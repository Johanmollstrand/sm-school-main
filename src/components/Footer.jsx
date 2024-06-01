import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <FooterContainer>
      <QuickLinks>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
      </QuickLinks>
      <SocialMedia>
        <SocialMediaIcon href="https://www.facebook.com">
          <FaFacebookF />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.twitter.com">
          <FaTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com">
          <FaInstagram />
        </SocialMediaIcon>
      </SocialMedia>
      <NewsletterSignup>
        <NewsletterInput type="email" placeholder="Your email" />
        <SignupButton>Subscribe</SignupButton>
      </NewsletterSignup>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  color: #343a40;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const QuickLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.a`
  margin: 0 1rem;
  color: #343a40;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SocialMediaIcon = styled.a`
  margin: 0 0.5rem;
  color: #343a40;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;

const NewsletterSignup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #343a40;
  border-radius: 5px 0 0 5px;

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
