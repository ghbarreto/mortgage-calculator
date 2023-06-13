import type { NextPage } from 'next';
import styled from 'styled-components';

import { Gradient, Container, NavBar, ContainerBody, Text, Slider } from '../components';
import { useState } from 'react';

const StyledContainer = styled.div`
    padding: 50px 25px;
`;

const StyledText = styled(Text)`
    margin-top: 7px;
`;

const Home: NextPage = () => {
    const [sliderValue, setSliderValue] = useState(0);

    const sliderChange = (_event: Event, value: number | Array<number>, _activeThumb: number) => {
        setSliderValue(Number(value));
    };

    return (
        <Gradient>
            <Container>
                <NavBar />
                <ContainerBody>
                    <StyledContainer>
                        <Text type="header">Get started with Digital Credit Experience</Text>

                        <StyledText type="legend" color="var(--light-gray)">
                            Qualify or apply your mortgage in minutes
                        </StyledText>
                        <Slider
                            labelTop="Purchase Price"
                            value={sliderValue}
                            min={20}
                            max={200}
                            onChange={sliderChange}
                        />

                        <Slider
                            labelTop="Interest Rate"
                            value={sliderValue}
                            min={20}
                            max={200}
                            onChange={sliderChange}
                        />
                    </StyledContainer>
                </ContainerBody>
            </Container>
        </Gradient>
    );
};

export default Home;
