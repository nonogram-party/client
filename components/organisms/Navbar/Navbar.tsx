import { Avatar, Paper } from "@atoms"
import { Logo } from "@molecules"

import * as S from "./Navbar.styled"

const user = {
  name: "G",
  avatar: "/images/duck.jpg"
}

function Navbar() {
  return (
    <S.Container>
      <Logo />
      <Avatar user={user} />
    </S.Container>
  )
}

export default Navbar