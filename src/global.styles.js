import {createGlobalStyle} from "styled-components";

export const siteColors = {
    main: {
        background: "#FFF9F1",
        primary: "#DB7F8E",
        alt: "#4B3B2F"
    },
    highlights: {
        primary: "#6d8a96",
        secondary: "#0B0033"
    }
}

export const siteSizes = {
    width: {
        mobile : "800px"
    }

}

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Rambla', sans-serif;
      padding: 20px 60px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #FFF9F1;
      
      @media screen and (max-width: ${siteSizes.width.mobile}) {
        padding: 10px;
      }
    }
    
    a {
      text-decoration: none;
      color: ${siteColors.main.alt};
    }
    
    * {
      box-sizing: border-box;
    }
`