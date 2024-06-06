import React from 'react'
import styled from 'styled-components'
import Element from './Element'

const ElementCompo = () => {
  return (
    <MainContainer>
    <div className='first'>
    <Element 
    image={<img src="/images/icon/icon.png" alt="icon" />}
    title="Call-to-Action Optimization"
    desc="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
     />
     <Element 
    image={<img src="/images/icon/icon (1).png" alt="icon" />}
    title="Landing Page Efficiency"
    desc="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
     />
    </div>
    <div className='second'>
    <Element 
    image={<img src="/images/icon/icon (2).png" alt="icon" />}
    title="Social Proof Utilization"
    desc="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action."
     />
     <Element 
    image={<img src="/images/icon/icon (3).png" alt="icon" />}
    title="Mobile-Friendly Experience"
    desc="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
     />
    </div>
    </MainContainer>

  )
}

export default ElementCompo

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