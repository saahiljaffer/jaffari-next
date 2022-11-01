import { render, screen } from "@testing-library/react";

import AdvertisingAtOurCentres from "@/pages/forms/advertising-at-our-centres";

describe("pages/about-us/board-of-directors", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<AdvertisingAtOurCentres />);
      expect(
        screen.getByText("Advertising at Our Centres")
      ).toBeInTheDocument();
    });
  });
});
