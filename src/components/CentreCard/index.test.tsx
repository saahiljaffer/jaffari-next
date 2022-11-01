import { render, screen } from "@testing-library/react";

import { CentreCard } from ".";

describe("components/CentreCard", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(
        <CentreCard
          name="Jaffari Community Centre"
          description="Situated on the border of Vaughan and Richmond Hill, the Jaffari Community Centre is a 100,000 square foot facility that is home to a variety of community programs and services."
          link="/jcc"
          image="/assets/images/jcc.jpg"
        />
      );
      expect(screen.getByText("Jaffari Community Centre")).toBeInTheDocument();
    });
  });
});
