import React from "react";
import styled, { css } from "styled-components";

const  gradient= degs => css`
background:
linear-gradient(
    ${degs || 130}deg,
    #fc00ff 8%,
    #fc00ff 100%
);
`;

export const Card = styled.div`
position: relative;
overflow: hidden;
width: 300px;
padding: 3rem 0 2rem;
border-radius: 0.5rem;
color: white; 
${gradient()};
box-shadow:0 24px 38px regba(0, 0, 0, 0.25),
0 9px 46px 8px rgba(0, 0, 0, 0.25),
0 11px 15px -7px rgba(0, 0, 0, 0.25);

&::after{
    content: "";
    position: absolute;
    z-index: 0;
    top 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    $gradient(-50)};
    transition: opacity 0.75s;
}
&:hover::after {opacity: 1:}
`;

export const Content = styled.div`
position: relative;
z-index: 3;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Icon =styled.div`
display: flex;
align-items: center;
justify-content: center;
width; 150px;
height: 80px;
flex: 0 0 auto;
margin-top: 2rem;
margin-bottom: 2rem;
border-radius: 50%;
font-size: 60px;
color: white;
${gradient()};
box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const ServiceTitle = styled.div`
font-size: 1.25rem;
`;

export const ServicePrice = styled.div `
font-szie: 3rem;
`;

export const ServicesListItem = styled.div`
display: flex;
justify-content: center;
margin-bottom: 0.325rem ;
`;

export const ActionButton = styled.div `
flex: 0 0 auto;
height: 40px;
padding: 0 2rem;
align-text: center;
margin-top: 1rem;
font-size: 16px;
font-weight: bold;
text-align: center;
margin-bottom: 1rem;
border: 0;
border-radius: 20px;
// color: rgba(o, 0, 0, 0.825);
color: black;
// background: rgba (255, 255, 255, 0.85);
background: white;
box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
transition: background 0.25s;
$:hover{background: rgba(255, 255, 255, 1); }

`;

export const BackgroundSquare = styled.div`
position: absolute;
z-index: 2;
top: 52%;
left: 0%
width: 200%
height: 100%;
background rgba(255, 255, 255, 0.1);
transform: rotate(-3deg);

& > { font-size: 20px;
margin-right: 0.5rem;}
`;