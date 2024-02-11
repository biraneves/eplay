import styled from 'styled-components';

export const Container = styled.section`
  padding: 32px 0;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`;
