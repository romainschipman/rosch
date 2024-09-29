import { generateRadius } from "./generate-radius";
import { defaultTheme } from "../../theme/default/default-theme";
import { RadiusSize } from "../../theme/theme.interface";

describe("Unit test for generateRadius", () => {
    test("should return the radius size from the provided radiusSizes object", () => {
        const radiusSizes: Record<RadiusSize, string> = {
            none: "0px",
            sm: "2px",
            md: "4px",
            lg: "8px",
            xl: "16px",
            xxl: "24px",
            pills: "9999px",
        };

        const result = generateRadius("lg", radiusSizes);
        expect(result).toBe("8px");
    });

    test("should return the radius size from defaultTheme when radiusSizes is not provided", () => {
        const result = generateRadius("md");
        expect(result).toBe(defaultTheme.radiusSizes["md"]);
    });

    test("should handle edge cases where radius is not in the provided radiusSizes object", () => {
        const radiusSizes: Record<RadiusSize, string> = {
            none: "0px",
            sm: "2px",
            md: "4px",
            lg: "8px",
            xl: "16px",
            xxl: "24px",
            pills: "9999px",
        };

        const result = generateRadius("pills", radiusSizes);
        expect(result).toBe("9999px");
    });
});
