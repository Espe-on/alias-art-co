import styled from "styled-components";

import {siteColors} from "../../sitecolors.styles";

const {main} = siteColors;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  color:${main.alt}
`;