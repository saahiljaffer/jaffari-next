import { render, screen } from "@testing-library/react";

import SurahFateha from "@/pages/forms/surah-fateha";

describe("pages/forms/surah-fateha", () => {
  describe("Render method", () => {
    it("should have title", () => {
      render(<SurahFateha />);
      expect(screen.getByText("Surah Fateha")).toBeInTheDocument();
    });
  });
});
