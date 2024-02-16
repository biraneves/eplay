import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media screen and (max-width: ${breakpoints.smartphone}) {
    margin-left: 0;
    display: block;
  }
`;

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${cores.branco};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    @media screen and (max-width: ${breakpoints.smartphone}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`;

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`;

export const LinkItem = styled.li`
  margin-right: 16px;

  @media screen and (max-width: ${breakpoints.smartphone}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`;

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media screen and (max-width: ${breakpoints.smartphone}) {
    span {
      display: none;
    }
  }
`;

export const Hamburger = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${cores.branco};
    margin-bottom: 6px;
  }

  @media (min-width: ${breakpoints.smartphone}) {
    display: none;
  }
`;
