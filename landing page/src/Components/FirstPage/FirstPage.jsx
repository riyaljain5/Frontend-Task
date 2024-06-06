import React from 'react'
import styled from 'styled-components'
import { Button, OutlineButton } from '../../styled/Button'

const FirstPage = () => {
  return (
    <MainContainer>
      <div className='nav'>
        <img src="/images/Osumare Logo-01 (2) 4.png" alt="logo" />
        <OutlineButton>Contact us</OutlineButton>
      </div>
      <div className='content'>
        <p className='p1'>Elevate <span style={{ color: "blue", fontWeight:"bolder" }}>Real Estate Success</span> with <br></br>Osumare's Digital Expertise</p>
        <p className='p2'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
        <Button className='btn'>Get Started</Button>
      </div>
      <div className='headerImage'>
        <img src="/images/Header image.png" alt="Header" />
      </div>
    </MainContainer>
  )
}

export default FirstPage

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 20px;
  

  .nav {
    width: 100%;
    display: flex;
    margin-top: 40px;
   justify-content: space-between;
    align-items: center;
    
    

    img {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      
    }
  }

  .p1 {
    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .p2 {
    font-size: 1.5rem;
    text-align: center;
    margin-top:10px;
    font-weight:300;
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
    margin-top:6rem;

    .btn {
      align-self: center;
      margin-top: 20px;
    }
  }

  .headerImage {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    
    img {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 768px) {
      margin-top: 30px;
    }

    @media (max-width: 480px) {
      margin-top: 20px;
    }
  }
`