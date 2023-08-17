import Image from "next/image";

import { Icon } from "components";
import { User } from "types";

type Props = {
  user?: User;
};

export default function Avatar({ user }: Props) {
  function renderProp() {
    if (!user) return <Icon name="person_fill" imageClassName="p-1" />;
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
      <span className="absolute bottom-4 left-3.5 text-4xl leading-0.7 text-secondary-400 drop-shadow-logo">
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
