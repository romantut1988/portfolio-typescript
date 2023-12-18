import React from 'react';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {SectionTitle} from '../../../components/SectionTitle';
import {S} from './Contacts_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};



