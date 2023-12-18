import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../icon/Icon';
import {animateScroll as scroll} from 'react-scroll'

export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowGoTop"} height={"18"} width={"16"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  padding: 8px;
  right: 30px;
  bottom: 30px;
`

