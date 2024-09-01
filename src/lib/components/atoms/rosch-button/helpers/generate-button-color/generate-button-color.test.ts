import { generateButtonColor } from "./generate-button-color";
import { Theme } from "../../../../../theme/theme.interface";
import { ThemeColorVariant } from "src/lib/theme/color.interface";

describe("generateButtonColor", () => {

  const mockTheme = {
    themeColors: {
      buttons: {
        primary: {
          default: { color: "#ffffff", onColor: "#007bff" },
          disabled: { color: "#6c757d", onColor: "#e0e0e0" },
        },
        secondary: {
          default: { color: "#ffffff", onColor: "#6c757d" },
          disabled: { color: "#6c757d", onColor: "#e0e0e0" },
        },
      },
    },
  } as Theme;

  test("should return primary button styles when no colorVariant is provided", () => {
    const css = generateButtonColor({ theme: mockTheme, outline: false, disabled: false });
    expect(css).toContain("background-color: #007bff;");
    expect(css).toContain("color: #ffffff;");
    expect(css).toContain(".rosch__text {");
    expect(css).toContain("color: #ffffff;");
  });

  test("should return the styles for an outlined button", () => {
    const css = generateButtonColor({ theme: mockTheme, outline: true, disabled: false, colorVariant: "primary" });
    expect(css).toContain("background-color: #ffffff;");
    expect(css).toContain("color: #007bff;");
    expect(css).toContain("border: 0.05rem solid  #007bff;");
  });

  test("should return the styles for an outlined and disabled button", () => {
    const css = generateButtonColor({ theme: mockTheme, outline: true, disabled: true, colorVariant: "primary" });
    expect(css).toContain("background-color: #6c757d;");
    expect(css).toContain("color: #e0e0e0;");
    expect(css).toContain("border: 0.05rem solid  #e0e0e0;");
  });

  test("should return the styles for a non-outlined and disabled button", () => {
    const css = generateButtonColor({ theme: mockTheme, outline: false, disabled: true, colorVariant: "primary" });
    expect(css).toContain("background-color: #e0e0e0;");
    expect(css).toContain("color: #6c757d;");
  });

  test("should return the styles for a secondary button", () => {
    const css = generateButtonColor({ theme: mockTheme, outline: false, disabled: false, colorVariant: "secondary" });
    expect(css).toContain("background-color: #6c757d;");
    expect(css).toContain("color: #ffffff;");
  });

  test("should return undefined if themeColors.buttons is undefined", () => {
    const css = generateButtonColor({ theme: { themeColors: {} } as Theme });
    expect(css).toBe("");
  });

  test("should return undefined if colorVariant is not found", () => {
    const css = generateButtonColor({ theme: mockTheme, colorVariant: "tertiary" as ThemeColorVariant });
    expect(css).toBe("");
  });

  test("should return undefined if colorVariant is not found (outline: true, disabled: false)", () => {
    const css = generateButtonColor({ theme: mockTheme, colorVariant: "tertiary" as ThemeColorVariant, outline: true });
    expect(css).toBe("");
  });

  test("should return undefined if colorVariant is not found (outline: true, disabled: true)", () => {
    const css = generateButtonColor({ theme: mockTheme, colorVariant: "tertiary" as ThemeColorVariant, outline: true, disabled: true });
    expect(css).toBe("");
  });

  test("should return undefined if colorVariant is not found (outline: false, disabled: true)", () => {
    const css = generateButtonColor({ theme: mockTheme, colorVariant: "tertiary" as ThemeColorVariant, disabled: true });
    expect(css).toBe("");
  });


  test("should return primary styles if colorVariant is undefined", () => {
    const css = generateButtonColor({ theme: mockTheme });
    expect(css).toContain("background-color: #007bff;");
    expect(css).toContain("color: #ffffff;");
  });

});
