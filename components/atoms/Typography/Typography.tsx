import * as S from "./Typography.styled"

type Props = {
  color?: string
  weight?: "600" | "700"
  size?: "0.875rem" | "1rem" | "1.25rem" | "2.25rem" | "2.5rem"
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: string
}

export default function Typography({ as, color, weight = "600", size = "1rem", children }: Props) {
  return <S.Typography as={as} $color={color} $weight={weight} $size={size}>{children}</S.Typography>
}