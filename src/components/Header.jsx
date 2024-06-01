import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa"; // Icon for the mobile menu toggle

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>Traffic School</Logo>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/about">About</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/services">Services</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/faq">FAQ</StyledLink>
        </MenuItem>
      </Menu>
      <EnrollButton>Enroll Now</EnrollButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    width: 100%;
    text-align: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #28a745; /* Change color to green on hover */
    transform: scale(1.1); /* Zoom effect on hover */
  }
`;

const EnrollButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
  }

  &:hover {
    background-color: #218838;
  }
`;

export default Header;
