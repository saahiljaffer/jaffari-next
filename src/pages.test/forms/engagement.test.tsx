import { render, screen } from "@testing-library/react";

import Engagement from "@/pages/forms/engagement";

describe("pages/forms/engagement", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Engagement />);
      expect(screen.getByText("Engagement")).toBeInTheDocument();
    });
  });
});
