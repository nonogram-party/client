import styled, { css } from "styled-components";

export const Container = styled.div(() => css`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    line-height: 2.25rem;
  }
`)