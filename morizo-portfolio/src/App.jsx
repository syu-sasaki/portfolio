import reset from "styled-reset";
import { createGlobalStyle } from "styled-components"; 
import { Header } from "./components/global/Header";
import { Home } from "./components/home/Home";

export const App = () =>  {
  return (
    <div>
    <GlobalStyled/>
    <Header/>
    <Home/>
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
    line-height: 1.3;
    color: #333;
  }

  a {
    text-decoration: none;
  }

  img {
      max-width: 100%;
  }
`;