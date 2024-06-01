import styled from "styled-components";

const MapSection = () => {
  return (
    <MapContainer>
      <SectionTitle>Our Location</SectionTitle>
      <iframe
        title="School Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093757!2d144.95565131531813!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727eaa71664f0a!2s123%20Traffic%20School%20Lane%2C%20City%2C%20State%2C%20ZIP!5e0!3m2!1sen!2s!4v1629648612386!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </MapContainer>
  );
};

const MapContainer = styled.section`
  padding: 2rem;
  background-color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export default MapSection;
