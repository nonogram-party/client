import * as S from "./Paper.styled"

type Props = {
  children: React.ReactNode
}

export default function Paper({ children }: Props) {
  return <S.Container>{children}</S.Container>
}