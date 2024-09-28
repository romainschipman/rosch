import { ThemeColorPalette } from "../../theme/color.interface";
import { defaultThemeColors } from "../../theme/default/default-theme-color";

const componentsTypes = ["buttons", "inputs", "texts"] as const; // Les différents types de composants
type ComponentType = (typeof componentsTypes)[number]; // Le type des composants

const themeColorsVariants = ["primary", "secondary", "tertiary", "success", "warning", "info", "danger"] as const;
type ThemeColorVariant = (typeof themeColorsVariants)[number]; // Les variantes de couleurs

/**
 * Generates a complete color palette for the theme based on the provided colors.
 * 
 * This function takes an optional `ThemeColorPalette` object and compares it against the default theme colors.
 * If a specific component type or color variant is missing in the provided palette, the function fills in the gaps
 * using the default theme colors. If no palette is provided, it returns the default theme colors.
 * 
 * @param {ThemeColorPalette} [colors] - An optional object containing custom theme colors for various component types and color variants.
 * 
 * @returns {ThemeColorPalette} - A complete color palette that includes all component types and color variants, with defaults where necessary.
 */
const generateColorsPalette = (colors?: ThemeColorPalette): ThemeColorPalette => {
    if (!colors) {
        return defaultThemeColors;
    }

    let newThemeColor: ThemeColorPalette = {};

    componentsTypes.forEach((componentType: ComponentType) => {
        const colorsComponent = colors[componentType];
        const defaultThemeColorComponent = defaultThemeColors[componentType];

        if (!colorsComponent) {
            newThemeColor[componentType] = defaultThemeColorComponent;
        } else {
            const newColorsComponent: Partial<typeof colorsComponent> = {
                primary: { ...defaultThemeColorComponent?.primary, ...colorsComponent.primary },
            };

            themeColorsVariants.forEach((themeColorVariant: ThemeColorVariant) => {
                if (!colorsComponent[themeColorVariant]) {
                    newColorsComponent[themeColorVariant] = defaultThemeColorComponent?.[themeColorVariant];
                } else {
                    newColorsComponent[themeColorVariant] = {
                        ...defaultThemeColorComponent?.[themeColorVariant],
                        ...colorsComponent[themeColorVariant],
                    };
                }
            });

            newThemeColor[componentType] = newColorsComponent as typeof colorsComponent;
        }
    });

    return newThemeColor;
};
export { generateColorsPalette };