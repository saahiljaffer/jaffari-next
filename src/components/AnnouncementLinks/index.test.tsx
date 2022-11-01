import { render, screen } from "@testing-library/react";

import { AnnouncementLinks } from ".";

describe("components/AnnouncementLinks", () => {
  describe("Render method", () => {
    it("should have important text", () => {
      render(<AnnouncementLinks size="2xl" />);
      expect(screen.getByText("Engagements")).toBeInTheDocument();
      expect(screen.getByText("Dua Shifa Requests")).toBeInTheDocument();
      expect(screen.getByText("Obituaries")).toBeInTheDocument();
    });
  });
});
