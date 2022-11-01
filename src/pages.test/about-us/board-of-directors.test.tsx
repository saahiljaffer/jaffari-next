import { render, screen } from "@testing-library/react";

import BoardOfDirectors from "@/pages/about-us/board-of-directors";

describe("pages/about-us/board-of-directors", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<BoardOfDirectors />);
      expect(screen.getByText("Board of Directors")).toBeInTheDocument();
    });
  });
});
