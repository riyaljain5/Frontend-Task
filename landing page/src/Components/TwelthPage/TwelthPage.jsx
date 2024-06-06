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
           <h3 className='address'>Address</h3>
           <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
           </div>
           <div className='contact' style={{marginTop:"32px"}}>
            <h3>Contacts</h3>
            <div>
               
                <div>hello@osumare.in</div>
            </div>
            <div>
                
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
            <div className='icons'>
            <img src="/images/lastIcon/pinterest-fill.png"/>
            <img src="/images/lastIcon/pinterest-fill (1).png"  />
            <img src="/images/lastIcon/pinterest-fill (2).png"/>
            <img src="/images/lastIcon/pinterest-fill (3).png"/>
            <img src="/images/lastIcon/whatsapp-fill.png"/>
            <img src="/images/lastIcon/whatsapp-fill (1).png"/>
            </div>
          
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
height:80%;

text-align: start;

p{
    font-size: 16px;
}
h3{
    font-size: 18px ;
    font-weight: bold;
}

.address{
   margin-top:30px;
}
   .contact {
    
    margin-top: 32px;
    
    h3 {
      margin-bottom: 10px;
    }}
`
const Section2 = styled.div`

height:520px;
width:200px;
left:0;
text-align:center;
ul{
    list-style: none;
    margin-top: 47px;
}
    li{
    margin-bottom:20px;
    }

`
const Section3 = styled.div`
    height:520px;
    object-fit:cover;

    img{
    margin:5px;
    }
`