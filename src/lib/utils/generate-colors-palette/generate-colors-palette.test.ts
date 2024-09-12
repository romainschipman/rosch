import { generateColorsPalette } from "./generate-colors-palette";
import { ThemeColorPalette } from "../../theme/color.interface";
import { defaultThemeColors } from "../../theme/default/default-theme-color";

describe("generateColorsPalette", () => {
  
  test("should return defaultThemeColors when no colors are provided", () => {
    const result = generateColorsPalette();
    expect(result).toEqual(defaultThemeColors);
  });

  test("should fill missing component types with defaultThemeColors", () => {
    const customColors: ThemeColorPalette = {
      buttons: {
        primary: {
          default: {
            color: "#000000",
            onColor: "#ffffff"
          }
        }
      }
    };
    const result = generateColorsPalette(customColors);
    expect(result.buttons?.primary).toEqual({
      default: { color: "#000000", onColor: "#ffffff" },
      disabled: defaultThemeColors.buttons?.primary?.disabled,
      read_only: defaultThemeColors.buttons?.primary?.read_only,
      focus: defaultThemeColors.buttons?.primary?.focus,
    });
    expect(result.inputs).toEqual(defaultThemeColors.inputs);
    expect(result.texts).toEqual(defaultThemeColors.texts);
  });

  test("should fill missing color variants with defaults", () => {
    const customColors: ThemeColorPalette = {
      buttons: {
        primary: {
          default: {
            color: "#000000",
            onColor: "#ffffff"
          }
        }
      }
    };
    const result = generateColorsPalette(customColors);
    
    expect(result.buttons?.primary).toEqual({
      default: { color: "#000000", onColor: "#ffffff" },
      disabled: defaultThemeColors.buttons?.primary?.disabled,
      focus: defaultThemeColors.buttons?.primary?.focus,
      read_only: defaultThemeColors.buttons?.primary?.read_only,
    });
  });
  

  test("should preserve provided color variants and add missing ones from defaults", () => {
    const customColors: ThemeColorPalette = {
      buttons: {
        primary: {
          default: {
            color: "#000000",
            onColor: "#ffffff"
          },
          success: {
            default: {
              color: "#28a745",
              onColor: "#ffffff"
            }
          }
        } as any
      }
    };
    const result = generateColorsPalette(customColors);
    
    expect(result.buttons?.primary).toEqual({
      default: { color: "#000000", onColor: "#ffffff" },
      success: { default: { color: "#28a745", onColor: "#ffffff" } },
      disabled: defaultThemeColors.buttons?.primary?.disabled,
      read_only: defaultThemeColors.buttons?.primary?.read_only,
      focus: defaultThemeColors.buttons?.primary?.focus,
    });
  });

});
