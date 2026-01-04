import styled from "styled-components";
import { footerHeight } from "../../App.styles";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: ${footerHeight};
  padding: 30px 50px 15px;
  text-align: center;
`

export const FooterText = styled.p`
 margin: 5px 0 10px;
`

export const FooterCopyright = styled.p`
  margin: 0;
`

export const SocialIconsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const SocialIconsListItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 2px 0 0;
  background: #fff;
`

export const SocialIcon = styled.img`
  display: block;
  max-width: 28px;
  max-height: 28px;
  margin: 15% auto;
`

export const HeartIcon = styled.img`
  display: inline-block;
  vertical-align: bottom;
  width: 20px;
  height: auto;
`
