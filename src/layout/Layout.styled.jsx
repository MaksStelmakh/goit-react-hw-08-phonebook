import styled from "@emotion/styled";

export const Navigation = styled.nav`
  margin-top: 50px;
  text-align: center;
  a {
    background: linear-gradient(to bottom right, #0400ff, #f9ff00);
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    width: 150px;

    &:focus {
      box-shadow: 0 0 0.25rem #f1ff00, -0.125rem -0.125rem 1rem #f3ff29,
        0.125rem 0.125rem 1rem #f5ff55;
    }

    &:hover {
      box-shadow: 0 0 0.25rem #f1ff00, -0.125rem -0.125rem 1rem #f3ff29,
        0.125rem 0.125rem 1rem #f5ff55;
    }
  }
`;

export const MainTitle = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 102, 186, 1) 71%,
    rgba(70, 130, 180, 1) 100%
  );
  height: 100vh;
  width: 100vw;

  div {
    padding-top: 200px;
  }

  h1 {
    font-weight: 900;
    font-size: 44px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
  }
  h2 {
    font-weight: 900;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
  }
`;
