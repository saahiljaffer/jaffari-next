import { render, screen } from "@testing-library/react";

import { PrayerBar } from ".";

describe("components/PrayerBar", () => {
  describe("Render method", () => {
    it("should have text and buttons", () => {
      render(<PrayerBar />);

      expect(
        screen.getByRole("button", { name: "More Times" })
      ).toBeInTheDocument();
    });
  });
});
