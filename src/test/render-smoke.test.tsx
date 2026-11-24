import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomeLanding from "@/pages/HomeLanding";
import OurWork from "@/pages/OurWork";

const renderPage = (ui: React.ReactElement) =>
  render(
    <HelmetProvider>
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        {ui}
      </MemoryRouter>
    </HelmetProvider>
  );

describe("page render smoke test", () => {
  it("renders the homepage landing page", () => {
    renderPage(<HomeLanding />);
    expect(screen.getByText("Selected Website Projects")).toBeTruthy();
  });

  it("renders the our work page", () => {
    renderPage(<OurWork />);
    expect(screen.getAllByText("Xivi").length).toBeGreaterThan(0);
  });
});
