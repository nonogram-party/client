import { useTheme } from "styled-components"

import { Typography } from "@atoms";

import * as S from "./Logo.styled"

function Logo() {
  const theme = useTheme();

  return <S.Container>
    <Typography as="h1" color={theme.colors.primary[400]} size="2.5rem" weight="700">Nonogram</Typography>
    <Typography as="h1" color={theme.colors.secondary[300]} size="2.25rem">Party</Typography>
  </S.Container>
}

export default Logo