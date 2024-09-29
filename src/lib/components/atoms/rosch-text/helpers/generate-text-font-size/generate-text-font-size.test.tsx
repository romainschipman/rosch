import { generateTextFontSize } from "./generate-text-font-size";
import { Theme } from "../../../../../theme/theme.interface";

// Mock de la fonction generateFontSize
jest.mock("../../../../../utils/generate-font-size/generate-font-size", () => ({
    generateFontSize: (size: string, textSizes: Record<string, string>) => textSizes[size] || "16px",
}));

describe("Unit test for generateTextFontSize", () => {
    const theme: Theme = {
        defaultTextSize: "md",
        textSizes: {
            sm: "12px",
            md: "16px",
            lg: "20px",
        },
    // Ajoutez les autres propriétés du thème ici si nécessaire
    } as any;

    test("should use the default text size from the theme if fontSize is not provided", () => {
        const css = generateTextFontSize({ theme });
        expect(css).toBe(`
          font-size: 16px;
      `);
    });

    test("should use the provided fontSize prop if available", () => {
        const css = generateTextFontSize({ theme, fontSize: "lg" });
        expect(css).toBe(`
          font-size: 20px;
      `);
    });

    test("should fall back to \"md\" size if neither fontSize nor defaultTextSize are provided", () => {
        const customTheme = { ...theme, defaultTextSize: undefined };
        const css = generateTextFontSize({ theme: customTheme as any });
        expect(css).toBe(`
          font-size: 16px;
      `);
    });

    test("should return the correct font-size for a small size", () => {
        const css = generateTextFontSize({ theme, fontSize: "sm" });
        expect(css).toBe(`
          font-size: 12px;
      `);
    });

    test("should return the correct font-size when no fontSize is provided but the theme has a default", () => {
        const css = generateTextFontSize({ theme });
        expect(css).toBe(`
          font-size: 16px;
      `);
    });
});
