import { render, screen } from "@testing-library/react";

import RCC from "@/pages/rcc";

describe("pages/index", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<RCC />);
      expect(screen.getByText("Razavi Community Centre")).toBeInTheDocument();
    });
  });
});
