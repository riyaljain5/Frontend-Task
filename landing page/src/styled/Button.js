import styled from "styled-components";

export const Button = styled.button`
padding: 10px 18px;
color: white;
min-width: 220px;
background: blue;
border-radius: 32px;
border: none;
font-size: 18px;
border: 1px solid transparent;
cursor: pointer;
transition: 0.4s background ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;

}

    
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover{
    background-color: blue;
    border: 1px solid transparent;
    color: white;
}

`;