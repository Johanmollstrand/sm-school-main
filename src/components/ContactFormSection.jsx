import styled from "styled-components";

const ContactFormSection = () => {
  return (
    <FormContainer>
      <SectionTitle>Skicka meddelande till oss</SectionTitle>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Namn</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Mobil</Label>
          <Input type="tel" id="phone" name="phone" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Meddelande</Label>
          <Textarea id="message" name="message" rows="4" required></Textarea>
        </FormGroup>
        <SubmitButton type="submit">Skicka</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;

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

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

export default ContactFormSection;