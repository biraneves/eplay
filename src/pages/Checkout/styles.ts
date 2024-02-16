import styled from 'styled-components';
import { cores } from '../../styles';

type inputGroupProps = {
  maxWidth?: string;
};

type RowProps = {
  marginTop?: string;
};

type TabButtonProps = {
  isActive: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const InputGroup = styled.div<inputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branco};
    height: 32px;
    padding: 0 8px;
    border: solid 1px ${cores.branco};
    width: 100%;
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branco};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preto)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`;
