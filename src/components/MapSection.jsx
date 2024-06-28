import styled from "styled-components";

const MapSection = () => {
  return (
    <MapContainer>
      <SectionTitle>Vår lokal</SectionTitle>
      <iframe
        title="School Location"
        src=""
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
