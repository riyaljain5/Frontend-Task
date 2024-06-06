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
<Box>
<Frame>
  <div >
    <img src="/images/Video.png" alt="video" />
  </div>
  <div className='info'>
    <User> 
      <div className='user-detail'><img src="/images/Avatar of team.png" alt="avatar" />
      <h2>Tabish Khan</h2></div>
      <img src="/images/Symbol.png" alt="symbol" />

    </User>
    <p>
    Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.
      </p>

  </div>

</Frame>
</Box>


<img src="/images/Frame 294.png" alt="" />
</Content>
  )
}

export default NinthPage

const Content = styled.div`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;


`

const Box = styled.div` 
margin-top: 63px;
border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 1117px;
  height: 564px;
  align-items: center;
  justify-content: center;
display: flex;
margin-bottom: 35px;
`
const Frame = styled.div`
  width: 1029px;
  height: 464px;
  align-items: center;
  display: flex;
  gap: 24px;
  
  .info{
    display: flex;
    flex-direction: column;
  }

`
const User = styled.div`
  display: flex;
  margin-bottom: 12px;
 
  height:80px;
  width:100%;
  justify-content:space-between;

  h2{
    font-size: 18px;
    font-weight: bold;
  }
  p{
    font-size: 24px;
  }
    img{
    height:62px;
    width:62px;
    }

  .user-detail{
  display:flex;
  left:0;
  margin:0;
  margin-right:20px;
  }

`