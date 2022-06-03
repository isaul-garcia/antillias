import React, {useState} from 'react';
import { MyCanvas, WelcomeSection } from '../components';
import { CanvasContainer, CanvasWrapper } from '../globalStyles';

const Home = () => {  
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <WelcomeSection expanded={expanded} setExpanded={setExpanded}/>
            <CanvasContainer expanded={expanded} >
                <CanvasWrapper>
                    <MyCanvas />
                </CanvasWrapper>
            </CanvasContainer>
        </>
    )
}

export default Home;