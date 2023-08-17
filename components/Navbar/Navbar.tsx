import { Avatar, Logo, Paper } from "components";

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
