import heart from "../../assets/heart.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import medium from "../../assets/medium.svg";
import linkedin from "../../assets/linkedin.svg";
import fiveHundredPx from "../../assets/500px.svg";
import youtube from "../../assets/youtube.svg";
import { appVersion } from "../../lib/version";
import { FooterCopyright, FooterText, FooterVersionLink, FooterWrapper, HeartIcon, SocialIcon, SocialIconsList, SocialIconsListItem } from "./Footer.styles";

const releaseUrl = "https://github.com/Davetherave2010/davidendersby2019/releases/tag/";

const Version = () => {
  const version = appVersion();
  // Local and test builds have no tag to link to.
  if (!/^v\d/.test(version)) return <>{version}</>;
  return (
    <FooterVersionLink href={releaseUrl + version} target="_blank" rel="noopener noreferrer" aria-label={`Release ${version} (opens in new tab)`}>
      {version}
    </FooterVersionLink>
  );
};

const getYear = () => {
  return new Date().getFullYear();
};

export const Footer = () => (
  <FooterWrapper>
    <SocialIconsList>
      <SocialIconsListItem>
        <a href="https://www.medium.com/@daendersby" target="_blank" rel="noopener noreferrer" aria-label="Medium (opens in new tab)">
          <SocialIcon src={medium} alt="Medium icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.github.com/davetherave2010" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)">
          <SocialIcon src={github} alt="Github octocat" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.instagram.com/davetherave2010" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in new tab)">
          <SocialIcon src={instagram} alt="Instagram icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://500px.com/p/Davetherave2010" target="_blank" rel="noopener noreferrer" aria-label="500px (opens in new tab)">
          <SocialIcon src={fiveHundredPx} alt="500px icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.linkedin.com/in/endersbydavid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">
          <SocialIcon src={linkedin} alt="Linkedin icon" />
        </a>
      </SocialIconsListItem>
      <SocialIconsListItem>
        <a href="https://www.youtube.com/@davetherave2010" target="_blank" rel="noopener noreferrer" aria-label="YouTube (opens in new tab)">
          <SocialIcon src={youtube} alt="Youtube icon" />
        </a>
      </SocialIconsListItem>
    </SocialIconsList>
    <FooterText>
      Made with <HeartIcon src={heart} alt="heart" /> in
      The Netherlands
    </FooterText>
    <FooterCopyright>
      &copy; {getYear()} David Endersby &middot; <Version />
    </FooterCopyright>
  </FooterWrapper>
);
