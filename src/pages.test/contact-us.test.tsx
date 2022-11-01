import { render, screen } from "@testing-library/react";

import ContactUs from "@/pages/contact-us";

describe("pages/about-us/careers", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<ContactUs />);
      expect(screen.getByText("Contact Us")).toBeInTheDocument();
    });
  });
});
