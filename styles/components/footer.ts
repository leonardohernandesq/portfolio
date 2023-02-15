import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:var(--dark-900);
    z-index:1;

    @media(max-width:800px){
        height:85px;
    }
`
export const Footer = styled.footer`
    max-width:1200px;
    width: 90%;
    display: flex;
    justify-content:center;
    align-items:center;
    color:var(--light);
    font-size:0.875rem;

    @media(max-width:800px){
        flex-direction:column;
    }
`