import styled from "styled-components"
import {font} from "../../styles/Common"
import {theme} from "../../styles/Theme"

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animation.transition};
  width: 35px;
  height: 35px;
  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`

export const S = {
    SocialLink,
    Name,
    Copyright,
    SocialList,
    SocialItem,
    Footer
}
