import { Theming, generateCssProperties } from "./generate-css-properties";
import { generateFontSize } from "../generate-font-size/generate-font-size";
import { generateRadius } from "../generate-radius/generate-radius";
import { CssProperties } from "../../interfaces/css-properties.interface";
import { Theme } from "../../theme/theme.interface";
import { generateSpacing } from "../generate-spacing/generate-spacing";

// Mock the `generateFontSize` and `generateRadius` functions
jest.mock("../generate-font-size/generate-font-size", () => ({
  generateFontSize: jest.fn(),
}));

jest.mock("../generate-radius/generate-radius", () => ({
  generateRadius: jest.fn(),
}));

jest.mock("../generate-spacing/generate-spacing", () => ({
  generateSpacing: jest.fn(),
}));

describe("Unit test for generateCssProperties", () => {
  let theme: Theme | undefined = undefined;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    theme = {
      name: "default",
      colors: {
        primary: { lightest: "#e0f7fa", light: "#b2ebf2", base: "#00bcd4", dark: "#00838f", darkest: "#004d40" },
        secondary: { lightest: "#fce4ec", light: "#f8bbd0", base: "#e91e63", dark: "#880e4f", darkest: "#560027" },
        success: { lightest: "#e8f5e9", light: "#a5d6a7", base: "#4caf50", dark: "#2e7d32", darkest: "#1b5e20" },
        danger: { lightest: "#ffebee", light: "#ef9a9a", base: "#f44336", dark: "#c62828", darkest: "#b71c1c" },
        warning: { lightest: "#fffde7", light: "#fff59d", base: "#ffeb3b", dark: "#fbc02d", darkest: "#f57f17" },
        info: { lightest: "#e3f2fd", light: "#90caf9", base: "#2196f3", dark: "#1976d2", darkest: "#0d47a1" },
        light: { lightest: "#fafafa", light: "#f5f5f5", base: "#eeeeee", dark: "#bdbdbd", darkest: "#616161" },
        dark: { lightest: "#424242", light: "#212121", base: "#000000", dark: "#000000", darkest: "#000000" },
      },
      textSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "24px",
      },
      defaultTextSize: "md",
      spacings: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "40px",
      },
      defaultSpacing: "md",
      radiusSizes: {
        none: "0px",
        sm: "2px",
        md: "4px",
        lg: "8px",
        xl: "16px",
        xxl: "24px",
        pills: "9999px",
      },
      defaultRadiusSize: "md",
      buttons: {
        backgroundColor: "#00bcd4",
        radius: "md",
        spacing: "sm",
        textSize: "lg",
      },
      inputs: {
        backgroundColor: "#ffffff",
        radius: "sm",
        spacing: "xs",
        textSize: "md",
      }
    };

    // Set default return values for the mocked functions
    (generateFontSize as jest.Mock).mockReturnValue("16px");
    (generateRadius as jest.Mock).mockReturnValue("4px");
    (generateSpacing as jest.Mock).mockReturnValue("10px");
  });

  test("should generate CSS properties with theme values when no props or default values are provided", () => {
    const props = { theme } as Theming;

    const result = generateCssProperties(props);

    expect(result).toContain("font-size:16px;");
    expect(result).toContain("border-radius:4px;");
    expect(result).not.toContain("width:");
    expect(result).not.toContain("height:");
    expect(result).not.toContain("max-width:");
    expect(result).not.toContain("max-height:");
    expect(result).not.toContain("padding:");
    expect(result).not.toContain("padding-left:");
    expect(result).not.toContain("padding-right:");
    expect(result).not.toContain("padding-top:");
    expect(result).not.toContain("padding-bottom:");
  });

  test("should override theme values with defaultValues", () => {
    const props = { theme } as Theming;
    const defaultValues: CssProperties = {
      fontSize: "sm",
      radius: "lg",
      width: "100px",
      height: "50px",
      maxWidth: "200px",
      maxHeight: "150px",
      padding: "md",
      paddingHorizontal: "xs",
      paddingVertical: "xl",
    } as CssProperties;

    const result = generateCssProperties(props, defaultValues);

    expect(generateFontSize).toHaveBeenCalledWith("sm", theme?.textSizes);
    expect(generateRadius).toHaveBeenCalledWith("lg", theme?.radiusSizes);
    expect(generateSpacing).toHaveBeenCalledWith("md", theme?.spacings);
    expect(generateSpacing).toHaveBeenCalledWith("xs", theme?.spacings);
    expect(generateSpacing).toHaveBeenCalledWith("xl", theme?.spacings);

    expect(result).toContain("font-size:16px;"); // Uses mock value
    expect(result).toContain("border-radius:4px;"); // Uses mock value
    expect(result).toContain("width:100px;");
    expect(result).toContain("height:50px;");
    expect(result).toContain("max-width:200px;");
    expect(result).toContain("max-height:150px;");
    expect(result).toContain("padding:10px;");
    expect(result).toContain("padding-left:10px;");
    expect(result).toContain("padding-right:10px;");
    expect(result).toContain("padding-top:10px;");
    expect(result).toContain("padding-bottom:10px;");
  });

  test("should override theme and defaultValues with props", () => {
    if(!theme) {
      throw new Error("theme should'nt be undefined");
    }

    const props: CssProperties & { theme: Theme } = {
      theme,
      fontSize: "lg",
      radius: "pills",
      width: "150px",
      height: "75px",
      maxWidth: "250px",
      maxHeight: "175px",
      padding: "xxl",
      paddingHorizontal: "xxl",
      paddingVertical: "xxl",
    } as unknown as Theming;
    const defaultValues: CssProperties = {
      fontSize: "sm",
      radius: "sm",
      width: "100px",
      height: "50px",
      maxWidth: "200px",
      maxHeight: "150px",
      padding: "md",
      paddingHorizontal: "md",
      paddingVertical: "md",
    } as CssProperties;

    const result = generateCssProperties(props, defaultValues);

    expect(generateFontSize).toHaveBeenCalledWith("lg", theme?.textSizes);
    expect(generateRadius).toHaveBeenCalledWith("pills", theme?.radiusSizes);
    expect(generateSpacing).toHaveBeenCalledWith("xxl", theme?.spacings);

    expect(result).toContain("font-size:16px;"); // Uses mock value
    expect(result).toContain("border-radius:4px;"); // Uses mock value
    expect(result).toContain("width:150px;");
    expect(result).toContain("height:75px;");
    expect(result).toContain("max-width:250px;");
    expect(result).toContain("max-height:175px;");
    expect(result).toContain("padding:10px;");
    expect(result).toContain("padding-left:10px;");
    expect(result).toContain("padding-right:10px;");
    expect(result).toContain("padding-top:10px;");
    expect(result).toContain("padding-bottom:10px;");
  });

  test("should handle missing optional properties gracefully", () => {
    const props = {
      theme,
      width: "150px",
    } as Theming;

    const result = generateCssProperties(props);

    expect(result).toContain("width:150px;");
    expect(result).toContain("font-size:16px;"); // Uses mock value
    expect(result).toContain("border-radius:4px;"); // Uses mock value
    expect(result).not.toContain("height:");
    expect(result).not.toContain("max-width:");
    expect(result).not.toContain("max-height:");
    expect(result).not.toContain("padding:");
  });
});
