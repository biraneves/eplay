import styled from 'styled-components';
import { cores } from '../../styles';

export const Items = styled.ul`
  display: flex;
`;

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity ease 0.5s;
`;

export const Item = styled.li`
  margin-right: 16px;
  position: relative;

  > img {
    border: solid 2px ${cores.branco};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity ease 0.5s;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    display: block;
    width: 100%;
  }
`;
