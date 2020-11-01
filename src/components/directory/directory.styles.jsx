import styled from 'styled-components';

import {siteColors} from "../../global.styles";

const {main} = siteColors;

export const DirectoryContainer = styled.div`
   min-width: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: ${main.alt}
`;

