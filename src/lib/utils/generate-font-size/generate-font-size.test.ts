import { generateFontSize } from "./generate-font-size";
import { defaultTheme } from "../../theme/default/default-theme";
import { TextSize } from "../../theme/theme.interface";

describe("Unit test for generateFontSize", () => {
    test("should return the font size from the provided fontSizes object", () => {
        const fontSizes: Record<TextSize, string> = {
            xs: "10px",
            sm: "12px",
            md: "14px",
            lg: "16px",
            xl: "18px",
            xxl: "20px",
        };

        const result = generateFontSize("lg", fontSizes);
        expect(result).toBe("16px");
    });

    test("should return the font size from defaultTheme when fontSizes is not provided", () => {
        const result = generateFontSize("md", undefined as any);
        expect(result).toBe(defaultTheme.textSizes["md"]);
    });

    test("should handle edge cases where fontSize is not in the provided fontSizes object", () => {
        const fontSizes: Record<TextSize, string> = {
            xs: "10px",
            sm: "12px",
            md: "14px",
            lg: "16px",
            xl: "18px",
            xxl: "20px",
        };

        const result = generateFontSize("xxl", fontSizes);
        expect(result).toBe("20px");
    });
});
