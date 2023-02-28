import styled, { css } from "styled-components";

export const Container = styled.div(() => css`
  display: flex;
  flex-direction: column;
  margin: 0.75rem;

  h1 {
    margin: 0;
    line-height: 2.25rem;
  }
`)