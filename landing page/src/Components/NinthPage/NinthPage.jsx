import React from 'react'
import Heading from '../../styled/Heading'
import styled from 'styled-components'

const NinthPage = () => {
  return (
    <Content>
        <Heading
    title="What Our Pharma Partners Say"
    subtitle="Driving Transformations, One Brand at a Time"
/>
<div className='image'>
<img src="/images/Testimonial card.png" alt="" />
</div>
<img src="/images/Frame 294.png" alt="" />
</Content>
  )
}

export default NinthPage

const Content = styled.div`
align-items: center;
justify-content: center;
.image{
    margin-top: 50px;
}
`