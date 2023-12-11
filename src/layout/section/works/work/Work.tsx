import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../../components/Button';
import {Link} from '../../../../components/Link';
import {theme} from '../../../../styles/Theme';
import {S} from './../Works_Styles';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>

            <S.Decription>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link target={"_blank"} href={"https://github.com/romantut1988"}>demo</Link>
                <Link target={"_blank"} href={"https://github.com/romantut1988?tab=repositories"}>Code</Link>
            </S.Decription>

        </S.Work>
    );
};



