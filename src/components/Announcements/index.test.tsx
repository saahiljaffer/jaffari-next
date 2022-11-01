import { render, screen } from "@testing-library/react";

import { Announcements } from ".";

describe("components/Announcements", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Announcements />);
      expect(screen.getByText("Announcements")).toBeInTheDocument();
    });
  });
});
