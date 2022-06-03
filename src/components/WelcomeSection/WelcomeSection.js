import React from 'react';
import * as s from './WelcomeSection.elements';
import Logo from '../../images/logotype.svg';
import String from '../../images/lined_text.svg';
import Ico from '../../images/icons-ico.svg';
import Fan from '../../images/icons-fan.svg';
import Brg from '../../images/icons-brg.svg';
import Key from '../../images/icons-key.svg';
import Marquee from "react-fast-marquee";

const WelcomeSection = ({ expanded, setExpanded }) => {
    return (
        <>
            <s.WelcomeContainer>
                <s.WelcomeWrapper>
                    <s.LogotypeContainer>
                        <s.Logotype src={Logo} alt="Antillia Logo" />
                    </s.LogotypeContainer>
                </s.WelcomeWrapper>
            </s.WelcomeContainer>

            <s.InfoContainer expanded={expanded}>
                <s.InfoWrapper>
                    {/* Should make a Box that propagates in the future */}
                    <s.BoxContainer>
                        <s.BoxWrapper customColor={"#1d62ff"} customPadding={"0.5em 1.25em"} onClick={() => setExpanded(!expanded)}>
                            <h5>{expanded ? '▴' : '▾'}</h5>
                        </s.BoxWrapper>
                    </s.BoxContainer>

                    <s.MobileSpacing />

                    <s.BoxContainer>
                        <s.BoxWrapper exp customColor={"#1d62ff"}>
                            <h5>Antillias Preview</h5>
                        </s.BoxWrapper>
                    </s.BoxContainer>

                    <s.BoxContainer>
                        <s.BoxWrapper exp customColor={"#00a1ec"}>
                            <h5>Antillias are phygital places that exist between the realms of physical and digital of any given space. They embedd a hybrid experience connecting to other devices and sensors in the space to create a new kind of experience, with multiple scales of interaction.</h5>
                        </s.BoxWrapper>
                    </s.BoxContainer>

                    <s.BoxContainer>
                        <s.BoxWrapper exp customColor={"#00b580"}>
                            <h5>⚠️ Work in Progress</h5>
                        </s.BoxWrapper>
                    </s.BoxContainer>

                    <s.BoxContainer>
                        <s.BoxWrapper exp customColor={"#ff6f5b"} customSpacing={"9em"}>
                            <h5>This project stems from "Someware: An exploration of place computing through phygital placemaking". More on Someware <a href="https://isaulgarcia.com/#/blog/someware" target="_blank" rel="noreferrer">here</a>.</h5>
                        </s.BoxWrapper>
                    </s.BoxContainer>

                    <s.BoxContainer>
                        <s.BoxWrapper exp customColor={"#ff88a4"} customSpacing={"0.25em"}>
                            <h5>Click on the pink polygons to navigate around the island.</h5>
                        </s.BoxWrapper>
                    </s.BoxContainer>

                    <s.BoxContainer>
                        <s.IcoWrapper pressable customPadding={"0"} customColor={"#ff88a400"}>
                            <s.IcoImage src={Ico} />
                        </s.IcoWrapper>
                    </s.BoxContainer>

                </s.InfoWrapper>
            </s.InfoContainer>

            <s.PlayContainer expanded={expanded}>
                <s.PlayWrapper>
                    <s.Icon src={Fan} place={"2em"} />
                    <s.Icon src={Key} place={"8.5em 0em"} />
                    <s.Icon src={Brg} place={"7em"} />
                </s.PlayWrapper>
            </s.PlayContainer>

            <s.MarqueeContainer>
                <s.MarqueeWrapper>
                    <Marquee gradient={false} speed={50}>
                        <s.StringImage src={String} />
                    </Marquee>
                </s.MarqueeWrapper>
            </s.MarqueeContainer>
        </>
    )
}

export default WelcomeSection;