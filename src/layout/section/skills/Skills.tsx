import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {S} from './Skills_Styles';

const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "I am familiar with all the new HTML5 tags, as well as attributes, and I use basically everything in practice, with the exception of those that are already outdated"
    },
    {
        iconId: "css",
        title: "css3",
        description: "I put styles into practice and also use additional preprocessors of the SASS, Less, SCSS"
    },
    {
        iconId: "react",
        title: "react",
        description: "I use this library when necessary in applications or creating websites."
    },
    {
        iconId: "typeScript",
        title: "typescript",
        description: "TypeScript is a programming language based on JavaScript. I use it in practice due to its typing."
    },
    {
        iconId: "styledComponents",
        title: "styled components",
        description: "Styled Components - I use this library to style React applications. It allows you to create custom components by writing the CSS itself in JavaScript. A very convenient tool."
    },
    {
        iconId: "figma",
        title: "WEB DESIGN",
        description: "Figma has been familiar for a long time - a graphic editor for the joint design of websites, applications and other design products. There is a practicality in using it only as a developer."
    }
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


