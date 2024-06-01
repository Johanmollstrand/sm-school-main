import styled from "styled-components";

const PricingSection = () => {
  const pricingPlans = [
    { plan: "Basic", price: "$100", features: ["5 lessons", "Basic car"] },
    {
      plan: "Standard",
      price: "$200",
      features: ["10 lessons", "Standard car"],
    },
    { plan: "Premium", price: "$300", features: ["15 lessons", "Premium car"] },
  ];

  return (
    <PricingContainer>
      <SectionTitle>Pricing Plans</SectionTitle>
      <PricingList>
        {pricingPlans.map((plan, index) => (
          <PricingItem key={index}>
            <PricingPlan>{plan.plan}</PricingPlan>
            <PricingPrice>{plan.price}</PricingPrice>
            <PricingFeatures>
              {plan.features.map((feature, index) => (
                <Feature key={index}>{feature}</Feature>
              ))}
            </PricingFeatures>
          </PricingItem>
        ))}
      </PricingList>
    </PricingContainer>
  );
};

const PricingContainer = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 1rem;
  }
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

const PricingList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PricingItem = styled.div`
  text-align: center;
  margin: 1rem;
  max-width: 200px;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 150px;
    margin: 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const PricingPlan = styled.h3`
  margin-bottom: 0.5rem;
`;

const PricingPrice = styled.p`
  font-size: 1.5rem;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  margin-bottom: 0.5rem;
`;

export default PricingSection;
