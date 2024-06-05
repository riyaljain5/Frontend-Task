import React from 'react'
import { Button } from '../../styled/Button'
import styled from 'styled-components'
import ThirdPage from '../ThirdPage/ThirdPage'
import Heading from '../../styled/Heading'

const SecondPage = () => {
  return (
    <PageContainer>
        <Heading className="heading"
        title="Real Estate-Focused Digital Mastery"
        subtitle=""/>
        
        <div className='page2-content'>
            <div>
                <img src="/images/cuate.png" alt="" />
            </div>
            <div className='content'>
                <p className='p1'>Unlock the Potential of Digital Real Estate Excellence</p>
                <p className='p2'>
                At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
                </p >
                <Button>Get Started</Button>

            </div>
        </div>

    </PageContainer>
  )
}

export default SecondPage

const PageContainer = styled.div`
align-items: center;
justify-content: center;
.heading{
    margin-top: 200px;
    font-size: 32px;
    font-weight: bold;
    align-items: center;
justify-content: center;
margin-top: 60px;
}

.page2-content{
    display: flex;
align-items: center;
gap: 48px;
}
.p1{
    font-size: 32px;
    font-weight: bold;
}

.p2{
    font-size: 24px;
    margin-bottom: 32px;
}
.content{
    max-width: 740px;
    justify-content: start;
   

}

`