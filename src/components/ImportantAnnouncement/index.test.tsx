import { render, screen } from "@testing-library/react";

import { ImportantAnnouncement } from ".";

describe("components/ImportantAnnouncement", () => {
  describe("Render method", () => {
    it("should have title and description", () => {
      render(
        <ImportantAnnouncement
          title="Lunar Eclipse on May 14th, 2022"
          description="Important Announcement for the GTA & Surrounding Areas"
        />
      );
      expect(
        screen.getByText("Lunar Eclipse on May 14th, 2022")
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "Important Announcement for the GTA & Surrounding Areas"
        )
      ).toBeInTheDocument();
    });
  });
});
