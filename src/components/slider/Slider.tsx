import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 3},
};

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);


// import React from 'react';
// import styled from 'styled-components';
// import {theme} from '../../styles/Theme';
// import {FlexWrapper} from '../FlexWrapper';
// import {S} from './Slider_Styles';
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
