import { render, screen } from "@testing-library/react";

import Index from "@/pages";

describe("pages/index", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Index />);
      expect(
        screen.getByText("Islamic Shia Ithna-Asheri Jamaat of Toronto")
      ).toBeInTheDocument();
    });
  });
});
