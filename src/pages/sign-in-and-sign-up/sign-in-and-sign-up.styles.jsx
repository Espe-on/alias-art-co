import styled from "styled-components";

import {siteColors, siteSizes} from "../../global.styles";

const {main} = siteColors;
const {width:{mobile}} = siteSizes

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  margin: 30px;
  justify-content: space-between;
  color:${main.alt};
  
  @media screen and (max-width: ${mobile}) {
    margin: unset;
    width: 90%;
    flex-direction: column;
  }
`;

