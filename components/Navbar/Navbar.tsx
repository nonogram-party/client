import { Avatar, Logo } from "@components";
import { Paper } from "components/Paper";

function Navbar() {
  return (
    <Paper className="items-center justify-between p-3">
      <Logo />
      <div className="flex gap-2">
        <Avatar />
      </div>
    </Paper>
  );
}

export default Navbar;
