import Image from "next/image";

import { Icon, ReactComponent } from "types";

type Props = {
  name: Icon;
  imageClassName?: string;
} & ReactComponent;

export default function Icon({ className = "", imageClassName, name }: Props) {
  return (
    <div className={className.concat(" relative aspect-square")}>
      <Image
        src={`/icons/${name}.svg`}
        alt=""
        fill={true}
        className={imageClassName}
      />
    </div>
  );
}
