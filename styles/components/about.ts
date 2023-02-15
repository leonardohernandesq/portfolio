import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background: var(--light);
    z-index:2;
` 

export const Wrapper = styled.section`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:80px 0px;

    @media(max-width:50rem){
        flex-direction:column;
    }
`

export const AboutSection = styled.section`
    display: flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
    gap:1rem;

    @media(max-width:900px){
        flex-direction:column-reverse;
    }
    
    >div{
        width:100%;

        p{
            margin-bottom:1rem;
        } 

        img{
            width:100%;
            border-radius: 20px 20px 0px 0px;
            object-fit: cover;
        }

        .border-image{
            width:0%;
            height:8px;
            background-color:var(--blue);
            margin-top:-4px;
            animation: border 4s linear infinite;
            margin-bottom:2rem;
        }

        @keyframes border {
            0%{
                width:0%;
                background-color:var(--blue);
            }
            100%{
                width:100%;
                background-color:var(--orange);
            }
        }
    }

`
