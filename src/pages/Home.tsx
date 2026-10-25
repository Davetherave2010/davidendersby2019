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
              Hello! I&apos;m Director of Product &amp; Engineering at <a href="https://www.mews.com/en">Mews</a>, based in the Netherlands, and a <a href="https://www.instagram.com/davetherave2010">travel and architectural photographer</a> on the side.
            </p>
            <p>
              At Mews I lead the Users &amp; Ecosystem tribe. We own identity, SSO and permissions, and one team takes each problem from the product decision to production. I&apos;m not afraid to dive into the code myself when it keeps the team focused on what matters. SSO onboarding is the example I like best: every request took 15 to 20 minutes by hand, so I built the tooling to automate it end to end, and most requests now need no one at all.
            </p>
            <p>
              I&apos;m happy working where the cost of failure is high. Authentication and authorisation sit in the path of nearly every request, so a failure there takes down the whole of Mews. We offset those risks with testing and AI review of every change, plus human review of the critical ones. I make commits to other teams&apos; repos, fintech included, on the same terms.
            </p>
            <p>
              AI use is a non-negotiable for R&amp;D now, and I use it every day. I use Claude to tackle hard problems in codebases I don&apos;t know. I&apos;m a frontend engineer by background and now work across the stack: C# on the backend, and I&apos;ve pushed code to the mobile repos too. As a manager, <a href="https://github.com/davekilleen/dex">Dex</a> keeps me organised and on top of my game. It makes sure I don&apos;t miss things and keeps trimming my workflows, like the weekly report.
            </p>
            <p>
              I don&apos;t do well in the heat, so given the choice, I travel somewhere cold: Norway in February, Canada in November, Antarctica. I shoot the landscapes and whatever buildings I find on the way.
            </p>
            <p>
              At home I&apos;m into green energy. I run a home battery on a dynamic energy contract through Frank Energie, which helps balance the grid in my neighbourhood, and Home Assistant to cut our household emissions. Yes, yes, I know my flights cancel most of that out. I&apos;m the most boring person at a party, because I&apos;ll talk about electricity bills and cheap power for as long as you let me, and I like a good graph.
            </p>
          </HomeIntroduction>
        </HomeBody>
      </PageContentWrapper>
    </div>
  );
};
