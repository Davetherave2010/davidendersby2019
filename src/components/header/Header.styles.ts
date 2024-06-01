import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-flow: row wrap;
`;

export const HeaderTitle = styled.h1`
    display: block;
    height: 100%;
    max-width: 800px;
    margin: 75px 0 50px;
    padding: 0 42px;
    font-size: 18vw;
    line-height: 1;
    text-align: left;
    letter-spacing: -2px;
    background: #8A2387;

    @keyframes Rotate{
      from {
        --a:0deg;
      }
      to {
        --a:360deg;
      }
    }

    transition: var(--a) 0.5s 0.1s;
    background:linear-gradient(var(--a), #F27121, #E94057, #8A2387);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: Rotate 20s linear infinite forwards;

  @media (min-width: 768px) {
    font-size: 140px;
  }
`;
