import styled from "styled-components";
import {
  FaCar,
  FaMotorcycle,
  FaChalkboardTeacher,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const InfoSection = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <InfoContainer>
      <LeftContent ref={leftRef} className={leftInView ? "fadeInLeft" : ""}>
        <SectionTitle>Ta ditt körkort med oss</SectionTitle>
        <Subtitle>Vi hjälper dig hela vägen!</Subtitle>
        <Text>
          Haninge Trafikskola är en väletablerad trafikskola som grundades 2009.
          Vi utbildar dig som är nybörjare och vill ta körkort på ett säkert,
          effektivt samt prisvärt sätt. Vi utbildar även dig som redan har
          körkort men vill fräscha upp dina kunskaper. Vi erbjuder
          handledarutbildning och riskutbildningar, som halkbana och riskettan
          för dig som vill ta körkort för B-behörighet.
        </Text>
        <Text>
          <strong>Ta körkort snabbt med våra intensivkurser</strong>
        </Text>
        <Text>
          En Intensivkurs är ett prisvärt och oftast ett snabbare alternativ när
          man vill ta körkort. Våra intensivpaket kommer i olika 4 olika
          storlekar, från 2 veckor till 5 veckor. Tillsammans med
          körskoleläraren bestämmer vi vilket paket som passar dig och dina
          förkunskaper för att ge dig de bästa möjligheterna till att ta
          körkort.
        </Text>
        <Text>
          <strong>Utbildade och pedagogiska körskolelärare</strong>
        </Text>
        <Text>
          Våra utbildningar är anpassade till dina personliga förutsättningar
          med hjälp av trevliga och välutbildade lärare, för att det ska vara
          tryggt samt ekonomiskt för dig att ta körkort. Våra pedagogiska och
          mångkulturella lärare jobbar för att du ska få den bästa
          körkortsutbildningen.
        </Text>
        <Text>
          Vi har trafiklärare som håller körkortsutbildningar på svenska,
          engelska, spanska, turkiska samt kurdiska. Våra körutbildningar är
          givetvis anpassade efter Transportstyrelsens utbildningsplan.
        </Text>
      </LeftContent>
      <RightContent ref={rightRef} className={rightInView ? "fadeInRight" : ""}>
        <CardsContainer>
          <Card>
            <FaCar size={40} color="#007bff" />
            <CardTitle>PERSONBIL</CardTitle>
            <CardText>Körkort ger frihet</CardText>
          </Card>
          <Card>
            <FaMotorcycle size={40} color="#007bff" />
            <CardTitle>MOPEDKÖRKORT</CardTitle>
            <CardText>Ta ditt Mopedkörkort hos oss</CardText>
          </Card>
          <Card>
            <FaChalkboardTeacher size={40} color="#007bff" />
            <CardTitle>HANDLEDAREKURS</CardTitle>
            <CardText>Början på ditt körkort</CardText>
          </Card>
          <Card>
            <FaExclamationTriangle size={40} color="#007bff" />
            <CardTitle>RISKUTBILDNINGAR</CardTitle>
            <CardText>Lär dig om riskerna i trafiken</CardText>
          </Card>
        </CardsContainer>
        <ContactCard>
          <CardTitle>KOMMANDE KURSER</CardTitle>
          <CardText>Handledarkurs: 20 Maj kl 17:00</CardText>
          <CardText>Riskettan: 28 Maj kl 17:00</CardText>
          <CardText>Halkbana: 18 Juni kl 11:15</CardText>
          <CardText>Mopedutbildning: 31 Maj - 1 Juni</CardText>
          <CardTitle>Kontakta oss</CardTitle>
          <CardSubtitle>Våra öppettider</CardSubtitle>
          <CardText>Måndag - Torsdag: 09:00 - 17:00</CardText>
          <CardText>Lunchstängt 12:00-13:00</CardText>
          <CardText>Fredag: 09:00 - 15:00</CardText>
          <CardText>
            <FaMapMarkerAlt /> Nynäsvägen 94, 136 35 Handen
          </CardText>
          <CardText>
            <FaEnvelope /> info@haningetrafikskola.se
          </CardText>
          <CardText>
            <FaPhone /> 08 777 20 10
          </CardText>
          <CardText>
            <FaPhone /> 072 375 66 03
          </CardText>
        </ContactCard>
      </RightContent>
    </InfoContainer>
  );
};

const InfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LeftContent = styled.div`
  flex: 2;
  padding-right: 2rem;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease, transform 1s ease;

  &.fadeInLeft {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const RightContent = styled.div`
  flex: 1;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 1s ease, transform 1s ease;

  &.fadeInRight {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const CardTitle = styled.h3`
  margin: 1rem 0 0.5rem 0;
  font-size: 1.25rem;
  color: #333;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ContactCard = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const CardSubtitle = styled.h4`
  font-size: 1rem;
  color: #007bff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export default InfoSection;
