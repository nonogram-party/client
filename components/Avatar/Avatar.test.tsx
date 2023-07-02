import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

const userWithoutImage = {
  name: "Gustavo",
};

const userWithImage = {
  name: "Gustavo",
  avatar: "/images/duck.jpg",
};

describe("Avatar", () => {
  it("Renders a default image when there's no user prop", () => {
    render(<Avatar />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Renders user's image", () => {
    render(<Avatar user={userWithImage} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Renders user's name first letter when they has no image", () => {
    render(<Avatar user={userWithoutImage} />);

    expect(screen.getByRole("button")).toHaveTextContent("G");
  });
});
