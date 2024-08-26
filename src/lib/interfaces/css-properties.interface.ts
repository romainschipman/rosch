import { RadiusSize, SpacingSize, TextSize } from "../theme/theme.interface";

/**
 * Represents a set of CSS properties that can be applied to a component.
 *
 * @interface CssProperties
 * @property {string} id - The unique identifier for the component.
 * @property {string} [data-testid] - Optional. The test identifier used for testing purposes.
 * @property {string} [className] - Optional. The CSS class name(s) to be applied to the component.
 * @property {string} [width] - Optional. The width of the component, defined as a CSS value (e.g., "100px", "50%", "auto").
 * @property {string} [maxWidth] - Optional. The maximum width of the component, defined as a CSS value.
 * @property {string} [height] - Optional. The height of the component, defined as a CSS value.
 * @property {string} [maxHeight] - Optional. The maximum height of the component, defined as a CSS value.
 * @property {RadiusSize} [radius] - Optional. The border-radius of the component, using predefined values from the theme.
 * @property {SpacingSize} [paddingHorizontal] - Optional. The horizontal padding of the component, using predefined values from the theme.
 * @property {SpacingSize} [paddingVertical] - Optional. The vertical padding of the component, using predefined values from the theme.
 * @property {SpacingSize} [padding] - Optional. The padding for all sides of the component, using predefined values from the theme.
 * @property {SpacingSize} [size] - Optional. The size for the component, using predefined values from the theme.
 */
export interface CssProperties {
    /**
     * CssProperties. The unique identifier for the component.
     */
    id: string;
    /**
     * CssProperties. The test identifier used for testing purposes.
     */
    "data-testid"?: string;
    /**
     * CssProperties. The CSS class name(s) to be applied to the component.
     */
    className?: string;
    /**
     * CssProperties. The width of the component, defined as a CSS value (e.g., "100px", "50%", "auto").
     */
    width?: string;
    /**
     * CssProperties. The maximum width of the component, defined as a CSS value.
     */
    maxWidth?: string;
    /**
     * CssProperties. The height of the component, defined as a CSS value.
     */
    height?: string;
    /**
     * CssProperties. The maximum height of the component, defined as a CSS value.
     */
    maxHeight?: string;
    /**
     * CssProperties. The border-radius of the component, using predefined values from the theme.
     */
    radius?: RadiusSize;
    /**
     * CssProperties. The horizontal padding of the component, using predefined values from the theme.
     */
    paddingHorizontal?: SpacingSize;
    /**
     * CssProperties. The vertical padding of the component, using predefined values from the theme.
     */
    paddingVertical?: SpacingSize;
    /**
     * CssProperties. The padding for all sides of the component, using predefined values from the theme.
     */
    padding?: SpacingSize;
    /**
     * CssProperties. The size for the component, using predefined values from the theme.
     */
    size?: SpacingSize;
    /**
     * @deprecated The fontSize should disappear from the CssProperties interface
     */
    fontSize?: TextSize;
}