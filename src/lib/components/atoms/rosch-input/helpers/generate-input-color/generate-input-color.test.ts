import { generateInputColor, generateInputLabelColor } from "./generate-input-color";
import { Theme } from "../../../../../theme/theme.interface";
import { ThemeColorVariant } from "../../../../../theme/color.interface";

describe("Unit test for generateInputColor", () => {

  const mockTheme = {
    themeColors: {
      inputs: {
        primary: {
          default: { color: "#000000", onColor: "#ffffff" },
          read_only: { color: "#cccccc", onColor: "#dddddd" },
          disabled: { color: "#666666", onColor: "#777777" },
        },
        secondary: {
          default: { color: "#111111", onColor: "#222222" },
          read_only: { color: "#333333", onColor: "#444444" },
          disabled: { color: "#555555", onColor: "#666666" },
        },
        danger: {
          default: { color: "#ff0000", onColor: "#ffffff" },
        },
      },
    },
  } as Theme;

  test("should return default outline color when colorVariant is not provided", () => {
    const css = generateInputColor({ theme: mockTheme });
    expect(css).toContain("outline: 0.05rem solid #000000;");
  });

  test("should return the outline color for the specified colorVariant", () => {
    const css = generateInputColor({ theme: mockTheme, colorVariant: "primary" });
    expect(css).toContain("outline: 0.05rem solid #000000;");
  });

  test("should return the outline color for the danger variant when error is present", () => {
    const css = generateInputColor({ theme: mockTheme, colorVariant: "primary", error: "Error message" });
    expect(css).toContain("outline: 0.05rem solid #ff0000;");
  });

  test("should return the outline color for readOnly state", () => {
    const css = generateInputColor({ theme: mockTheme, colorVariant: "primary", readOnly: true });
    expect(css).toContain("outline: 0.05rem solid #dddddd;");
    expect(css).toContain("&:focus {");
    expect(css).toContain("outline: 0.1rem solid #ffffff;");
  });

  test("should return the outline color for disabled state when readOnly is true", () => {
    const css = generateInputColor({ theme: mockTheme, colorVariant: "primary", readOnly: true });
    expect(css).toContain("&:disabled {");
    expect(css).toContain("outline: 0.05rem solid #777777;");
  });

  test("should return the correct outline color for secondary colorVariant", () => {
    const css = generateInputColor({ theme: mockTheme, colorVariant: "secondary" });
    expect(css).toContain("outline: 0.05rem solid #111111;");
  });

  test("should return default outline color when themeColors.inputs is undefined", () => {
    const css = generateInputColor({ theme: { themeColors: {} } as Theme });
    expect(css).toContain("outline: 0.05rem solid black;");
  });

  test("should fallback to primary color when colorVariant is not primary, secondary, or tertiary", () => {
    const css = generateInputColor({ theme: mockTheme, colorVariant: "danger" as ThemeColorVariant });
    expect(css).toContain("outline: 0.05rem solid #000000;");
  });

});

describe("Unit test for generateInputLabelColor", () => {
  const mockTheme = {
    themeColors: {
      inputs: {
        danger: {
          default: { color: "#ff0000" }
        }
      }
    }
  } as Theme;
  
  test("should return the correct label color when an error is present", () => {
    const css = generateInputLabelColor({ error: "Some error", theme: mockTheme });
    expect(css).toContain(".rosch__input__label {");
    expect(css).toContain("color: #ff0000");
  });
  
  test("should return undefined if no error is present", () => {
    const css = generateInputLabelColor({ theme: mockTheme });
    expect(css).toBe("");
  });
  
  test("should return undefined if themeColors.inputs.danger is undefined", () => {
    const css = generateInputLabelColor({ error: "Some error", theme: { themeColors: {} } as Theme });
    expect(css).toBe("");
  });
});