import { ReactComponent } from "types";

type Props = {
  isChecked: boolean;
} & ReactComponent;

export default function Toggle({ children, className = "", isChecked }: Props) {
  const classes = `flex h-8 items-center justify-center rounded-2xl border-2 ${
    isChecked ? "bg-primary" : "bg-background-paper"
  } px-5 
    transition-transform hover:bg-opacity-80 active:shadow-inner-toggle active:bg-primary
    aria-checked:shadow-inner-toggle
    `;

  return (
    <button
      role="radio"
      aria-checked={isChecked}
      className={classes?.concat(` ${className}`)}
    >
      {children}
    </button>
  );
}
