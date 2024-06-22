import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/imgs/möllstrands.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Möllstrands Trafikskola Logo" />
        </Link>
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <StyledLink to="/" onClick={closeMenu}>
            Hem
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/about" onClick={closeMenu}>
            Om oss
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/services" onClick={closeMenu}>
            Tjänster
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contact" onClick={closeMenu}>
            Kontakt
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/faq" onClick={closeMenu}>
            FAQ
          </StyledLink>
        </MenuItem>
      </Menu>
      
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffa500;
  color: #000;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  img {
    height: 70px;
  }
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
  color: #000;
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