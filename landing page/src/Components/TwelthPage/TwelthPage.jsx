import React from 'react'
import styled from 'styled-components'

const TwelthPage = () => {
  return (
    <Container>
        <Section1>
           <div className='first'>
           <img src="/images/Osumare Logo-01 (2) 4.png" alt="logo" />
           <p>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
           </div>
           <div>
           <h3>Address</h3>
           <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
           </div>
           <div>
            <h3>Contacts</h3>
            <div>
                <img src="/images/lastIcon/mail-fill.png" alt="" />
                <p>hello@osumare.in</p>
            </div>
            <div>
                <img src="/images/lastIcon/phone-fill (1).png" alt="" />
                <p>+91 8459 8762 26</p>
            </div>
           </div>
        </Section1>
        <Section2>
            <h3>Menu</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Work</li>
                <li>Blog</li>
                <li>Career</li>
            </ul>

        </Section2>
        <Section3>
            <h3>Social</h3>
            <img src="/images/lastIcon/pinterest-fill (1).png"  />
            <img src="/images/lastIcon/pinterest-fill (2).png"/>
            <img src="/images/lastIcon/pinterest-fill (3).png"/>
            <img src="/images/lastIcon/pinterest-fill.png"/>
            <img src="/images/lastIcon/whatsapp-fill (1).png"/>
            <img src="/images/lastIcon/whatsapp-fill.png"/>
</Section3>

         </Container>

  )
}

export default TwelthPage

const Container = styled.div`
height: 713px;
width: 1280px;
background-color: #B0D5FF;
border-radius: 32px;
margin-top: 210px;
display: flex;
justify-content: space-between;
align-items: center;
    
`

const Section1 = styled.div`
width: 440px;
justify-content: start;
text-align: start;

p{
    font-size: 16px;
}
h3{
    font-size: 18px ;
    font-weight: bold;
}

`
const Section2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
ul{
    list-style: none;
    margin-top: 47px;
   
}

`
const Section3 = styled.div`

`