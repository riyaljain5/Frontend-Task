import React from 'react'
import Card from './Card'
import styled from 'styled-components'


const CardCompo = () => {
  return (
    <CardComponent>
        <div className='first'>
        
    <Card 
    icon={<img src='/images/logo/Group 117.png'/>}
    title="Automotive SEO" 
    description="Drive Your Success with" 
/>

<Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>

<Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>

<Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>
        </div>

        <div className='second'>
        <Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>
<Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>
<Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>
<Card 
    icon= {"hey"}
    title="New Feature" 
    description="Check out the new feature we just launched." 
/>
        </div>

</CardComponent>
  )
}

export default CardCompo

const CardComponent = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
.first
{
    display: flex;
    gap: 32px;

}
.second{
    display: flex;
    gap: 32px;

}
    
`