import React from 'react'
import Blocks from './Blocks'
import styled from 'styled-components'

const BlockCompo = () => {
  return (
    <BlockCompoContainer>
      <Blocks 
        Bicon={<img src='/images/block icons/Group 116.png' alt="icon" />} 
        Btitle="Market Trends Analysis" 
        Bdescription="Predictive insights to guide real estate strategies." 
      />
      <Blocks 
        Bicon={<img src='/images/block icons/Group 116 (1).png' alt="icon" />} 
        Btitle="Targeted Buyer Persona" 
        Bdescription="Understand and connect with your ideal property buyers." 
      />
      <Blocks 
        Bicon={<img src='/images/block icons/Group 116 (2).png' alt="icon" />} 
        Btitle="Competitor Insights" 
        Bdescription="Stand out in the property market with informed strategies." 
      />
      <Blocks 
        Bicon={<img src='/images/block icons/Group 116 (3).png' alt="icon" />} 
        Btitle="Visual Content Appeal" 
        Bdescription="Captivate buyers with appealing visuals and immersive experiences." 
      />
    </BlockCompoContainer>
  )
}

export default BlockCompo

const BlockCompoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
`