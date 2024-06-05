import React from 'react'

import styled from 'styled-components'
import CardCompo from './CardCompo'
import { Button } from '../../styled/Button'
import Heading from '../../styled/Heading'

const ThirdPage = () => {
    return (
    <Page3Container>
        <Heading 
        title="Our Service Offerings"
        subtitle="Strategies that Drive Property Market Excellence"
        />
        

    <div className='card'><CardCompo/></div>
    <Button className='btn'>Get Started</Button>
    
    </Page3Container>


  )
}

export default ThirdPage

const Page3Container = styled.main`
align-items: center;
justify-content: center;


    .btn{
        align-items: center;
margin-top: 68px;

       

    }
`


