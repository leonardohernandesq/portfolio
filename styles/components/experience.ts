import styled from "styled-components";

export const Container = styled.div`
    z-index:2;
    width: 100%;
    display: flex;
    align-items:center;
    flex-direction:column;
    background:var(--light);
`;

export const Wrapper = styled.div`
    max-width:75rem;
    width: 90%;
    display: flex;
    align-items:center;
    flex-direction:column;
    padding:80px 0px;
`;

export const Experience = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap:35px;

    @media(max-width:600px){
        grid-template-columns: auto;
    }
`;

export const Enterprise = styled.div`
    background: var(--dark-100);
    padding: 2.5rem;
    border-radius:20px;
    border-bottom:solid 8px var(--blue);

    div{
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items:center;
        gap:10px;
        
    }
    
    div p:nth-child(4){
        text-align:right;
    }

    div p{
        font-weight:600;
    }

    >p{
        margin-top:1.2rem;
    }
`;