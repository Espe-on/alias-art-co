import styled, {css} from "styled-components";

import {siteColors} from "../../global.styles";

const {main, highlights} = siteColors;

const buttonStyles = css`
  background-color: ${main.primary};
  color: ${main.background};
  
  &:hover {
    background-color: ${main.background};
    color: ${main.alt};
    border: 1px solid ${main.alt};
  }
`;

const invertedButtonStyles = css`
    background-color: ${main.background};
    color: ${main.alt};
    border: 1px solid ${main.alt};

    &:hover {
        background-color: ${main.alt};
        color: ${main.background};
        border: none;
      }
`;

const googleSignInStyles = css`
   background-color: ${highlights.secondary};
    color: ${main.background};

    &.hover {
      background-color: ${highlights.secondary};
      border: none;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles
    } else if (props.inverted){
        return invertedButtonStyles
    } else {
        return buttonStyles
    }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  margin: 0 15px 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Rambla';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;

