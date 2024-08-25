import { generateTextColor } from "./generate-text-color";
import { ColorType, Theme } from "../../../../../theme/theme.interface";

describe("Unit test for generateTextColor", () => {
  let theme: Theme = {
    name: "default",
    colors: {
      primary: { lightest: "#e0f7fa", light: "#b2ebf2", base: "#007bff", dark: "#004d40", darkest: "#00251a" },
      secondary: { lightest: "#fce4ec", light: "#f8bbd0", base: "#6c757d", dark: "#880e4f", darkest: "#560027" },
      success: { lightest: "#e8f5e9", light: "#a5d6a7", base: "#28a745", dark: "#2e7d32", darkest: "#1b5e20" },
      danger: { lightest: "#ffebee", light: "#ef9a9a", base: "#dc3545", dark: "#c62828", darkest: "#b71c1c" },
      warning: { lightest: "#fffde7", light: "#fff59d", base: "#ffc107", dark: "#fbc02d", darkest: "#f57f17" },
      info: { lightest: "#e3f2fd", light: "#90caf9", base: "#17a2b8", dark: "#1976d2", darkest: "#0d47a1" },
      light: { lightest: "#fafafa", light: "#f5f5f5", base: "#f8f9fa", dark: "#bdbdbd", darkest: "#616161" },
      dark: { lightest: "#424242", light: "#212121", base: "#343a40", dark: "#000000", darkest: "#000000" },
    }
  } as Theme;;



  if(!theme) {
    throw new Error("theme shouldn't be undefined");
  }

  test("should return the correct CSS color string for a valid colorType", () => {
    const result = generateTextColor({ theme, colorType: "primary" });
    expect(result).toBe("color: #007bff;");
  });

  test("should return an empty string if colorType is not provided", () => {
    const result = generateTextColor({ theme });
    expect(result).toBe("");
  });

  test("should return the correct CSS color string for a different valid colorType", () => {
    const result = generateTextColor({ theme, colorType: "secondary" });
    expect(result).toBe("color: #6c757d;");
  });

  test("should handle undefined colorType by returning an empty string", () => {
    const result = generateTextColor({ theme, colorType: undefined });
    expect(result).toBe("");
  });

  test("should handle an unexpected colorType gracefully", () => {
    const result = generateTextColor({ theme, colorType: "unexpected" as ColorType });
    expect(result).toBe("");
  });
});
