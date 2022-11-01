import { render, screen } from "@testing-library/react";

import DuaShifa from "@/pages/announcements/dua-shifa";

describe("pages/announcements/dua-shifa", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<DuaShifa />);
      expect(screen.getByText("Dua Shifa")).toBeInTheDocument();
    });
  });
});
