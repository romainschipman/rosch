import { generateInputSize } from "./generate-input-size";
import { SpacingSize, Theme } from "../../../../../theme/theme.interface";
import { generateFontSize } from "../../../../../utils/generate-font-size/generate-font-size";

jest.mock("../../../../../utils/generate-font-size/generate-font-size");

describe("generateInputSize", () => {

    const mockTheme = {
        spacings: {
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "32px",
            xxl: "40px"
        },
        textSizes: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
            xl: "20px",
            xxl: "24px"
        }
    } as Theme;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should return empty string if neither size nor fontSize are provided", () => {
        const css = generateInputSize({ theme: mockTheme });
        expect(css).toBe("");
    });

    test("should return font-size only if size is not provided", () => {
        (generateFontSize as jest.Mock).mockReturnValue("16px");
        const css = generateInputSize({ theme: mockTheme, fontSize: "md" });
        expect(css).toBe("font-size: 16px;");
        expect(generateFontSize).toHaveBeenCalledWith("md", mockTheme.textSizes);
    });

    test("should generate correct padding and font-size when size and fontSize are provided", () => {
        (generateFontSize as jest.Mock).mockImplementation((size : SpacingSize) => {
            return mockTheme.spacings[size] || mockTheme.textSizes[size];
        });

        const css = generateInputSize({ theme: mockTheme, size: "md", fontSize: "lg" });
        expect(css).toContain("padding-left: 16px;");
        expect(css).toContain("padding-right: 16px;");
        expect(css).toContain("font-size: 24px;");
        expect(css).toContain("padding-top: 16px;");
        expect(css).toContain("padding-bottom: 16px;");
    });

    test("should generate correct padding for size xs and sm", () => {
        (generateFontSize as jest.Mock).mockImplementation((size : SpacingSize) => {
            return mockTheme.spacings[size] || mockTheme.textSizes[size];
        });

        const css = generateInputSize({ theme: mockTheme, size: "xs", fontSize: "sm" });
        expect(css).toContain("padding-left: 4px;");
        expect(css).toContain("padding-right: 4px;");
        expect(css).toContain("padding-top: 8px;");
        expect(css).toContain("padding-bottom: 8px;");
    });

    test("should generate correct padding for size xl and xxl", () => {
        (generateFontSize as jest.Mock).mockImplementation((size : SpacingSize) => {
            return mockTheme.spacings[size] || mockTheme.textSizes[size];
        });

        const css = generateInputSize({ theme: mockTheme, size: "xl", fontSize: "xxl" });
        expect(css).toContain("padding-left: 32px;");
        expect(css).toContain("padding-right: 32px;");
        expect(css).toContain("padding-top: 24px;");
        expect(css).toContain("padding-bottom: 24px;");
    });

    test("should generate correct padding for size xl and xxl", () => {
        (generateFontSize as jest.Mock).mockImplementation((size : SpacingSize) => {
            return mockTheme.spacings[size] || mockTheme.textSizes[size];
        });

        const css = generateInputSize({ theme: mockTheme, size: "xxl", fontSize: "xxl" });
        expect(css).toContain("padding-left: 40px;");
        expect(css).toContain("padding-right: 40px;");
        expect(css).toContain("padding-top: 24px;");
        expect(css).toContain("padding-bottom: 24px;");
    });

    test("should generate correct padding for size md and lg", () => {
        (generateFontSize as jest.Mock).mockImplementation((size : SpacingSize) => {
            return mockTheme.spacings[size] || mockTheme.textSizes[size];
        });

        const css = generateInputSize({ theme: mockTheme, size: "md", fontSize: "lg" });
        expect(css).toContain("padding-left: 16px;");
        expect(css).toContain("padding-right: 16px;");
        expect(css).toContain("padding-top: 16px;");
        expect(css).toContain("padding-bottom: 16px;");
    });
});
