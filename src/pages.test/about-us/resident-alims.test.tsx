import { render, screen } from "@testing-library/react";

import ResidentAlims from "@/pages/about-us/resident-alims";

describe("pages/about-us/resident-alims", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<ResidentAlims />);
      expect(screen.getByText("Resident Alims")).toBeInTheDocument();
    });
  });
});
