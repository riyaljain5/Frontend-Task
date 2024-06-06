import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import { Button } from './Button'

const Page = ({image, desc1, desc2, title,subtitle}) => {
  return (
    <PageContainer>
    <Heading className="heading"
      title={title}
      subtitle={subtitle}/>

    <div className='page2-content'>
      <div className='image-container'>
       {image}
      </div>
      <div className='content'>
        <p className='p1'>{desc1}</p>
        <p className='p2'>{desc2} </p >
        <Button>Get Started</Button>
      </div>
    </div>
  </PageContainer>
  )
}

export default Page


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  .heading {
    margin-top: 60px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-top: 40px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
      margin-top: 20px;
    }
  }

  .page2-content {
    display: flex;
    align-items: center;
    gap: 48px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;

    @media (max-width: 768px) {
      gap: 24px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .content {
    flex: 1;
    max-width: 740px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .p1 {
      font-size: 32px;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 28px;
      }

      @media (max-width: 480px) {
        font-size: 24px;
      }
    }

    .p2 {
      font-size: 24px;
      margin-bottom: 32px;

      @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 24px;
      }

      @media (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 16px;
      }
    }

    button {
      align-self: flex-start;
    }
  }
`
