import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I am available for freelance or other work format.</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
`

