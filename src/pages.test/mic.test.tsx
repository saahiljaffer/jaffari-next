import { render, screen } from "@testing-library/react";

import MIC from "@/pages/mic";

describe("pages/index", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<MIC />);
      expect(screen.getByText("Masumeen Islamic Centre")).toBeInTheDocument();
    });
  });
});
