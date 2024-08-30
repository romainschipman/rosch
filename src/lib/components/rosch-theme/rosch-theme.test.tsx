import { render , screen } from "@testing-library/react";
import { defaultTheme } from "../../theme/default/default-theme";
import "jest-styled-components";
import { RoschTheme } from "./rosch-theme";
import { Theme } from "../../theme/theme.interface";

// Mock de styled-components pour s'assurer que le theme est bien appliqué
jest.mock("styled-components", () => ({
  ...jest.requireActual("styled-components"),
  ThemeProvider: jest.fn(({ theme, children }) => (
    <div data-theme={theme.name}>{children}</div>
  )),
}));

describe("RoschTheme", () => {
  test("applies the default theme when no custom theme is provided", () => {
    render(
      <RoschTheme>
        <div>Test Child</div>
      </RoschTheme>
    );

    const themeProvider = screen.getByText("Test Child").parentElement;
    expect(themeProvider).toHaveAttribute("data-theme", "default-theme");
  });

  test("applies a custom theme when provided", () => {
    const customTheme = { ...defaultTheme, name: "custom-theme" } as Theme;
    render(
      <RoschTheme theme={customTheme}>
        <div>Test Child</div>
      </RoschTheme>
    );

    const themeProvider = screen.getByText("Test Child").parentElement;
    expect(themeProvider).toHaveAttribute("data-theme", "custom-theme");
  });

  test("renders children correctly", () => {
    render(
      <RoschTheme>
        <div>Test Child</div>
      </RoschTheme>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
