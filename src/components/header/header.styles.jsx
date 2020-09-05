import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent} from "../../assets/logo.svg";

import {siteColors} from "../../sitecolors.styles";

const {main: {primary}} = siteColors;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    margin-left: 50px;
`;

export const Logo = styled(ReactComponent)`
    fill: ${primary}
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font: ${primary};
`;

export const OptionLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
     `;





