import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
  }
`;
