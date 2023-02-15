import styled, { keyframes } from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: var(--dark-900);
    position:relative;

    h1{
        color:var(--light);
    }
`

export const Wrapper = styled.section`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:80px 0px;

    .effect-ball{
        max-width: 400px;
        width:90%;
        height: 100%;
        left:-200px;
        bottom:-40px;
        position: absolute;

        background: var(--blue);
        filter: blur(5rem);

        border-radius:50%;
    }
`
const Rotate = keyframes`
    0%{
        transform: rotate(0deg);
        border-top:3px solid transparent;
        border-bottom:3px solid transparent;
        border-right-color:var(--orange);
        border-left-color:var(--orange);
    }
    100%{
        transform: rotate(360deg);
        border-top:3px solid transparent;
        border-bottom:3px solid transparent;
        border-right-color:var(--orange);
        border-left-color:var(--orange);
    }
`

export const DivStack = styled.div`
        position: relative;
        display: flex;
        align-items:center;
        justify-content:center;
        padding: 1.3rem;

        .border{
            content: '';
            position:absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border:3px solid var(--blue);
            border-radius:50%;
            transition: 1s all;

        }

        .border:hover{
            animation-name: ${Rotate};
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;

        }
    
`

export const ContainerStack = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap:35px;

    @media(max-width:900px){
        grid-template-columns: auto auto auto auto;
    }
    @media(max-width:600){
        grid-template-columns: auto auto auto;
    }

    z-index:10;
`


