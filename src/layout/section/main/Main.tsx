import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/i.jpg'
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Roman Amelkovich</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #1F1F20;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
  }
`
const Name = styled.h2`
  ${font({ family: "Josefin Sans, sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      position: absolute;
      bottom: 0;
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      z-index: -1;
      background-color: ${theme.colors.accent};
    }
  }
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`
const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})}
`
const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`


