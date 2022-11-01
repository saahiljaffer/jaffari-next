import { render, screen } from "@testing-library/react";

import IsaleThawab from "@/pages/forms/isale-thawab";

describe("pages/about-us/resident-alims", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<IsaleThawab />);
      expect(screen.getByText("Isale Thawab")).toBeInTheDocument();
    });
  });
});
