import React from 'react'
import styled from 'styled-components'

const Element = ({image, title, desc}) => {
  return (
    <ElementContainer>
        <Image> {image}</Image>
        <Title>{title}</Title>
        <Description>{desc}</Description>
</ElementContainer>
  )
}

export default Element
const ElementContainer = styled.div`
  margin-top: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right:32px;
  width: 100%;
`

const Image = styled.div`
  margin-bottom: 30px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 50px;
`