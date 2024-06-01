import heart from "../../assets/heart.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import medium from "../../assets/medium.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import fiveHundredPx from "../../assets/500px.svg";
import { FooterCopyright, FooterText, FooterWrapper, HeartIcon, SocialIcon, SocialIconsList, SocialIconsListItem } from "./Footer.styles";

const getYear = () => {
  return new Date().getFullYear();
};

export const Footer = () => (
  <FooterWrapper>
    <SocialIconsList>
      <SocialIconsListItem>
        <a href="https://www.twitter.com/davidendersby1">
          <SocialIcon src={twitter} alt="Twitter icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.medium.com/@daendersby">
          <SocialIcon src={medium} alt="Medium icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.github.com/davetherave2010">
          <SocialIcon src={github} alt="Github octocat" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.instagram.com/davetherave2010">
          <SocialIcon src={instagram} alt="Instagram icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://500px.com/p/Davetherave2010">
          <SocialIcon src={fiveHundredPx} alt="500px icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.linkedin.com/in/endersbydavid/">
          <SocialIcon src={linkedin} alt="Linkedin icon" />
        </a>
      </SocialIconsListItem>
    </SocialIconsList>
    <FooterText>
      Made with <HeartIcon src={heart} alt="heart" /> in
      The Netherlands
    </FooterText>
    <FooterCopyright>
      &copy; {getYear()} David Endersby
    </FooterCopyright>
  </FooterWrapper>
);
