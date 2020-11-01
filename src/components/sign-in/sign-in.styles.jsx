import styled from 'styled-components';

import {siteSizes} from "../../global.styles";

const {width: {mobile}} = siteSizes

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    @media screen and (max-width: ${mobile}) {
      width: unset;
  }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${mobile}) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
        button {
          width: 60%;
        }
  }
`;