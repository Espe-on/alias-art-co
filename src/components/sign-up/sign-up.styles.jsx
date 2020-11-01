import styled from 'styled-components';

import {siteSizes} from "../../global.styles";

const {width: {mobile}} = siteSizes

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding-bottom: 10px;
  @media screen and (max-width: ${mobile}) {
      width:unset;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      button {
          width: 60%;
        }
  }
  
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;