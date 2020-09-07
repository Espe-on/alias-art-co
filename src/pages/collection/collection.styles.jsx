import styled from 'styled-components';

import {siteColors} from "../../sitecolors.styles";

const {main} = siteColors

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${main.alt}
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;