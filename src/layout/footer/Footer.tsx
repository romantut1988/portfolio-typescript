import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from '../../components/icon/Icon';
import {S} from './FooterStyles';

const socialItemsData = [
    {
        iconId: "instagram",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "vk",
    },
    {
        iconId: "linkedin",
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Roman</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialLink key={index}>
                                <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                            </S.SocialLink>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Roman Amelkovich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
}


