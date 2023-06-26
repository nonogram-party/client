import { Avatar, Logo } from "@components";

const user = {
  name: "Gustavo",
  avatar: "/images/duck.jpg",
};

function Navbar() {
  return (
    <section className="paper items-center justify-between p-3">
      <Logo />
      <div className="flex gap-2">
        <Avatar user={{ name: "Aaa" }} />
        <Avatar user={user} />
        <Avatar />
      </div>
    </section>
  );
}

export default Navbar;
