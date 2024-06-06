import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled/Button'
import Heading from '../../styled/Heading'
import BackgroundImage from '/images/bg/Ellipse 193.png'

const EighthPage = () => {
  return (
    <Container>
    <Heading className="Heading"
            title="Your Peace of Minds"
            subtitle="Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market"
        />
      <Button className='btn'>Get Started</Button>
      </Container>
    
  )
}

export default EighthPage

const Container =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 170px;
text-align: center;
height: 80vh;

  max-width: 780px;

.btn {
  align-self: center;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 220px;
}
  
  .Heading{
    max-width: 780px;
  }
`
