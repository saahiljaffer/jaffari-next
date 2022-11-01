import { fireEvent, render, screen } from "@testing-library/react";

import { Event } from "./Event";

describe("components/UpcomingEvents/Event", () => {
  describe("Render method", () => {
    it("should show description on button click", () => {
      render(
        <Event
          title="Night of the Shahadat of Imam Hasan Al-Askari"
          description={[
            "Join us for the night of the Shahadat of Imam Hasan Al-Askari",
          ]}
        />
      );
      expect(
        screen.getByText("Night of the Shahadat of Imam Hasan Al-Askari")
      ).toBeInTheDocument();

      const expandButton = screen.getByRole("button");
      expect(expandButton).toBeInTheDocument();
      fireEvent.click(expandButton);

      expect(
        screen.getByText(
          "Join us for the night of the Shahadat of Imam Hasan Al-Askari"
        )
      ).toBeInTheDocument();
    });
  });
});
