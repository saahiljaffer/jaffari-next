import { render, screen } from "@testing-library/react";

import { MyHero } from ".";

describe("components/Hero", () => {
  describe("Render method", () => {
    it("should have text and buttons", () => {
      render(
        <MyHero
          title="Jaffari Community Centre"
          description="Situated on the border of Vaughan and Richmond Hill, the Jaffari
              Community Centre is a 100,000 square foot facility that is home
              to a variety of community programs and services."
          primaryButtonText="Our Committees"
          primaryButtonLink="/about-us/committees"
          secondaryButtonText="Visit Our Centre"
          secondaryButtonLink="/jcc/services"
        />
      );
      expect(screen.getByText("Jaffari Community Centre")).toBeInTheDocument();
      expect(
        screen.getByText(
          "Situated on the border of Vaughan and Richmond Hill, the Jaffari Community Centre is a 100,000 square foot facility that is home to a variety of community programs and services."
        )
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Our Committees" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Visit Our Centre" })
      ).toBeInTheDocument();
    });
  });
});
