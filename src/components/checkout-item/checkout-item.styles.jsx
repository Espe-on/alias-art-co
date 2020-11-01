import styled from 'styled-components';

import {siteColors} from "../../global.styles";

const {main} = siteColors;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid ${siteColors.main.alt};
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  color: ${main.alt}
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;