import React from 'react'
import Heading from '../../styled/Heading'
import styled from 'styled-components'
import { Button } from '../../styled/Button'

const EleventhPage = () => {
  return (
    <Page11Container>
      <Heading
    title="Connect with Our Digital Marketing Experts"
    subtitle="Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together"
/>
  <Frame>
  <FormContainer>
  <LeftSection>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name" />
          <Label>Phone</Label>
          <Input type="text" placeholder="Enter your Number" />
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your Total No of Vehicles:" />
        </LeftSection>
     
        <RightSection>
          <Label>Message</Label>
          <Textarea placeholder="Enter your Message." />
        </RightSection>
  </FormContainer>
        <Button>Get Started</Button>
  </Frame>
</Page11Container>
  )
}

export default EleventhPage

const Page11Container = styled.div`

display: flex;
flex-direction: column;
padding: 20px;
`

const Frame = styled.div`
height: 424px;
width:904px ;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
margin-top: 64px;
border-radius: 16px;

justify-content: space-between;
padding: 20px;
background-color: white;

`
const FormContainer = styled.div`
display:flex;


`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: start;
align-items: start;
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: start;
align-items: start;
`

const Label = styled.label`
font-size: 16px;

  margin-bottom: 8px;
`

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  height: 100%;
`

