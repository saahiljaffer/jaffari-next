import { render, screen } from "@testing-library/react";

import AboutUs from "@/pages/about-us";

describe("pages/about-us/board-of-directors", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<AboutUs />);
      expect(screen.getByText("About Us")).toBeInTheDocument();
    });
  });
});
