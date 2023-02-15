import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(46,46,46,0.3);
    position:relative;
    z-index:2;

    @media(max-width:800px){
        height:85px;
    }
`

export const Header = styled.header`
    max-width:1200px;
    width: 90%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    color:var(--light);

    @media(max-width:800px){
        flex-direction:column;
    }
`

export const Logo = styled.div`
    h2{
        font-weight:600;
    }
`

export const NavHeader = styled.nav`
    a{
        margin-left: 1.25rem;
    }

    a:hover{
        color: var(--orange);
        filter: brightness(1);
    }

    @media(max-width:800px){
        margin-top: 0.6rem;
    }

    @media(max-width:480px){
        display: none;
    }
    
`

export const DropMobile = styled.header`

    svg{
        font-size:25px;
        margin-top:0.6rem;
        color: var(--light);
    }

    button{
        background: transparent;
        transition:2s;
    }

    @media(min-width:480px){
        display: none;
    }
`

export const DropDown = styled.nav`
    position: absolute;
    left: 0;
    right: 0;

    background-color:var(--blue);
    border-bottom: 3px solid var(--orange);
    height: 300px;
    width: 90%;
    margin: 10px auto;
    display: flex;
    text-align:center;
    align-items:center;
    justify-content:center;

    .menu{
        display: flex;
        flex-direction:column;
        font-size:1.3rem;
        width:100%;

        gap:20px;

    }
`