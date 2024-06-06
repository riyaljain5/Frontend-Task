import React,  { useState } from 'react'
import Heading from '../../styled/Heading'
import styled from 'styled-components'

const TenthPage = () => {
  return (
    <Page10Container><Heading
    title="Frequently Asked Questions"
    subtitle="Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand."
/>
<Content>
        <Dropdown 
          title="3. How does Osumare measure campaign success?" 
          content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
        />
        <Dropdown 
          title="3. How does Osumare measure campaign success?" 
          content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
        />
        <Dropdown 
          title="3. How does Osumare measure campaign success?" 
          content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
        />
      </Content>
</Page10Container>
  )
}

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <DropdownHeader>
        <DropdownTitle isOpen={isOpen}>{title}</DropdownTitle>
        <DropdownIcon isOpen={isOpen}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </DropdownIcon>
      </DropdownHeader>
      {isOpen && <DropdownContent>{content}</DropdownContent>}
    </DropdownContainer>
  )
}
export default TenthPage

const Page10Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 80vh;
  

`
const Content = styled.div`
margin-top: 32px;
  text-align: center;
  height: 50vh;
  width: 50vw;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const DropdownContainer = styled.div`
  background-color: ${props => (props.isOpen ? '#007bff' : 'white')};
  color: ${props => (props.isOpen ? 'white' : 'black')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: ${props => (props.isOpen ? '0 4px 16px rgba(0, 123, 255, 0.7)' : 'none')};
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

`

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DropdownTitle = styled.div`
  font-size: 18px;
  
`

const DropdownIcon = styled.div`
  transition: transform 0.3s;
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const DropdownContent = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`



