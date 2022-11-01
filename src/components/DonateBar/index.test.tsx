import { render, screen } from "@testing-library/react";

import { DonateBar } from ".";

describe("components/DonateBar", () => {
  describe("Render method", () => {
    it("should have donate now button", () => {
      render(<DonateBar />);
      expect(
        screen.getByRole("button", { name: "Donate Now" })
      ).toBeInTheDocument();
    });
  });
});
