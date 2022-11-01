import { render, screen } from "@testing-library/react";

import Membership from "@/pages/forms/membership";

describe("pages/forms/membership", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Membership />);
      expect(screen.getByText("Membership")).toBeInTheDocument();
    });
  });
});
