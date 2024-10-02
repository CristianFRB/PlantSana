import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  // Manejo de clic en el logo
  const handleLogoClick = () => {
    navigate('/inicio');
  };

  return (
    <MenuContainer>
      <Logo onClick={handleLogoClick}>PlantSana</Logo>
      <LinksContainer>
        <StyledLink to="/inicio">Inicio</StyledLink>
        <StyledLink to="/investigacion">Investigación</StyledLink>
        <StyledLink to="/testimonios">Testimonios</StyledLink>
        <StyledLink to="/tiempo-de-curacion">Tiempo de curación</StyledLink>
      </LinksContainer>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.nav`
  background-color: #4CD43A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: 'Inria Sans', sans-serif;
`;

const Logo = styled.div`
  font-family: 'Irish Grover', cursive;
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
