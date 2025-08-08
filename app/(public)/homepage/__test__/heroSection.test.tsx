import { render, screen } from "@testing-library/react";
import HeroSection from "../heroSection";

describe("Hero section", () => {
  it("renders the hero section", () => {
    render(<HeroSection />);
    expect(screen.getByText("Fast. Easy. Effective.")).toBeInTheDocument();
    expect(
      screen.getByText("Zety. The Best CV Maker Online.")
    ).toBeInTheDocument();
    // expect(screen.getByText("Create new CV")).toBeInTheDocument();
    const newCV = screen.getByRole("link", { name: "Create new CV" });
    expect(newCV).toBeInTheDocument();
    expect(newCV).toHaveAttribute("href", "/templates");
    const improveCV = screen.getByRole("link", { name: "Improve my CV" });
    expect(improveCV).toBeInTheDocument();
  });
});
