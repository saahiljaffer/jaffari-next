import { render, screen } from "@testing-library/react";

import { MyNavbar } from ".";

describe("components/LiveCard", () => {
  describe("Render method", () => {
    it("should have text and buttons", () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
      render(<MyNavbar />);

      expect(screen.getByAltText("Home")).toBeInTheDocument();
    });
  });
});
