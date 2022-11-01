import { render, screen } from "@testing-library/react";

import JCC from "@/pages/jcc";

describe("pages/index", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<JCC />);
      expect(screen.getByText("Jaffari Community Centre")).toBeInTheDocument();
    });
  });
});
