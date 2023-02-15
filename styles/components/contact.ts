import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const Wrapper = styled.section`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:80px 0px;

`;

export const ContactContainer = styled.div`
    display: flex;
    align-items:center;

    gap:30px;
    font-size:18px;

    @media(max-width:900px){
        flex-direction:column;
        div {
            width: 80%;

            display: flex;
            flex-direction:column;
        }
    }

    @media(max-width:600px){
        img{
            width:100%;
        }

        div{
            width:100%;
        }
    }
`;

export const SocialMediaDiv = styled.div`
    margin-top:1rem;
    display: flex;
    flex-direction:row !important;
    
    svg{
        margin-right:0.5rem;
    }
`;