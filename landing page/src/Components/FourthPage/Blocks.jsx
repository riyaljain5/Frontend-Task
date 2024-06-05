import React from 'react'
import styled from 'styled-components'

const Blocks = ({Bicon, Btitle, Bdescription}) => {
  return (
    <BlockContainer>
        <div className='blocks'>
        <Icon>{Bicon}</Icon>
      <Title>{Btitle}</Title>
      <Description>{Bdescription}</Description>
</div>
    </BlockContainer>
  )
}

export default Blocks

const BlockContainer = styled.div`
    .blocks{
        height: 153px;
        width: 586px;
        border-radius: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const Icon = styled.div`
margin-top: 30px;
  height: 52px;
  width: 52px;
  

`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
 
`;

const Description = styled.p`
  font-size: 14px;


  text-align: center;
`;