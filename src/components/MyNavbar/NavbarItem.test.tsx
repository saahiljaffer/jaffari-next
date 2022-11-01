import { fireEvent, render, screen } from "@testing-library/react";

import { NavbarItem } from "./NavbarItem";

describe("components/Navbar/NavbarItem", () => {
  describe("Render method", () => {
    it("should have text and link", () => {
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
      render(
        <NavbarItem
          title="Announcements"
          items={[
            {
              title: "Engagements",
              link: "/announcements/engagements",
            },
            {
              title: "Dua Shifa",
              link: "/announcements/dua-shifa",
            },
            {
              title: "Obituaries",
              link: "/announcements/obituaries",
            },
          ]}
        />
      );
      expect(screen.getByText("Announcements")).toBeInTheDocument();
      // expect(screen.getByRole("icon")).toBeInTheDocument();
      const expandButton = screen.getByRole("button", {
        name: "Announcements",
      });
      fireEvent.click(expandButton);
      expect(screen.getByText("Engagements")).toBeInTheDocument();
    });
  });
});
