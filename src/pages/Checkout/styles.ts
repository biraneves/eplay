import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

type inputGroupProps = {
  maxWidth?: string;
};

type RowProps = {
  margintop?: string;
};

type TabButtonProps = {
  isactive: string;
};

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.margintop || '0'};

  @media screen and (max-width: ${breakpoints.smartphone}) {
    display: block;
  }
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
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: solid 1px ${colors.white};
    width: 100%;

    &.error {
      border: solid 1px red;
    }
  }

  @media screen and (max-width: ${breakpoints.smartphone}) {
    display: block;
    margin-top: 16px;
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isactive === 'true' ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media screen and (max-width: ${breakpoints.smartphone}) {
    margin-top: 8px;
    width: 100%;
  }
`;
