import Image from "next/image"
import { useTheme } from "styled-components"

import { Typography } from "@atoms"

import * as S from "./Avatar.styled"
import { User } from "@types"

type Props = {
  user: User
}

export default function Avatar({ user }: Props) {
  const theme = useTheme();

  function renderProp() {
    if (user.avatar) return <div><Image src={user.avatar} alt={user.name} fill /></div>

    return (<S.Content>
      <Typography as="span" color={theme.colors.secondary[300]} size="2.25rem">{user.name[0]}</Typography>
    </S.Content>)
  }

  return <S.Container>
    {renderProp()}
  </S.Container>
}