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

  test.skip("should handle custom color variants in the palette", () => {
    const customColors: ThemeColorPalette = {
      buttons: {
        primary: {
          default: {
            color: "#000000",
            onColor: "#ffffff"
          }
        },
        customs: {
          custom1: {
            default: {
              color: "#ff0000",
              onColor: "#00ff00"
            }
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
    expect(result.buttons?.customs?.custom1).toEqual({
      default: { color: "#ff0000", onColor: "#00ff00" }
    });
  });
  

  test.skip("should throw an error if defaultThemeColors is undefined for a component type", () => {
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
  
    // Simuler la suppression des couleurs par défaut pour les boutons
    (defaultThemeColors as any).buttons = undefined;
  
    expect(() => generateColorsPalette(customColors)).toThrow(
      "defaultThemeColors shouldn't be undefined"
    );
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
