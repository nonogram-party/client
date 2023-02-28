import styled, { css } from "styled-components";

export const Container = styled.section(({ theme }) => css`
  background-color: ${theme.colors.background.paper};
  display: flex;
  gap: 1.5rem;
  border: solid 1px ${theme.colors.black[300]};
  border-radius: 1rem;
  box-shadow: 0.25rem 0.25rem 0.25rem ${theme.colors.shadow};
`)