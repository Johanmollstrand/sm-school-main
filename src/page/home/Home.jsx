import "./Home.css";
import { FaBullseye, FaChartLine, FaHandsHelping } from "react-icons/fa";
import heroVideo from "../../assets/imgs/vid1.mp4";
import secondSectionImage from "../../assets/imgs/2s.jpeg";
import gridSectionImage from "../../assets/imgs/2.png";
import gridSectionImage2 from "../../assets/imgs/3.png";
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

      {/* Moving Line Section */}
      <div className="moving-line-section">
        <h2>Din resa mot körkortet</h2>
        <div className="steps-container">
          <div className="step">1. Planera din start</div>
          <div className="step">2. Synkontroll</div>
          <div className="step">3. Ansöka om körkorttillstånd</div>
          <div className="step">4. Kursinnehåll</div>
          <div className="step">5. Teoeriska och praktiska sessioner</div>
          <div className="step">6. Utfädering och körprov</div>
        </div>
        <div className="line-container">
          <div className="line"></div>
        </div>
      </div>

      <section className="second-section">
        <div className="second-section-text">
          <h2 className="second-section-title">Är det dags att ta körkort?</h2>
          <p className="second-section-description"> Då kan du vara säker på att Möllstrands Trafikskola är rätt val för dig. Vi hjälper dig från första till sista steget för ditt körkort. Hos oss får du alltid bästa möjliga service. Vi erbjuder en omfattande utbildning för körkort behörighet B, inklusive Handledarkurser, Riskettan, Risk tvåan och Intensivkurser. Våra kompetenta och trevliga trafiklärare står redo att ta emot dig. Så varmt välkommen till oss!
Våra erfarna och engagerade utbildare har en gedigen kunskap om trafiksäkerhet och pedagogik. De brinner för att hjälpa dig att nå dina mål och att du ska känna dig trygg och säker i trafiken. Vi erbjuder en personlig och individanpassad utbildning som tar hänsyn till dina behov och din inlärningsstil.

          </p>
        </div>
        <div className="second-section-svg">
          <img src={secondSectionImage} alt="Our Services" />
        </div>
      </section>

      <section className="third-section">
        <div className="third-section-overlay"></div>
        <div className="third-section-content">
          <h2 className="third-section-title">Därför bör du välja just Möllstrands Trafikskola</h2>
          <p className="third-section-description">
          Erfarenheten har lärt oss hur viktigt det är att skapa engagemang och drivkraft hos vår personal för att kunna bli bäst på det vi gör. Dessutom har vår vilja att prestera sin grund i värderingar som har utvecklats över tid. Dessa värderingar har skapat en röd tråd som genomsyrar hela vår verksamhet. Det är precis denna sammanhängande kultur som utmärker vårt företag och som kontinuerligt får oss att växa och förbättra oss!
          </p>
        </div>
      </section>

      <section className="fourth-section">
        <div className="fourth-section-overlay"></div>
        <div className="fourth-section-content">
          <h2 className="fourth-section-title">Vår vision</h2>
          <p className="fourth-section-description">
          Att bli den mest betrodda och respekterade trafikskolan och dess omnejd, känd för vårt engagemang för trafiksäkerhet, högkvalitativ utbildning och exceptionell kundservice.
          </p>
          <div className="cards">
            <div className="card">
              <FaBullseye className="card-icon" />
              <h3 className="card-title">Säkerhet</h3>
              <p className="card-description">
              Vi sätter alltid trafiksäkerheten i första hand och strävar efter att utbilda förare som är väl förberedda för att hantera alla utmaningar på vägarna.
              </p>
            </div>
            <div className="card">
              <FaChartLine className="card-icon" />
              <h3 className="card-title">Kvalitet</h3>
              <p className="card-description">
              Vi levererar konsekvent högkvalitativ utbildning med fokus på individuella behov och inlärningsstilar.
              </p>
            </div>
            <div className="card">
              <FaHandsHelping className="card-icon" />
              <h3 className="card-title">Engagemang</h3>
              <p className="card-description">
              Vi levererar konsekvent högkvalitativ utbildning med fokus på individuella behov och inlärningsstilar.
              </p>
            </div>
            <div className="card">
              <FaHandsHelping className="card-icon" />
              <h3 className="card-title">Tillgänglighet</h3>
              <p className="card-description">
              Vi erbjuder flexibla och prisvärda utbildningsalternativ som passar alla behov.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-item grid-item-text">
          <p>
          <h3>En professionell körkortsutbildning hos Möllstrands Trafikskola!</h3> 
          Vi erbjuder flexibla alternativ för att uppnå ditt körkort. Du kan välja mellan enstaka lektioner, förmånliga paketlösningar eller intensiva kurser. Oavsett vilket upplägg du föredrar, är vi här för att guida dig. Dessutom tar vi hand om bokningen av ditt kunskapsprov och körprov på Trafikverket.
Välkommen att kontakta Möllstrands Trafikskola, din pålitliga körskola. Vi är alltid tillgängliga och redo att hjälpa dig att nå ditt mål.”

          </p>
        </div>
        <div className="grid-item">
          <img src={gridSectionImage} alt="Grid Section Image 1" />
        </div>
        <div className="grid-item">
          <img src={gridSectionImage2} alt="Grid Section Image 2" />
        </div>
        <div className="grid-item grid-item-text">
          <p>
          
        <h3>Vägen till ditt körkort börjar hos oss!</h3>
På Möllstrands Trafikskola erbjuder vi en kvalificerad och professionell körkortsutbildning som ger dig allt du behöver för att ta ditt efterlängtade körkort. Vi brinner för trafiksäkerhet och strävar efter att ge dig den bästa möjliga utbildningen för att du ska känna dig trygg och säker i trafiken.

          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
