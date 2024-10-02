import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';

export const Inicio = () => {
  return (
    <Div>
      <Menu /> {/* El menú siempre se muestra */}
      
      {/* Contenido de la página de inicio */}
      <Content>
        <Title>Bienvenido a PlantSana</Title>
        <Paragraph>
          PlantSana es una plataforma dedicada a la investigación y tratamiento natural de las plantas. Explora nuestros testimonios, estudios, y tiempos de curación.
        </Paragraph>
      </Content>
    </Div>
  );
};

export default Inicio;

// Estilos
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-family: 'Inria Sans', sans-serif;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 18px;
  font-family: 'Inria Sans', sans-serif;
  color: #666;
  max-width: 600px;
  line-height: 1.5;
`;
