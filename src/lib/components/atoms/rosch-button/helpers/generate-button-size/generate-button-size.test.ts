import { generateButtonSize } from "./generate-button-size";
import { Theme } from "../../../../../theme/theme.interface";

// Mock de la fonction generateFontSize
jest.mock("../../../../../utils/generate-font-size/generate-font-size", () => ({
  generateFontSize: jest.fn((size: string, spacings: Record<string, string>) => spacings[size] || "16px"),
}));

describe("generateButtonSize", () => {
  const theme: Theme = {
    spacings: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
      xxl: "24px",
    },
    textSizes: {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
      xxl: "20px",
    },
    // Ajoutez d'autres propriétés du thème si nécessaire
  } as unknown as Theme;

  test("should return an empty string if no size is provided", () => {
    const css = generateButtonSize({ theme });
    expect(css).toBe("");
  });

  test("should generate correct padding and text size for xs size", () => {
    const css = generateButtonSize({ theme, size: "xs" });
    expect(css).toContain("padding-left: 4px;");
    expect(css).toContain("padding-right: 4px;");
    expect(css).toContain("font-size: 10px;");
    expect(css).toContain("padding-top: 8px;");
    expect(css).toContain("padding-bottom: 8px;");
  });

  test("should generate correct padding and text size for sm size", () => {
    const css = generateButtonSize({ theme, size: "sm" });
    expect(css).toContain("padding-left: 8px;");
    expect(css).toContain("padding-right: 8px;");
    expect(css).toContain("font-size: 12px;");
    expect(css).toContain("padding-top: 8px;");
    expect(css).toContain("padding-bottom: 8px;");
  });

  test("should generate correct padding and text size for md size", () => {
    const css = generateButtonSize({ theme, size: "md" });
    expect(css).toContain("padding-left: 12px;");
    expect(css).toContain("padding-right: 12px;");
    expect(css).toContain("font-size: 14px;");
    expect(css).toContain("padding-top: 12px;");
    expect(css).toContain("padding-bottom: 12px;");
  });

  test("should generate correct padding and text size for lg size", () => {
    const css = generateButtonSize({ theme, size: "lg" });
    expect(css).toContain("padding-left: 16px;");
    expect(css).toContain("padding-right: 16px;");
    expect(css).toContain("font-size: 16px;");
    expect(css).toContain("padding-top: 12px;");
    expect(css).toContain("padding-bottom: 12px;");
  });

  test("should generate correct padding and text size for xl size", () => {
    const css = generateButtonSize({ theme, size: "xl" });
    expect(css).toContain("padding-left: 20px;");
    expect(css).toContain("padding-right: 20px;");
    expect(css).toContain("font-size: 18px;");
    expect(css).toContain("padding-top: 16px;");
    expect(css).toContain("padding-bottom: 16px;");
  });

  test("should generate correct padding and text size for xxl size", () => {
    const css = generateButtonSize({ theme, size: "xxl" });
    expect(css).toContain("padding-left: 24px;");
    expect(css).toContain("padding-right: 24px;");
    expect(css).toContain("font-size: 20px;");
    expect(css).toContain("padding-top: 16px;");
    expect(css).toContain("padding-bottom: 16px;");
  });
});
