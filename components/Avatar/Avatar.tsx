import Image from "next/image";

import { User } from "types/user";

type Props = {
  user?: User;
};

export default function Avatar({ user }: Props) {
  function renderProp() {
    if (!user)
      return (
        <Image
          src={"/icons/user_shape.svg"}
          alt=""
          width="36"
          height="36"
          className="absolute bottom-4 left-3.5 w-1/2"
        />
      );
    if (user.avatar)
      return (
        <Image
          src={user.avatar}
          alt={user.name}
          fill
          className="rounded-full object-cover object-center"
        />
      );

    return (
      <span className="absolute bottom-4 left-3.5 text-4xl leading-0.7 text-secondary drop-shadow-logo">
        {user.name[0]}
      </span>
    );
  }

  return (
    <button
      className="relative h-14 w-14 rounded-full border bg-background-paper-dark transition-transform hover:scale-110 active:scale-105"
      title="menu"
    >
      {renderProp()}
    </button>
  );
}
