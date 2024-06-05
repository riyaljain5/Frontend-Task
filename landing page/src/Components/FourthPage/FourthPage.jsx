import React from 'react'
import styled from 'styled-components'

import BlockCompo from './BlockCompo'
import Heading from '../../styled/Heading'

const FourthPage = () => {
  return (
    <Page4Container>
        <Heading
    title = "Navigating Real Estate's Digital Landscape"
    subtitle="Insights for Real Estate Marketing Advantage"/>
    
        <div className='content'>
            <BlockCompo/>
            <img src="/images/rafiki.png" alt="image" />
        </div>

    </Page4Container>
  )
}

export default FourthPage

const Page4Container = styled.main`
align-items: center;
justify-content: center;


.content{
    display: flex;
    gap: 150px;
    margin-top: 90px;
}
`