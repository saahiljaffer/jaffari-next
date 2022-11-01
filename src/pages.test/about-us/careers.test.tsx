import { render, screen } from "@testing-library/react";

import Careers from "@/pages/about-us/careers";

describe("pages/about-us/careers", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Careers />);
      expect(screen.getByText("Careers")).toBeInTheDocument();
    });
  });
});
