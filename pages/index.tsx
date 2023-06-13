import type { NextPage } from 'next';

import { Gradient, Container, NavBar, ContainerBody, Text, Slider, RadioButtons } from '../components';
import { useState } from 'react';
import { MonthlyPaymentCard } from '../components/MonthlyPaymentCard';
import { useMutation } from 'react-query';
import { postData } from '../apis/postData';
import { StyledErrors, StyledContainer, StyledText, StyledSection, StyledLeftSide, StyledRightSide } from './styles';

const Home: NextPage = () => {
    const [data, setData] = useState({
        principal: 0,
        annualInterestRate: 0,
        termOfLoan: 0,
    });

    const [errors, setErrors] = useState(false);
    const mutation = useMutation(postData);

    const onChange = (
        event: Event | React.ChangeEvent<HTMLInputElement>,
        value: number | Array<number>,
        _activeThumb: number
    ) => {
        const e = event.target as HTMLInputElement;
        setData(data => ({ ...data, [e.name]: Number(value) }));
    };

    const submit = async () => {
        if (data.principal === 0 || data.annualInterestRate === 0 || data.termOfLoan === 0) {
            setErrors(true);
            return;
        }

        setErrors(false);
        return await mutation.mutate(data);
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
                        {errors && (
                            <StyledErrors style={{ color: 'salmon' }}>
                                Please fill up every option before checking your monthly payments.
                            </StyledErrors>
                        )}

                        {(mutation.isError || mutation.isPaused) && (
                            <StyledErrors style={{ color: 'salmon' }}>
                                There was an error processing your request. Please try again later.
                            </StyledErrors>
                        )}
                        <StyledSection>
                            <StyledLeftSide>
                                <Slider
                                    labelTop="Purchase Price"
                                    value={data.principal}
                                    min={50_000}
                                    max={2_500_000}
                                    onChange={onChange}
                                    name="principal"
                                />

                                <Slider
                                    labelTop="Interest Rate"
                                    value={data.annualInterestRate}
                                    min={0}
                                    max={25}
                                    onChange={onChange}
                                    name="annualInterestRate"
                                />

                                <RadioButtons onChange={onChange} />
                            </StyledLeftSide>

                            <StyledRightSide>
                                <MonthlyPaymentCard
                                    value={mutation.data ? mutation.data.monthlyPayment : 0}
                                    submit={submit}
                                    isLoading={mutation.isLoading}
                                />
                            </StyledRightSide>
                        </StyledSection>
                    </StyledContainer>
                </ContainerBody>
            </Container>
        </Gradient>
    );
};

export default Home;
