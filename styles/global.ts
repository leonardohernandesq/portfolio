import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --light: #FDFFFC;
    --blue: #203245;
    --orange: #F18F01;
    
    --dark-900: #0E0D0D;
    --dark-600: #2E2E2E;
    --dark-300: #626A7A;
    --dark-100: #F3F3F3;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
    transition: filter .7s ease;
    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
  
  button, input, textarea {
    border: none;
    outline: 0;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
    transition: all .7s ease;
  }

  a:hover{
    filter: brightness(0.8);
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;