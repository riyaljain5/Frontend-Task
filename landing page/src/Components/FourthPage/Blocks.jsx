import React from 'react'
import styled from 'styled-components'

const Blocks = ({Bicon, Btitle, Bdescription}) => {
  return (
    <BlockContainer>
        <div className='blocks'>
          <Icon className='icon'>{Bicon}</Icon>
          <div className='group'>
            <Title>{Btitle}</Title>
            <Description>{Bdescription}</Description>
          </div>
        </div>
    </BlockContainer>
  )
}

export default Blocks

const BlockContainer = styled.div`
  margin-bottom: 16px;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 153px;
    width: 586px;
    border-radius: 16px;
    padding-left: 60px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: auto;
      width: 400px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .group {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    @media (max-width: 768px) {
      margin-left: 0;
      align-items: center;
      text-align: center;
    }
  }
`;

const Icon = styled.div`
  margin: 0;
  height: 52px;
  width: 52px;

  @media (max-width: 768px) {
    margin-top:20px;
    margin-bottom:0;
  }
`;

const Title = styled.h3`
  margin: 0; 
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;