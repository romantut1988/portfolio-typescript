import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import {FlexWrapper} from '../FlexWrapper';
import {S} from './Slider_Styles';

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>
                        Roman Amelkovich. Programmer engineer, programming course teacher, technical specialist, mentor.
                    </S.Text>
                    <S.Name>Roman Amelkovich</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};


