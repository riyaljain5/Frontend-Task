import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const CardCompo = () => {
    return (
        <CardComponent>
            <div className='first'>
                <Card 
                    icon={<img src='/images/logo/Group 117 (7).png'/>}
                    title="Automotive SEO" 
                    description="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today" 
                />
                <Card 
                    icon={<img src='/images/logo/Group 117.png'/>}
                    title="New Feature" 
                    description="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns." 
                />
                <Card 
                    icon={<img src='/images/logo/Group 117 (1).png'/>}
                    title="New Feature" 
                    description="Check out the new feature we just launched." 
                />
                <Card 
                    icon={<img src='/images/logo/Group 117 (2).png'/>}
                    title="New Feature" 
                    description="Check out the new feature we just launched." 
                />
            </div>
            <div className='second'>
                <Card 
                    icon={<img src='/images/logo/Group 117 (8).png'/>}
                    title="New Feature" 
                    description="Check out the new feature we just launched." 
                />
                <Card 
                    icon={<img src='/images/logo/Group 117 (3).png'/>}
                    title="New Feature" 
                    description="Check out the new feature we just launched." 
                />
                <Card 
                    icon={<img src='/images/logo/Group 117 (4).png'/>}
                    title="New Feature" 
                    description="Check out the new feature we just launched." 
                />
                <Card 
                    icon={<img src='/images/logo/Group 117 (5).png'/>}
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
    margin-top: 72px;

    .first, .second {
        display: flex;
        gap: 32px;
        flex-wrap: wrap; /* Allows wrapping on smaller screens */
        justify-content: center; /* Centers the cards in their container */
    }

    @media (max-width: 768px) {
        .first, .second {
            flex-direction: column;
            align-items: center;
        }
    }
`