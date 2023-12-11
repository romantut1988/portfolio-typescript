import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Work} from './work/Work';
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import {Container} from '../../../components/Container';
import {TabMenu} from './tabMenu/TabMenu';
import {S} from './Works_Styles';


const worksItems = ["All", "landing page", "React", "spa"]

const workData = [
    {
        title: "My GitHub",
        text: "I have a lot of projects. I use different preprocessors and third-party libraries.",
        src: socialImg
    },
    {
        title: "Description of projects",
        text: "You can view all the works in the projects tab and get acquainted with them, there are a lot of them. Enjoy your viewing.",
        src: timerImg
    }
]


export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w, index) => {
                        return <Work title={w.title}
                                     text={w.text}
                                     src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


