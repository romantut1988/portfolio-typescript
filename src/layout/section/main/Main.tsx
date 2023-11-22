import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/i.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Name>Hi There</Name>
                    <h2>I am Roman Amelkovich</h2>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #1F1F20;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`
