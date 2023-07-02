import { ReactComponent } from "types/component";

export default function Paper({ children, className = "" }: ReactComponent) {
  return (
    <section
      className={className.concat(
        " flex gap-6 rounded-2xl border border-black bg-background-paper shadow-md shadow-shadow"
      )}
    >
      {children}
    </section>
  );
}
