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
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Decription>

        </S.Work>
    );
};



