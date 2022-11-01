import { render, screen } from "@testing-library/react";

import { Engagement } from "./Engagement";

describe("components/Engagements/Engagement", () => {
  describe("Render method", () => {
    it("should have donate now button", () => {
      render(<Engagement names="Muzammil Khalfan & Fatema Jaffer" />);
      expect(
        screen.getByText("Muzammil Khalfan & Fatema Jaffer")
      ).toBeInTheDocument();
    });
  });
});
