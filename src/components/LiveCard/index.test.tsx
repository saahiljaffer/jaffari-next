import { render, screen } from "@testing-library/react";

import { LiveCard } from ".";

describe("components/LiveCard", () => {
  describe("Render method", () => {
    it("should have text and link", () => {
      render(<LiveCard name="Jaffari Community Centre" link="/jcc" />);
      expect(screen.getByText("Jaffari Community Centre")).toBeInTheDocument();

      expect(screen.getByRole("link")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "/jcc");
    });
  });
});
