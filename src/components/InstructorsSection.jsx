import styled from "styled-components";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "John Doe",
      bio: "John has been a driving instructor for 15 years and specializes in defensive driving.",
    },
    {
      name: "Jane Smith",
      bio: "Jane is a certified driving instructor with over 10 years of experience.",
    },
    {
      name: "Sam Johnson",
      bio: "Sam focuses on helping nervous drivers become confident on the road.",
    },
  ];

  return (
    <InstructorsContainer>
      <SectionTitle>Meet Our Instructors</SectionTitle>
      <InstructorsList>
        {instructors.map((instructor, index) => (
          <InstructorItem key={index}>
            <InstructorName>{instructor.name}</InstructorName>
            <InstructorBio>{instructor.bio}</InstructorBio>
          </InstructorItem>
        ))}
      </InstructorsList>
    </InstructorsContainer>
  );
};

const InstructorsContainer = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const InstructorsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InstructorItem = styled.div`
  text-align: center;
  margin: 1rem;
  max-width: 300px;
`;

const InstructorName = styled.h3`
  margin-bottom: 0.5rem;
`;

const InstructorBio = styled.p`
  color: #343a40;
`;

export default InstructorsSection;
