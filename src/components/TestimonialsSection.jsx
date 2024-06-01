import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Excellent driving school! I passed my test on the first try.",
    },
    {
      name: "Jane Smith",
      feedback: "The instructors are very patient and knowledgeable.",
    },
    {
      name: "Sam Johnson",
      feedback: "I felt very comfortable and confident during my lessons.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <TestimonialsContainer>
      <SectionTitle>Success Stories</SectionTitle>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialFeedback>{testimonial.feedback}</TestimonialFeedback>
          </TestimonialItem>
        ))}
      </StyledSlider>
    </TestimonialsContainer>
  );
};

const TestimonialsContainer = styled.section`
  padding: 0.3rem;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const TestimonialItem = styled.div`
  text-align: center;
  margin: 1rem;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const TestimonialName = styled.h3`
  margin-bottom: 0.5rem;
`;

const TestimonialFeedback = styled.p`
  color: #343a40;
`;

export default TestimonialsSection;
