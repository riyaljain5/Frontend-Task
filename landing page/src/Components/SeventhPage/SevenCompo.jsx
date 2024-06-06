import React from 'react'
import Element from '../SixthPage/Element'
import styled from 'styled-components'

const SevenCompo = () => {
  return (
    <MainContainer>
    <div className='first'>
    <Element 
    image={<img src="/images/sevenicon/icon.png" alt="icon" />}
    title="Effective CTAs"
    desc=" See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
     />
     <Element 
    image={<img src="/images/sevenicon/icon (1).png" alt="icon" />}
    title="Conversion-Optimized Landing Pages"
    desc="Explore a case study where our landing page optimization increased property lead conversion rates by 30%"
     />
    </div>
    <div className='second'>
    <Element 
    image={<img src="/images/sevenicon/icon (2).png" alt="icon" />}
    title="Trust Building with Social Proof"
    desc="Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project"
     />
     <Element 
    image={<img src="/images/sevenicon/icon (3).png" alt="icon" />}
    title="Mobile-First Success:"
    desc=" Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency."
     />
    </div>
    </MainContainer>
   
  )
}

export default SevenCompo


const MainContainer = styled.div`
display:flex;
flex-direction: column;



.first{
  display: flex;
  margin-right: 32px;

}
.second{
  display: flex;
  margin-right: 32px;
}
`