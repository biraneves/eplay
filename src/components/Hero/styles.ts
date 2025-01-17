import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Banner = styled.div`
  height: 480px;
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  position: relative;
  padding-top: 16px;

  &:after {
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media screen and (max-width: ${breakpoints.smartphone}) {
    background-size: cover;
  }
`;

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      text-decoration: line-through;
      color: ${colors.lightGray};
    }
  }
`;
