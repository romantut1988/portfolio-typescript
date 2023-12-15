import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';
import './../../styles/slider.css'

type SlidePropsType = {
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return <S.Slide>
        <S.Text>{props.text}</S.Text>
        <S.Name>@{props.userName}</S.Name>
    </S.Slide>
}

const items = [
    <Slide userName={"Roman Amelkovich"}
           text={"Roman Amelkovich. Programmer engineer, programming course teacher, technical specialist, mentor."}/>,
    <Slide userName={"Roman Amelkovich"}
           text={"Roman Amelkovich. Programmer engineer, programming course teacher, technical specialist, mentor."}/>,
    <Slide userName={"Roman Amelkovich"}
           text={"Roman Amelkovich. Programmer engineer, programming course teacher, technical specialist, mentor."}/>
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


// import React from 'react';
// import styled from 'styled-components';
// import {theme} from '../../styles/Theme';
// import {FlexWrapper} from '../FlexWrapper';
//
//
// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>
//                         Roman Amelkovich. Programmer engineer, programming course teacher, technical specialist, mentor.
//                     </S.Text>
//                     <S.Name>Roman Amelkovich</S.Name>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span></span>
//                 <span className={"active"}></span>
//                 <span></span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };
//
//
