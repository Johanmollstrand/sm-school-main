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
          Our Services
        </motion.h1>
      </header>

      <div className="pricing-divider">
        <h2>Our Services</h2>
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
        <h2>Our Courses</h2>
      </div>

      <motion.section
        className="service-cards-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="card">
          <img src={CardImg1} alt="Instructor Training" />
          <h3>Instructor Training</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered.
          </p>
          <button className="button">Read More</button>
        </div>
        <div className="card">
          <img src={CardImg2} alt="Road Safety Guide" />
          <h3>Road Safety Guide</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered.
          </p>
          <button className="button">Read More</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="Driving License" />
          <h3>Driving License</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered.
          </p>
          <button className="button">Read More</button>
        </div>
      </motion.section>

      <div className="pricing-divider">
        <h2>Our Pricing</h2>
      </div>

      <motion.section
        className="pricing-cards-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="pricing-card">
          <div className="price-banner">$200</div>
          <h3>Beginner Driving Course</h3>
          <div className="details">
            <p>Duration: 15 Days</p>
            <p>Lessons: 15</p>
            <p>Skill Level: Beginner</p>
            <p>Car Type: Basic Model</p>
          </div>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="pricing-card">
          <div className="price-banner">$150</div>
          <h3>Defensive Driving Course</h3>
          <div className="details">
            <p>Duration: 10 Days</p>
            <p>Lessons: 10</p>
            <p>Skill Level: Intermediate</p>
            <p>Car Type: Standard Model</p>
          </div>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="pricing-card">
          <div className="price-banner">$100</div>
          <h3>Refresher Course</h3>
          <div className="details">
            <p>Duration: 5 Days</p>
            <p>Lessons: 5</p>
            <p>Skill Level: Advanced</p>
            <p>Car Type: Premium Model</p>
          </div>
          <button className="apply-button">Apply Now</button>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
