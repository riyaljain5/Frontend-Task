import React from 'react'
import styled from 'styled-components'

const Heading = ({title, subtitle}) => {
  return (
    <Head>
        <div className='head'>
            <h2>{title}</h2>
            <p> {subtitle}</p>
    </div>
    </Head>
  )
}

export default Heading

const Head = styled.div`align-items: center;
justify-content: center;
.head{
    display: flex;
    flex-direction: column;
    margin-top: 235px;

}
h2{
    font-size: 32px;
    font-weight: bold;
    align-items: center;
}
p{
    font-size: 24px;
    align-items: center;

}
    
`