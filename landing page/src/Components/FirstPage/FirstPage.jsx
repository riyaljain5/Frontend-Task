import React from 'react'
import styled from 'styled-components'
import { Button, OutlineButton } from '../../styled/Button'
import SecondPage from '../SecondPage/SecondPage'
import ThirdPage from '../ThirdPage/ThirdPage'

const FirstPage = () => {
  return (

    <MainContainer>
        <nav>
           
                <img src="/images/Osumare Logo-01 (2) 4.png" alt="logo" />
                <OutlineButton>Contact us</OutlineButton>
        </nav>
        <div className='content'>
            <p className='p1'>Elevate Real Estate Success with Osumare's Digital Expertise </p>
            <p className='p2'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
            <Button className='btn'>Get Started</Button>
        </div>
        <div className='headerImage'>
        <img src="/images/Header image.png" alt="" />
        </div>
        
       
    </MainContainer>
    
  )
}

export default FirstPage

const MainContainer = styled.main`
display: flex;
flex-direction: column;
margin: 0 auto;
  max-width: 1440px;



    nav{
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  gap: 800px;
  align-items: center;
}

.p1{
    font-size: 48px;
}
.p2{
   font-size: 24px;
}

.content{
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 1000px;
}
.btn{
    align-items: center;
}

.headerImage{
  margin-top: 50px;
}
    
`