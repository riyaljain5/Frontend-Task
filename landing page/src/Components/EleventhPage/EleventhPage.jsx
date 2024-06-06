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
            <div>Name</div>
            <Input type="text" placeholder="Enter your name" />
            <div>Phone</div>
            <Input type="text" placeholder="Enter your Number" />
            <div>Email</div>
            <Input type="email" placeholder="Enter your Email" />
          </LeftSection>
          <RightSection>
            <div>Message</div>
            <Textarea placeholder="Enter your Message." />
          </RightSection>
        </FormContainer>
        <ButtonContainer>
          <Button>Get Started</Button>
        </ButtonContainer>
      </Frame>
    </Page11Container>
  )
}

export default EleventhPage

const Page11Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  padding: 20px;
`

const Frame = styled.div`
  width: 60vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 64px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Make sure the form container takes full width */
`

const LeftSection = styled.div`
  width:50%;
  padding:20px;
  font-weight:500;
  
`

const RightSection = styled.div`
  padding:20px;
  width: 50%;
  font-weight:500;

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
  width: 380px;
`

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  width: 100%;
  height: 190px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`