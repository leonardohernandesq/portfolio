import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    #stacks{
        width: 100%;
        background-color: var(--dark-900);
    }
`

export const Wrapper = styled.section`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:50px 0px;

    @media(max-width:50rem){
        flex-direction:column;
    }
`

export const WrapperBanner = styled.section`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;

    @media(max-width:50rem){
        flex-direction:column;
    }
`

export const Banner = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:-80px;
    width:100%;
    height:700px;
    background-color:var(--dark-900);
    color:var(--light);
    z-index:1;

    h1{
        margin-bottom:11.2px;
        font-size:4rem;
    }

    .glitch {
    font-size:4rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0.05em 0 0 var(--blue), -0.03em -0.04em 0 var(--light),
    0.025em 0.04em 0 var(--blue);
    animation: glitch 725ms infinite;
    }

    .glitch span {
        position: absolute;
        top: 0;
        left: 0;
    }

    .glitch span:first-child {
        animation: glitch 2s infinite;
        clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        transform: translate(-0.04em, -0.03em);
        opacity: 0.75;
    }

    .glitch span:last-child {
        animation: glitch 1s infinite;
        clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        transform: translate(0.04em, 0.03em);
        opacity: 0.75;
    }

    @keyframes glitch {
        0% {
        text-shadow: 0.05em 0 0 var(--blue), -0.03em -0.04em 0 var(--light),
            0.025em 0.04em 0 var(--orange);
        }
        15% {
        text-shadow: 0.05em 0 0 var(--blue), -0.03em -0.04em 0 var(--orange),
            0.025em 0.04em 0 var(--orange);
        }
        16% {
        text-shadow: -0.05em -0.025em 0 var(--blue), 0.025em 0.035em 0 var(--light),
            -0.05em -0.05em 0 var(--orange);
        }
        49% {
        text-shadow: -0.05em -0.025em 0 var(--blue), 0.025em 0.035em 0 var(--orange),
            -0.05em -0.05em 0 var(--orange);
        }
        50% {
        text-shadow: 0.05em 0.035em 0 var(--blue), 0.03em 0 0 var(--light),
            0 -0.04em 0 var(--orange);
        }
        99% {
        text-shadow: 0.05em 0.035em 0 var(--blue), 0.03em 0 0 var(--orange),
            0 -0.04em 0 var(--orange);
        }
        100% {
        text-shadow: -0.05em 0 0 var(--blue), -0.025em -0.04em 0 var(--light),
            -0.04em -0.025em 0 var(--orange);
        }
    }


    .effect-ball{
        max-width: 1200px;
        width:90%;
        height: 1200px;
        position: absolute;
        top:-900px;
        background: var(--blue);
        filter: blur(5rem);

        border-radius:50%;
        z-index:-1;
    } 
`
export const SocialMedia = styled.div`
    position: absolute;
    right:460px;
    bottom:30px;

    a{
        position:relative;
        display: flex;
        align-items:center;
        justify-content:center;
        padding:1rem;
        border-radius:50%;
        margin-bottom:10px;
    } 

    @media(max-width:900px){
        right: auto;
        left: auto;
        display: flex;
        flex-direction:row;
        gap:1rem;
    }

    svg{
        color:var(--dark-300);
    }

    .border{
        content: '';
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border:3px solid var(--dark-300);
        border-radius:50%;
        transition: all 2s;

    }

    .border:hover{
        animation: rotate 2s infinite linear;
    }

    @keyframes rotate {
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
    }

`
