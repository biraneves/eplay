import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  color: ${colors.white};
  border: solid 2px
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${colors.white};
  border: solid 2px ${colors.white};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  text-decoration: none;
`;
