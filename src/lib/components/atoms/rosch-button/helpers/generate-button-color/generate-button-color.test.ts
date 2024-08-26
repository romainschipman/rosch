import { generateButtonColor } from "./generate-button-color";
import { Theme } from "../../../../../theme/theme.interface";

describe("generateButtonColor", () => {
  const theme: Theme = {
    colors: {
      primary: { base: "#007bff", lightest: "#e7f1ff", darkest: "#0056b3", light: "#e7f1ff" },
      light: { base: "#f8f9fa", lightest: "#ffffff", darkest: "#d6d8db", light: "#f8f9fa" },
      success: { base: "#28a745", lightest: "#d4edda", darkest: "#155724" },
      // Add other colors as needed
    },
    // Add other theme properties if needed
  } as Theme;

  test("should return primary button color by default when colorType is not provided", () => {
    const css = generateButtonColor({ theme });
    expect(css).toContain("background-color: #007bff;");
    expect(css).toContain("color: #ffffff;");
    expect(css).toContain("border: 0;");
  });

  test("should apply outline styles correctly", () => {
    const css = generateButtonColor({ theme, outline: true });
    expect(css).toContain("background-color: #ffffff;");
    expect(css).toContain("color: #007bff;");
    expect(css).toContain("border: 0.05rem solid #007bff;");
  });

  test("should apply disabled styles correctly", () => {
    const css = generateButtonColor({ theme, disabled: true });
    expect(css).toContain("background-color: #d6d8db;");
    expect(css).toContain("color: #f8f9fa;");
    expect(css).toContain("border: 0;");
  });

  test("should apply disabled and outline styles correctly", () => {
    const css = generateButtonColor({ theme, disabled: true, outline: true });
    expect(css).toContain("background-color: #f8f9fa;");
    expect(css).toContain("color: #d6d8db;");
    expect(css).toContain("border: 0.05rem solid #d6d8db;");
  });

  test("should return color based on the provided colorType", () => {
    const css = generateButtonColor({ theme, colorType: "success" });
    expect(css).toContain("background-color: #28a745;");
    expect(css).toContain("color: #ffffff;");
    expect(css).toContain("border: 0;");
  });

  test("should apply outline styles with colorType correctly", () => {
    const css = generateButtonColor({ theme, colorType: "success", outline: true });
    expect(css).toContain("background-color: #ffffff;");
    expect(css).toContain("color: #28a745;");
    expect(css).toContain("border: 0.05rem solid #28a745;");
  });

  test("should apply disabled styles with colorType correctly", () => {
    const css = generateButtonColor({ theme, colorType: "success", disabled: true });
    expect(css).toContain("background-color: #d6d8db;");
    expect(css).toContain("color: #f8f9fa;");
    expect(css).toContain("border: 0;");
  });

  test("should apply disabled and outline styles with colorType correctly", () => {
    const css = generateButtonColor({ theme, colorType: "success", disabled: true, outline: true });
    expect(css).toContain("background-color: #f8f9fa;");
    expect(css).toContain("color: #d6d8db;");
    expect(css).toContain("border: 0.05rem solid #d6d8db;");
  });
});
