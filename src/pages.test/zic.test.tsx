import { render, screen } from "@testing-library/react";

import ZIC from "@/pages/zic";

describe("pages/index", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<ZIC />);
      expect(screen.getByText("Zainabiya Islamic Centre")).toBeInTheDocument();
    });
  });
});
