/**
 * Type representing possible text sizes in the theme.
 * Defines the various text sizes available in the theme, ranging from extra-small (`xs`) to double extra-large (`xxl`).
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} TextSize
 */
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

/**
 * Type representing possible spacing sizes in the theme.
 * Defines the various spacing sizes available in the theme, ranging from extra-small (`xs`) to double extra-large (`xxl`).
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} SpacingSize
 */
export type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

/**
 * Type representing possible border radius sizes in the theme.
 * Defines the various border-radius sizes available in the theme, including the special `pills` size which applies a fully rounded corner.
 * @typedef {"none" | "sm" | "md" | "lg" | "xl" | "xxl" | "pills"} RadiusSize
 */
export type RadiusSize = "none" | "sm" | "md" | "lg" | "xl" | "xxl" | "pills";

/**
 * Represents a color palette within the theme.
 * A structure defining a color palette with multiple shades, from the lightest to the darkest.
 * @interface ColorPalette
 * 
 * @property {string} lightest - The lightest shade of the color.
 * @property {string} light - A light shade of the color.
 * @property {string} base - The base color.
 * @property {string} dark - A dark shade of the color.
 * @property {string} darkest - The darkest shade of the color.
 */
export interface ColorPalette {
    lightest: string;
    light: string;
    base: string;
    dark: string;
    darkest: string;
}

/**
 * Represents the structure of the application's theme.
 * This interface defines the structure of the application's theme, including color palettes, text sizes, spacing, border-radius sizes, and default styles for buttons and input fields.
 * @interface Theme
 * 
 * @property {string} name - The name of the theme.
 * @property {Object.<string, ColorPalette>} colors - The color palettes used in the theme.
 * @property {ColorPalette} colors.primary - The primary color palette.
 * @property {ColorPalette} colors.secondary - The secondary color palette.
 * @property {ColorPalette} colors.success - The success color palette.
 * @property {ColorPalette} colors.danger - The danger color palette.
 * @property {ColorPalette} colors.warning - The warning color palette.
 * @property {ColorPalette} colors.info - The info color palette.
 * @property {ColorPalette} colors.light - The light color palette.
 * @property {ColorPalette} colors.dark - The dark color palette.
 * @property {Record<TextSize, string>} textSizes - The text sizes available in the theme, mapped to their respective size labels.
 * @property {TextSize} defaultTextSize - The default text size used in the theme.
 * @property {Record<SpacingSize, string>} spacings - The spacing sizes used in the theme, mapped to their respective size labels.
 * @property {SpacingSize} defaultSpacing - The default spacing size used in the theme.
 * @property {Record<RadiusSize, string>} radiusSizes - The border-radius sizes used in the theme, mapped to their respective size labels.
 * @property {RadiusSize} defaultRadiusSize - The default border-radius size used in the theme.
 * @property {Object} buttons - Default styles for buttons in the theme.
 * @property {string} buttons.backgroundColor - Default background color for buttons.
 * @property {RadiusSize} buttons.radius - Default border-radius for buttons.
 * @property {SpacingSize} buttons.spacing - Default spacing for buttons.
 * @property {TextSize} buttons.textSize - Default text size for buttons.
 * @property {Object} inputs - Default styles for input fields in the theme.
 * @property {string} inputs.backgroundColor - Default background color for input fields.
 * @property {RadiusSize} inputs.radius - Default border-radius for input fields.
 * @property {SpacingSize} inputs.spacing - Default spacing for input fields.
 * @property {TextSize} inputs.textSize - Default text size for input fields.
 */
export interface Theme {
    name: string;
    colors: {
        primary: ColorPalette;
        secondary: ColorPalette;
        success: ColorPalette;
        danger: ColorPalette;
        warning: ColorPalette;
        info: ColorPalette;
        light: ColorPalette;
        dark: ColorPalette;
    };
    textSizes: Record<TextSize, string>;
    defaultTextSize: TextSize;
    spacings: Record<SpacingSize, string>;
    defaultSpacing: SpacingSize;
    radiusSizes: Record<RadiusSize, string>;
    defaultRadiusSize: RadiusSize;
    buttons: {
        backgroundColor: string;
        radius: RadiusSize;
        spacing: SpacingSize;
        textSize: TextSize;
    };
    inputs: {
        backgroundColor: string;
        radius: RadiusSize;
        spacing: SpacingSize;
        textSize: TextSize;
    };
}
