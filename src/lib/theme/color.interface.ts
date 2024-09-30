/**
 * Represents the style properties for a specific color state in the theme.
 * 
 * @interface ThemeColorStyles
 * @property {string} onColor - The color used for the background.
 * @property {string} color - The color used for the text or foreground elements?
 */
export interface ThemeColorStyles {
    /**
     * The color used for the background.
     */
    onColor?: string;
    /**
     * The color used for the text or foreground elements
     */
    color?: string;
}

/**
 * Defines the possible states a theme color can have.
 * 
 * @typedef {"default" | "disabled" | "read_only"} ThemeState
 * 
 * - "default": The normal, active state.
 * - "disabled": The state when the element is not interactive.
 * - "read_only": The state when the element is only viewable and not editable.
 */
export type ThemeState = "default" | "disabled" | "read_only" | "focus";

/**
 * Represents the possible color variants used in the theme.
 * 
 * This type defines a set of predefined color names that can be used across the application
 * to apply consistent styling. Each value corresponds to a color palette defined in the theme.
 *
 * @typedef {"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"} ThemeColorVariant
 * 
 * - "primary": The primary color used in the theme.
 * - "secondary": The secondary color used in the theme.
 * - "secondary": The tertiary color used in the theme.
 * - "success": A color representing success states or actions.
 * - "danger": A color representing danger or errors.
 * - "warning": A color representing warnings or cautionary actions.
 * - "info": A color representing informational states.
 */
export type ThemeColorVariant = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info";

/**
 * A record type that associates each ThemeState with its corresponding ThemeColorStyles.
 * @typedef {Partial<Record<ThemeState, ThemeColorStyles>>} ThemeStateStyles
 */
export type ThemeStateStyles = Partial<Record<ThemeState, ThemeColorStyles>>;

/**
 * A type that makes all ThemeColorVariants optional except for the "primary" variant.
 * 
 * @typedef {Partial<Record<Exclude<ThemeColorVariant, "primary">, ThemeStateStyles>>} OptionalThemeColorVariants
 */
export type OptionalThemeColorVariants = Partial<Record<Exclude<ThemeColorVariant, "primary">, ThemeStateStyles>>;

/**
 * Represents the full color palette used in the theme.
 * 
 * This interface defines the structure of color settings for various UI components like buttons, inputs, and text.
 * The primary color variant is mandatory, while others are optional.
 *
 * @interface ThemeColorPalette
 * @property {object} buttons - The color settings for buttons.
 * @property {ThemeStateStyles} buttons.primary - The primary color variant, which is required.
 * @property {OptionalThemeColorVariants} buttons - Other optional color variants for buttons.
 * 
 * @property {object} [inputs] - The color settings for inputs (optional).
 * @property {ThemeStateStyles} inputs.primary - The primary color variant for inputs, which is required.
 * @property {OptionalThemeColorVariants} inputs - Other optional color variants for inputs.
 * 
 * @property {object} [text] - The color settings for text (optional).
 * @property {ThemeStateStyles} text.primary - The primary color variant for text, which is required.
 * @property {OptionalThemeColorVariants} text - Other optional color variants for text.
 */
export interface ThemeColorPalette {
    main?: {
        primary: string;
        secondary?: string;
        tertiary?: string;
        success?: string;
        danger?: string;
        warning?: string;
        info?: string;
        customs?: Record<string, string>
    }
    /**
     * The color settings for buttons (optional).
     */
    buttons?: {
        primary: ThemeStateStyles;
        customs?: Record<string, ThemeStateStyles>;
    } & OptionalThemeColorVariants;
    /**
     * The color settings for inputs (optional).
     */
    inputs?: {
        primary: ThemeStateStyles;
        customs?: Record<string, ThemeStateStyles>;
    } & OptionalThemeColorVariants;
    /**
     * The color settings for text (optional).
     */
    texts?: {
        primary: ThemeStateStyles;
        customs?: Record<string, ThemeStateStyles>;
    } & OptionalThemeColorVariants;
}
