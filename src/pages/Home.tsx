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
              Hello! I am an Engineering Manager and <a href="https://www.instagram.com/davetherave2010">Architectural Photographer</a> based in the Netherlands. Currently, I lead the Users team at <a href="https://www.mews.com/en">Mews</a>. Previously, I was in charge of the DigitalOcean Amsterdam Meetup. In my spare time, I am passionate about technology, the environment, and staying updated on the news and current affairs.
            </p>
          </HomeIntroduction>
        </HomeBody>
      </PageContentWrapper>
    </div>
  );
};
