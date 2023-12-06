import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contacts = styled.section`
`
const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: ${theme.colors.borderColor};
  padding: 7px 15px;

  color: ${theme.colors.font};
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`

export const S = {
    Contacts,
    Form,
    Field
}
