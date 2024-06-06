import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled/Button'
import Heading from '../../styled/Heading'

const EighthPage = () => {
  return (
    <Container>
    <Heading
            title="Your Peace of Minds"
            subtitle="Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market"
        />
      <Button className='btn'>Get Started</Button>
      </Container>
    
  )
}

export default EighthPage

const Container =  styled.div`
align-items: center;
justify-content: center;

.btn {
  align-self: center;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
  
`

