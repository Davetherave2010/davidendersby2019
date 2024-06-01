import { PageContentWrapper } from "../App.styles";
import { Header } from "../components/header/Header";
import { HomeBody, HomeIntroduction } from "./Home.styles";

export const Home = () => {
  return (
    <div className="page Home">
      <PageContentWrapper>
        <Header title="David Endersby" />
        <HomeBody>
          <HomeIntroduction>
            <p>
              Hello. I am a Frontend Developer turned Engineering Manager, based in The Netherlands. I am currently leading the Users team at <a href="https://www.mews.com/en">Mews</a>. Previously, I led the DigitalOcean Amsterdam Meetup. I am passionate about technology, photography, the environment, the news and current affairs.
            </p>
          </HomeIntroduction>
        </HomeBody>
      </PageContentWrapper>
    </div>
  );
};
