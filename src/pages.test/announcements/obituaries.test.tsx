import { render, screen } from "@testing-library/react";

import Obituaries from "@/pages/announcements/obituaries";

describe("pages/announcements/obituaries", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Obituaries />);
      expect(screen.getByText("Obituaries")).toBeInTheDocument();
    });
  });
});
