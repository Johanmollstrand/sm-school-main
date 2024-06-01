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
          <h1 className="hero-title">Welcome to Our Website</h1>
          <p className="hero-description">
            We provide amazing services to boost your business.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Moving Line Section */}
      <div className="moving-line-section">
        <h2>Progress Steps</h2>
        <div className="steps-container">
          <div className="step">1. Contact</div>
          <div className="step">2. Study</div>
          <div className="step">3. Training</div>
          <div className="step">4. Pass</div>
        </div>
        <div className="line-container">
          <div className="line"></div>
        </div>
      </div>

      <section className="second-section">
        <div className="second-section-text">
          <h2 className="second-section-title">About Us</h2>
          <p className="second-section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
            cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
            nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
            nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
        <div className="second-section-svg">
          <img src={secondSectionImage} alt="Our Services" />
        </div>
      </section>

      <section className="third-section">
        <div className="third-section-overlay"></div>
        <div className="third-section-content">
          <h2 className="third-section-title">Why Choose Us</h2>
          <p className="third-section-description">
            Discover the reasons why our services stand out in the industry. We
            provide tailored solutions, exceptional support, and a commitment to
            excellence that ensures your success.
          </p>
        </div>
      </section>

      <section className="fourth-section">
        <div className="fourth-section-overlay"></div>
        <div className="fourth-section-content">
          <h2 className="fourth-section-title">Our Vision</h2>
          <p className="fourth-section-description">
            Our vision is to revolutionize the industry with innovative
            solutions and unparalleled service. We strive to exceed expectations
            and drive success for our clients through our commitment to
            excellence.
          </p>
          <div className="cards">
            <div className="card">
              <FaBullseye className="card-icon" />
              <h3 className="card-title">Precision</h3>
              <p className="card-description">
                We aim for precise results in every project we undertake.
              </p>
            </div>
            <div className="card">
              <FaChartLine className="card-icon" />
              <h3 className="card-title">Growth</h3>
              <p className="card-description">
                Our strategies ensure consistent growth for our clients.
              </p>
            </div>
            <div className="card">
              <FaHandsHelping className="card-icon" />
              <h3 className="card-title">Support</h3>
              <p className="card-description">
                We offer unwavering support to our clients at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-item grid-item-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            recusandae, minus fugit illum explicabo reiciendis aliquam placeat.
            Fugit nobis nostrum ducimus quibusdam iusto omnis ipsum sint ut ad
            nemo quis, atque necessitatibus autem voluptatum dolore placeat,
            nesciunt odit adipisci distinctio eos aperiam, illo illum.
            Blanditiis molestiae illo fugiat error commodi.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            quos quam perspiciatis corrupti exercitationem debitis praesentium
            provident ratione harum eum aliquam atque reiciendis, sit earum
            repellat odio fugit saepe quidem cupiditate nesciunt. Molestiae
            velit cupiditate fuga omnis voluptatibus saepe reprehenderit unde
            quam. Nulla qui accusantium, esse ipsa aperiam similique labore?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
