import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaCogs,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import CountUp from "react-countup";
import photo1 from "../../assets/imgs/8m.png";
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      name: "Johan Möllstrand",
  
      photo: photo1,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Nahwand Mamo",
      photo: photo1,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Rizgar Mahmod",
      photo: photo1,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  const howItWorks = [
    {
      icon: <FaCogs />,
      title: "Förtroende",
      description: "Förtroende är nycklen till Möllstrands Trafikskolas framgång. Vi bygger starka relationer med kunder, partner, ägare och tillsynsmyndigheter genom en extremt hög etisk och moralisk standard.",
    },
    {
      icon: <FaRocket />,
      title: "Säkerhet",
      description: "Köra bil är roligt men medörs vissa risker, därför jobbar vi aktivt på Möllstrands Trafikskola för att identifiera risker i god tid och hur man undviker dem, ge konkreta råd och skapa en trygg inlärningsmiljö. ",
    },
    {
      icon: <FaChartLine />,
      title: "Kundfokus",
      description: "Vi sträver alltid efter långsiktiga kundrelationer och anpassa utbildningen efter dina behov.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <ReactTypingEffect
          text={["Välkommen till Möllstrands Trafikskola"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1000}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return <span key={key}>{char}</span>;
                })}
              </h1>
            );
          }}
        />
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section">
        <h2>Om oss</h2>
        <div className="cards-container">
          {howItWorks.map((item, index) => (
            <div key={index} className="card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers Section */}
      <div className="numbers-section">
        <div className="number">
          <h3>Kvalitet</h3>
          <p>
            <CountUp start={0} end={100} duration={3} />
          </p>
        </div>
        <div className="number">
          <h3>Engagemang</h3>
          <p>
            <CountUp start={0} end={100} duration={3} />
          </p>
        </div>
        <div className="number">
          <h3>Respekt</h3>
          <p>
            <CountUp start={0} end={100} duration={3} />
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <div className="social-icons">
              <a href={member.social.facebook}>
                <FaFacebook />
              </a>
              <a href={member.social.twitter}>
                <FaTwitter />
              </a>
              <a href={member.social.linkedin}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
