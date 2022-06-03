import styled from 'styled-components'

//Overall Container
export const WelcomeContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    pointer-events: none;
`

export const WelcomeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

//Logo
export const LogotypeContainer = styled.div`
    width: 28em;
    height: 6em;
    margin: 2em;
    position: absolute;
    top: 0;
    
    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 991px) {
        width: 70%;
        margin: 0.75em;
    }
`

export const Logotype = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    -ms-transform: rotate(-3deg); /* IE 9 */
    transform: rotate(-3deg);
`

//String Marquee
export const MarqueeContainer = styled.div`
    height: 50px;
    width: 100%;
    float: left;
    overflow: hidden;
    position: absolute;
    bottom:0;
`

export const MarqueeWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    overflow: hidden;
`

export const StringImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

//Side Info
export const InfoContainer = styled.div`
    height: 100%;
    width: 25%;
    overflow: hidden;
    position: absolute;
    right: 0;
    
    @media screen and (max-width: 1300px) {
        
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        overflow-y: scroll;
        margin-top: ${({ expanded }) => (expanded ? `84vh` : '0vh')};
        z-index: 5;
        transition: 0.5s;
    }
`

export const InfoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2.5em;
`

//Info Boxes
export const BoxContainer = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    z-index: 4;
    transition: 0.5s;
    pointer-events: none;

    &:hover {   
    ${({ pressable }) => (pressable ? `
        background-color: #999;
    ` : '')}
    } 
`

export const BoxWrapper = styled.div`
    padding: 1.25em;
    padding: ${({ customPadding }) => (customPadding)};
    transition: 0.2s;
    overflow: hidden;
    position: relative;
    border-radius: 1.3em;
    margin-bottom: 1em;
    float: right;
    background-color: ${({ customColor }) => (customColor)};
    margin-bottom: ${({ customSpacing }) => (customSpacing)};
    pointer-events: auto;
    cursor: default;   
    
    ${({ exp }) => (exp ? `
        @media screen and (min-width: 991px) {
            &:hover {   
                padding: 1.8em 1.25em;
            } 
        }
    ` : '')}

    ${({ min }) => (min ? `
        cursor: pointer;
        @media screen and (min-width: 991px) {
            &:hover {   
                padding: 0.2em 1.25em;
            } 
        }
    ` : '')}    
`

export const MobileSpacing = styled.div`
    @media screen and (max-width: 991px) {
        width: 100%;
        height: 6.5vh;
    }
`

export const IcoWrapper = styled(BoxWrapper)`
    &:hover {   
        padding: ${({ customPadding }) => (customPadding)};
    } 
`

export const IcoImage = styled.img`
    width: 55px;
    height: 100%;
    display: block;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    pointer-events: auto;
`

//Play Info
export const PlayContainer = styled.div`
    height: 100%;
    width: 25%;
    overflow: hidden;
    position: absolute;
    z-index: 3; 
    pointer-events: none;
    transition: 0.5s;

    @media screen and (max-width: 991px) {
        width: 100%;
        opacity: ${({ expanded }) => (expanded ? `1` : '0')};
    }
`

export const PlayWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5em;
    margin-top: -7em;

    @media screen and (max-width: 991px) {
        padding: 1.5em;
        margin-top: -3em;
    }
`

//Play icons
export const Icon = styled.img`
    width: 75px;
    display: inline-block;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    pointer-events: auto;
    cursor: not-allowed;
    bottom: 0;
    position: absolute;
    margin: ${({ place }) => (place)};
    transition: 0.2s;
`