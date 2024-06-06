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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .btn {
        margin-top: 68px;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .btn {
            margin-top: 40px;
        }
    }

    @media (max-width: 480px) {
        .btn {
            width: 100%;
            margin-top: 20px;
        }
    }
`