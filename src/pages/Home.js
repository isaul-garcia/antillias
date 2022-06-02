import React, {useState} from 'react';
import { MyCanvas, WelcomeSection } from '../components';
import { CanvasContainer, CanvasWrapper } from '../globalStyles';

const Home = () => {  
    const [expand, setExpand] = useState(true);
    return (
        <>
            <WelcomeSection expand={expand} setExpand={setExpand}/>
            <CanvasContainer expand={expand} >
                <CanvasWrapper>
                    <MyCanvas />
                </CanvasWrapper>
            </CanvasContainer>
        </>
    )
}

export default Home;