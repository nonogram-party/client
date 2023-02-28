import styled, { css } from "styled-components";

type Props = {
  $color?: string;
  $weight: string;
  $size: string
}

export const Typography = styled.p<Props>(({ theme, $color, $weight, $size }) => css`
  color: ${$color};
  font-weight: ${$weight};
  font-size: ${$size};
  text-transform: uppercase;
  text-shadow: 2px 2px 1px ${theme.colors.black[300]};
`)