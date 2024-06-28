import { useEffect, useState } from "react";
import "./Services.css";
import SerImg1 from "../../assets/imgs/2.png";
import SerImg2 from "../../assets/imgs/3.png";
import SerImg3 from "../../assets/imgs/4.png";
import CardImg1 from "../../assets/imgs/2.png"; // Update with the correct path
import CardImg2 from "../../assets/imgs/3.png"; // Update with the correct path
import CardImg3 from "../../assets/imgs/4.png"; // Update with the correct path
import { motion } from "framer-motion";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [SerImg1, SerImg2, SerImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="services-container">
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Våra tjänster
        </motion.h1>
      </header>

      <div className="pricing-divider">
        <h2>Utbildningar</h2>
      </div>
      <div className="services-slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-divider">
        <h2>Utbildningar</h2>
      </div>

      <motion.section
        className="service-cards-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="card">
          <img src={CardImg1} alt="Instructor Training" />
          <h3>Körkort för bil</h3>
          <p>
          Vi erbjuder körkortsutbildning för både manuell och automatbil..
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg2} alt="Road Safety Guide" />
          <h3>Intensivkurs för bil</h3>
          <p>
          Med start varje vecka året runt, boka din utbildning redan idag!
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Handledarkurs</h3>
          <p>
          Introduktionsutbildning för handledare och elev. På kvällar och helger.
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Riskettan</h3>
          <p>
          Riskutbildning del 1. Obligatorisk för alla elever som ska ta B-körkort.
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Körkortsfrågor</h3>
          <p>
          Plugga körkortsteori på elevcentralen. Anpassat för mobil, dator och surfplatta.
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Teoriböcker</h3>
          <p>
          Komplett teorimaterial för din körkortsutbildning.
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Risk Tvåan (Halkan)</h3>
          <p>
          Riskutbildning del 2. Obligatorisk för alla elever som ska ta B-körkort.
          </p>
          <button className="button">Läs mer</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Språk hjälp</h3>
          <p>
          Vi har lärare som talar olika språk, för dig som har lite svårt med svenska. 
          </p>
          <button className="button">Läs mer</button>
        </div>
        
      </motion.section>

      <div className="pricing-divider">
        <h2>Våra priser</h2>
      </div>

      <motion.section
        className="pricing-cards-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="pricing-card">
          <div className="price-banner">Silver paket</div>
          <h3>Silver paket</h3>
          <div className="details">
            <p>Teoripaket </p>
            <p>8 Körlektioner á 40 minuter</p>
            <p>Riskettan</p>
            <p>Risktvåan (Halkan)</p>
            <p>Hyra av bil i samband med uppkörning</p>
          </div>
          <button className="apply-button">Boka nu</button>
        </div>
        <div className="pricing-card">
          <div className="price-banner">Guld Paket</div>
          <h3>Guld paket</h3>
          <div className="details">
            <p>Teoripaket</p>
            <p>16 kör lektioner á 40 minuter</p>
            <p>Riskettan</p>
            <p>Risktvåan (Halkan)</p>
            <p>Hyra av bil i samband med uppkörning
            </p>
          </div>
          <button className="apply-button">Boka nu</button>
        </div>
        <div className="pricing-card">
          <div className="price-banner">Premium paket</div>
          <h3>Premium paket</h3>
          <div className="details">
            <p>Teoripaket</p>
            <p>24 kör lektioner á 40 minuter</p>
            <p>Riskettan</p>
            <p>Risktvåan (Halkan)</p>
            <p>Hyra av bil i samband med uppkörning</p>
          </div>
          <button className="apply-button">Boka nu</button>
        </div>
        <div className="pricing-card">
          <div className="price-banner">Prislista</div>
          <h3>Våra priser</h3>
          <div className="details">
            <p>1 Körlektion á 40min 599: -</p>
            <p>5 Körlektioner á 40min 2995: -</p>
            <p>10 Körlektioner á 40min 5990: -</p>
            <p>Introduktionsutbildning 399: -</p>
            <p>​Riskutbildning 1 (Riskettan) 750: –</p>
            <p>Riskutbildning 2 (Halkan) 2300: –</p>
            <p>Uppkörningsavgift
            ​Uppvärmningslektion & hyra av bil 1400:–</p>
          </div>
        
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
