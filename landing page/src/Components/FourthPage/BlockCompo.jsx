import React from 'react'
import Blocks from './Blocks'
import styled from 'styled-components'

const BlockCompo = () => {
  return (
  <BlockCompoContainer>
    
    <Blocks Bicon={"hey"} 
     Btitle="New Feature" 
    Bdescription="Check out the new feature we just launched." 
     />
    <Blocks Bicon={"hey"} 
     Btitle="New Feature" 
    Bdescription="Check out the new feature we just launched." 
     />
    <Blocks Bicon={"hey"} 
     Btitle="New Feature" 
    Bdescription="Check out the new feature we just launched." 
     />
    <Blocks Bicon={"hey"} 
     Btitle="New Feature" 
    Bdescription="Check out the new feature we just launched." 
     />
    
   
    
</BlockCompoContainer>
  )
}

export default BlockCompo

const BlockCompoContainer = styled.div`
.data{
    color: black;
}
    
`