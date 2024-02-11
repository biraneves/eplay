import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';

export const ButtonContainer = styled.button`
  background-color: transparent;
  color: ${cores.branco};
  border: solid 2px ${cores.branco};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
`;

export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${cores.branco};
  border: solid 2px ${cores.branco};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  text-decoration: none;
`;
