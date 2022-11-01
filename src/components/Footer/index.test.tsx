import { render, screen } from "@testing-library/react";

import { MyFooter } from ".";

describe("components/Footer", () => {
  describe("Render method", () => {
    it("should have important text", () => {
      render(<MyFooter />);
      expect(screen.getByText("9000 Bathurst Street")).toBeInTheDocument();
      expect(screen.getByText("Thornhill, Ontario")).toBeInTheDocument();
      expect(screen.getByText("(905) 695-9786")).toBeInTheDocument();
      expect(screen.getByTitle("Instagram")).toBeInTheDocument();
      expect(screen.getByTitle("GitHub")).toBeInTheDocument();
      expect(screen.getByTitle("WhatsApp")).toBeInTheDocument();
    });
  });
});
