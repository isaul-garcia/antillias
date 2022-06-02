import styled, { createGlobalStyle } from 'styled-components';
import * as c from "./colorScheme";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* &::-moz-selection { background: ${c.dark}; color: ${c.light};}
        &::selection { background: ${c.dark}; color: ${c.light}; } */
    }    

    body {
        background-color: ${c.light};
        color: ${c.dark};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Inter', sans-serif;
        height: 100%;
        width: 100%;
        color: ${c.lighter};
        overflow: hidden;
    }
    
    ////CUSTOM SCROLLBAR
    // Width
    ::-webkit-scrollbar {
        width: 7px;    
        height: 7px;    
    }
    // Track
    ::-webkit-scrollbar-track {
        border-radius: 20px;
    }
    // Handle
    ::-webkit-scrollbar-thumb {
        background: ${c.dark}; 
        border-radius: 20px;
    }
    // Handle on hover
    ::-webkit-scrollbar-thumb:hover {
        background: ${c.darker};   
    }

    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 4.5em;
        font-weight: 800;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 2em;
        font-weight: 700;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 1.5em;
        font-weight: 600;
    }

    h4 {
        font-family: 'Inter', sans-serif;
        font-size: 1.25em;
        font-weight: 500;
    }

    h5 {
        font-family: 'Inter', sans-serif;
        font-size: 1em;
        font-weight: 600;
    }    

    a {
        font-family: 'Inter', sans-serif;
        text-decoration: none;
        color: #cc3300;
        transition: 0.1s;
        cursor: pointer;

        &:hover{
            color: #822100;
        }
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: 1.25em;
        font-weight: 300;
    }
`

// SPACERS
export const SmallSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '10px')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '10px' : '')};
    }
`
export const MediumSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '20px')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '20px' : '')};
    }
`
export const LargeSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '60px')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '60px' : '')};
    }
`
export const GiantSpacer = styled.div`
    height: ${({ justMobile }) => (justMobile ? 'none' : '86vh')};
    cursor: default;

    @media screen and (max-width: 991px) {
        height: ${({ justMobile }) => (justMobile ? '0px' : '97vh')};
    }
`

//

export const CanvasContainer = styled.div`
    width: 100vw;
    height: 100vh;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        filter: ${({ expand }) => (expand ? '' : 'blur(15px)')};
        transition: 0.5s;
    }
`

export const CanvasWrapper = styled.div`
    width: 100%;
    height: 100%;
`

//to click on the color hex easier
export const forColor = styled.div`
    color: #7eae71;
`

export default GlobalStyle