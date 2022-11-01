import { render, screen } from "@testing-library/react";

import { Obituaries } from ".";

describe("components/Obituaries", () => {
  describe("Render method", () => {
    it("should have text and buttons", () => {
      render(<Obituaries />);
      expect(screen.getByText("Obituaries")).toBeInTheDocument();
    });
  });
});
