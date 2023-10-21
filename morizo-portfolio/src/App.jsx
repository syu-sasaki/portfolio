import reset from "styled-reset";
import { createGlobalStyle } from "styled-components"; 
import { Header } from "./components/global/Header";

export const App = () =>  {
  return (
    <div>
    <GlobalStyled/>
    <Header/>
    </div>
    );
}

const GlobalStyled = createGlobalStyle`
  ${reset}
  html {
    font-size:  100%;
  }

  body {
    font-family: 'Montserrat Alternates', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.7;
    color: #333;
  }

  a {
    text-decoration: none;
  }

  img {
      max-width: 100%;
  }
`;