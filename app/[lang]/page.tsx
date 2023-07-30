import { Page } from "types/pages";

export default function RootPage({ params }: Page) {
  return <p>{JSON.stringify(params)}</p>;
}
