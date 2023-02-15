import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background: var(--dark-900);
`

export const Wrapper = styled.section`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:80px 0px;
    color: var(--light);

    section{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap:1.875rem;

        @media(max-width:900px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media(max-width:600px){
            grid-template-columns: auto;
        }
    }

    h1{
        color: var(--light);
    }

`

export const ArticleProject = styled.article`
    width: 100%;
    word-break: break-all;
    display: flex;
    flex-direction:column;
    border: 1px solid var(--dark-300);
    border-radius:10px;

    h1{
        font-size:1.5rem;
        margin-bottom:0.5rem;
        padding: 0 1rem;
    }

    p{
        flex: 1;
        padding: 0 1rem;
    }
`

export const DivButton = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-self:space-around;
    gap: 1rem;
    padding: 1rem;
`

export const ButtonProject = styled.a`
    display: flex;
    align-items:center;
    justify-content:center;
    height:40px;
    margin-top:1rem;
    width:100%;
    border-radius:6px;
    background-color:var(--light);
    color:var(--dark-900);
    transition: 1s all;

    :hover{
        background-color:var(--orange);
        filter: brightness(1);
        color: var(--light);
    }

    svg{
        margin-right:0.5rem;
    }

    p{
        margin-left:0.5rem; 
    }
`

export const ImageProject = styled.div`
    width: 100%;
    position: relative;
    margin-bottom:0.6rem;
    
    img{
        width:100%;
        border-radius:10px 10px 0 0;
        position: relative;
    }

    div{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        width: 100%;
        height: 98%;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:1;

        border-radius:10px 10px 0 0;

        opacity: 0;

        font-size:1.4rem;
        transition: 1s all;

    }

    div:hover{
        background-color:rgba(241, 143, 1, 0.85);
        opacity:1;
    }
`;