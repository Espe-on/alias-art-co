import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent} from "../../assets/logo.svg";

import {siteColors, siteSizes} from "../../global.styles";

const {main: {primary, alt}} = siteColors;
const {width:{mobile}} = siteSizes

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  text-decoration: none;
  
  @media screen and (max-width: ${mobile}) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
      };
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    color: ${alt};
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
    text-decoration: none;
    @media screen and (max-width: ${mobile}) {
       width: 80%;
      };
`;

export const OptionLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
      color: ${alt};
      text-decoration: none;
     `;





