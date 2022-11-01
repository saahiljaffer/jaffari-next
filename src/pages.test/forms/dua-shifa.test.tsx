import { render, screen } from "@testing-library/react";

import DuaShifa from "@/pages/forms/dua-shifa";

describe("pages/about-us/careers", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<DuaShifa />);
      expect(screen.getByText("Dua Shifa")).toBeInTheDocument();
    });
  });
});
