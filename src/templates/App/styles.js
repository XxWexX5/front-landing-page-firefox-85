import styled, { css } from 'styled-components';

export const App = styled.div`
  ${({ color }) => css`
    color: ${color};
  `};
`;
