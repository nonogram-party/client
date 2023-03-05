import { Paper } from "@atoms";
import styled, { css } from "styled-components";

export const Container = styled(Paper.StyledContainer)(() => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`)