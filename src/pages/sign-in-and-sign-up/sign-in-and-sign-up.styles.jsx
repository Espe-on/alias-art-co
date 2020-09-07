import styled from "styled-components";

import {siteColors} from "../../sitecolors.styles";

const {main} = siteColors;

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  margin: 30px;
  justify-content: space-between;
  color:${main.alt}
`;

