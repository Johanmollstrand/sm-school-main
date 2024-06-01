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
import photo1 from "../../assets/imgs/anst1.jpeg";
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      photo: photo1,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "Jane Smith",
      photo: photo1,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  const howItWorks = [
    {
      icon: <FaCogs />,
      title: "Step 1",
      description: "Description of how step 1 works.",
    },
    {
      icon: <FaRocket />,
      title: "Step 2",
      description: "Description of how step 2 works.",
    },
    {
      icon: <FaChartLine />,
      title: "Step 3",
      description: "Description of how step 3 works.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <ReactTypingEffect
          text={["WELCOME TO US"]}
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
        <h2>How It Works</h2>
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
          <h3> + Clients</h3>
          <p>
            <CountUp start={0} end={1800} duration={3} />
          </p>
        </div>
        <div className="number">
          <h3>+ Success Rate</h3>
          <p>
            <CountUp start={0} end={100} duration={3} />
          </p>
        </div>
        <div className="number">
          <h3>+ Quality</h3>
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
