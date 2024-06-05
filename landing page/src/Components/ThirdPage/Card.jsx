import React from 'react'
import styled from 'styled-components'
const Card = ({icon, title, description}) => {
 
  return (
 
    <OfferCard>
         <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>


    </OfferCard>
  )
}

export default Card

const OfferCard = styled.div`
display: flex;
flex-direction: column;
height:239px;
width: 297px;
border-radius: 8px;
align-items: center;
  justify-content: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

`
    

const Icon = styled.div`
margin-top: 30px;
  height: 52px;
  width: 52px;
  margin-bottom: 8px;

`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 18px;
  
`;

const Description = styled.p`
  font-size: 14px;
  max-width: 260px;

  text-align: center;
`;
