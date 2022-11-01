import { render, screen } from "@testing-library/react";

import { Engagements } from ".";

describe("components/Engagements", () => {
  describe("Render method", () => {
    it("should have donate now button", () => {
      render(<Engagements />);
      expect(screen.getByText("Engagements")).toBeInTheDocument();
    });
  });
});
