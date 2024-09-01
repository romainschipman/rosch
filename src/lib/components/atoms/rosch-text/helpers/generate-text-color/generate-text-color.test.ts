import { generateTextColor } from "./generate-text-color";
import { Theme } from "../../../../../theme/theme.interface";
import { ThemeColorVariant } from "src/lib/theme/color.interface";

describe("Unit test for generateTextColor", () => {

  const mockTheme = {
    themeColors: {
      texts: {
        primary: {
          default: { color: "#000000" },
        },
        secondary: {
          default: { color: "#333333" },
        },
      },
    },
  } as Theme;

  test("should return the primary color when colorVariant is not provided", () => {
    const css = generateTextColor({ theme: mockTheme });
    expect(css).toBe(`
      color: #000000;
    `);
  });

  test("should return the color for the specified colorVariant", () => {
    const css = generateTextColor({ theme: mockTheme, colorVariant: "secondary" });
    expect(css).toBe(`
      color: #333333;
    `);
  });

  test("should return an empty string if themeColors.texts is undefined", () => {
    const css = generateTextColor({ theme: { themeColors: {} } as Theme });
    expect(css).toBe("");
  });

  test("should return an empty string if the colorVariant is not found in the theme", () => {
    const css = generateTextColor({ theme: mockTheme, colorVariant: "tertiary" as ThemeColorVariant });
    expect(css).toBe("");
  });

  test("should return the primary color if colorVariant is undefined", () => {
    const css = generateTextColor({ theme: mockTheme, colorVariant: undefined });
    expect(css).toBe(`
      color: #000000;
    `);
  });

  test("should handle a theme with no text colors defined", () => {
    const css = generateTextColor({ theme: { themeColors: undefined } as Theme });
    expect(css).toBe("");
  });

});
