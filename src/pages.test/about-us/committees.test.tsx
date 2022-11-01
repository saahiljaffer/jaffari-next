import { render, screen } from "@testing-library/react";

import Committees from "@/pages/about-us/committees";

describe("pages/about-us/committees", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Committees />);
      expect(screen.getByText("Committees")).toBeInTheDocument();
    });
  });
});
