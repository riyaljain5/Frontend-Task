import React from 'react'
import styled from 'styled-components'
import BlockCompo from './BlockCompo'
import Heading from '../../styled/Heading'

const FourthPage = () => {
  return (
    <Page4Container>
        <Heading
            title="Navigating Real Estate's Digital Landscape"
            subtitle="Insights for Real Estate Marketing Advantage"
        />
        <div className='content'>
            <BlockCompo/>
            <img src="/images/rafiki.png" alt="image" />
        </div>
    </Page4Container>
  )
}

export default FourthPage

const Page4Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .content {
        display: flex;
        gap: 150px;
        margin-top: 90px;

        @media (max-width: 1024px) {
            gap: 50px;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }
`