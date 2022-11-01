import { render, screen } from "@testing-library/react";

import { Advertisement } from "./Advertisement";

describe("components/AnnouncementLinks/Advertisement", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<Advertisement name="Marhūm Husein Mohamedtaki Shermohamed" />);
      expect(
        screen.getByText("Marhūm Husein Mohamedtaki Shermohamed")
      ).toBeInTheDocument();
    });
  });
});
