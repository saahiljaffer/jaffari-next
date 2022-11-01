import { render, screen } from "@testing-library/react";

import Donate from "@/pages/donate";

describe("pages/index", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Donate />);
      expect(screen.getByText("Donate")).toBeInTheDocument();
    });
  });
});
