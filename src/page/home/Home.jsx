import "./Home.css";
import { FaBullseye, FaChartLine, FaHandsHelping } from "react-icons/fa";
import heroVideo from "../../assets/imgs/vid1.mp4";
import secondSectionImage from "../../assets/imgs/33.jpeg";
import gridSectionImage from "../../assets/imgs/22.jpeg";
import gridSectionImage2 from "../../assets/imgs/44.jpeg";
import TestimonialsSection from "../../components/TestimonialsSection";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <video className="hero-video" src={heroVideo} autoPlay loop muted />
        <div className="hero-content">
          <h1 className="hero-title">Möllstrands Trafikskola</h1>
          <p className="hero-description">
            VI ÄR DET SJÄLVKLARA VALET NÄR DU SKA TA KÖRKORT
          </p>
          <button className="hero-button">Erbjudande</button>
        </div>
      </section>

      <section className="steps">
        <h2>Din resa mot körkortet</h2>
        <div className="steps-container">
          {[
            "Planera din start",
            "Synkontroll",
            "Ansöka om körkortstillstånd",
            "Kursinnehåll",
            "Teoretiska och praktiska sessioner",
            "Utvärdering och körprov",
          ].map((step, index) => (
            <div className="step" key={index}>
              {index + 1}. {step}
            </div>
          ))}
        </div>
      </section>

      <section className="info">
        <div className="info-text">
          <h2>Är det dags att ta körkort?</h2>
          <p>
            Då kan du vara säker på att Möllstrands Trafikskola är rätt val för
            dig. Vi hjälper dig från första till sista steget för ditt körkort.
            Hos oss får du alltid bästa möjliga service. Vi erbjuder en
            omfattande utbildning för körkort behörighet B, inklusive
            Handledarkurser, Riskettan, Risk tvåan och Intensivkurser. Våra
            kompetenta och trevliga trafiklärare står redo att ta emot dig. Så
            varmt välkommen till oss!
          </p>
        </div>
        <div className="info-image">
          <img src={secondSectionImage} alt="Our Services" />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <FaBullseye className="feature-icon" />
          <h3>Säkerhet</h3>
          <p>
            Vi sätter alltid trafiksäkerheten i första hand och strävar efter
            att utbilda förare som är väl förberedda för att hantera alla
            utmaningar på vägarna.
          </p>
        </div>
        <div className="feature">
          <FaChartLine className="feature-icon" />
          <h3>Kvalitet</h3>
          <p>
            Vi levererar konsekvent högkvalitativ utbildning med fokus på
            individuella behov och inlärningsstilar.
          </p>
        </div>
        <div className="feature">
          <FaHandsHelping className="feature-icon" />
          <h3>Engagemang</h3>
          <p>
            Erfarna trafiklärare med eleven i fokus. Anpassar utbildning just
            efter dina behov.
          </p>
        </div>
        <div className="feature">
          <FaHandsHelping className="feature-icon" />
          <h3>Tillgänglighet</h3>
          <p>
            Vi erbjuder flexibla och prisvärda utbildningsalternativ som passar
            alla behov.
          </p>
        </div>
      </section>

      <section className="grid">
        <div className="grid-item">
          <h3>
            En professionell körkortsutbildning hos Möllstrands Trafikskola!
          </h3>
          <p>
            Vi erbjuder flexibla alternativ för att uppnå ditt körkort. Du kan
            välja mellan enstaka lektioner, förmånliga paketlösningar eller
            intensiva kurser. Oavsett vilket upplägg du föredrar, är vi här för
            att guida dig. Dessutom tar vi hand om bokningen av ditt
            kunskapsprov och körprov på Trafikverket. Välkommen att kontakta
            Möllstrands Trafikskola, din pålitliga körskola. Vi är alltid
            tillgängliga och redo att hjälpa dig att nå ditt mål.
          </p>
        </div>
        <div className="grid-item">
          <img src={gridSectionImage} alt="Grid Section Image 1" />
        </div>
        <div className="grid-item">
          <img src={gridSectionImage2} alt="Grid Section Image 2" />
        </div>
        <div className="grid-item">
          <h3>Vägen till ditt körkort börjar hos oss!</h3>
          <p>
            På Möllstrands Trafikskola erbjuder vi en kvalificerad och
            professionell körkortsutbildning som ger dig allt du behöver för att
            ta ditt efterlängtade körkort. Vi brinner för trafiksäkerhet och
            strävar efter att ge dig den bästa möjliga utbildningen för att du
            ska känna dig trygg och säker i trafiken.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
