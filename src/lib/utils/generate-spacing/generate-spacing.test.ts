import { generateSpacing } from "./generate-spacing";
import { defaultTheme } from "../../theme/default/default-theme";
import { SpacingSize } from "../../theme/theme.interface";

describe("Unit test for generateSpacing", () => {
    test("should return the spacing size from the provided spacingSizes object", () => {
        const spacingSizes: Record<SpacingSize, string> = {
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "32px",
            xxl: "40px",
        };

        const result = generateSpacing("lg", spacingSizes);
        expect(result).toBe("24px");
    });

    test("should return the spacing size from defaultTheme when spacingSizes is not provided", () => {
        const result = generateSpacing("md", undefined as any);
        expect(result).toBe(defaultTheme.spacings["md"]);
    });

    test("should handle edge cases where spacing is not in the provided spacingSizes object", () => {
        const spacingSizes: Record<SpacingSize, string> = {
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "32px",
            xxl: "40px",
        };

        const result = generateSpacing("xxl", spacingSizes);
        expect(result).toBe("40px");
    });
});
