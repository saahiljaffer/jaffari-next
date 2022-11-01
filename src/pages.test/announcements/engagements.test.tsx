import { render, screen } from "@testing-library/react";

import Engagements from "@/pages/announcements/engagements";

describe("pages/about-us/careers", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Engagements />);
      expect(screen.getByText("Engagements")).toBeInTheDocument();
    });
  });
});
