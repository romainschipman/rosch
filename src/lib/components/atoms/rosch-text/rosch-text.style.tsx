import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";
import { ColorType, TextSize } from "../../../theme/theme.interface";
import { generateTextDecoration } from "./helpers/generate-text-decoration/generate-text-decoration";
import { generateTextColor } from "./helpers/generate-text-color/generate-text-color";
import { generateTextFontSize } from "./helpers/generate-text-font-size/generate-text-font-size";

/**
 * Interface for the props of the `RoschTextStyled` component.
 * Extends `CssProperties` to include additional styling options.
 *
 * @property {boolean} [bold] - Optional property to apply bold styling to the text.
 * @property {boolean} [underline] - Optional property to apply underline styling to the text.
 * @property {boolean} [uppercase] - Optional property to apply uppercase styling to the text.
 * @property {string} [colorType] - Optional property to apply a specific color type from the theme.
 */
export interface RoschTextStyledProps extends CssProperties {
    /**
     * Optional property to apply bold styling to the text
     */
    bold?: boolean;
    /**
     * Optional property to apply underline styling to the text.
     */
    underline?: boolean;
    /**
     * Optional property to apply uppercase styling to the text.
     */
    uppercase?: boolean;
    /**
     * Optional property to apply a specific color type from the theme.
     */
    colorType?: ColorType;
    /**
     * Optional propety to apply a specific font size
     */
    fontSize?: TextSize;
}

/**
 * A styled component for text, which includes customizable properties such as
 * font size, padding, and bold styling. It uses `generateCssProperties` to apply
 * dynamic styles based on the provided props and theme.
 *
 * @example
 * ```tsx
 * <RoschTextStyled bold="true" fontSize="lg">
 *   Bold and large text
 * </RoschTextStyled>
 * ```
 */
const RoschTextStyled = styled.text<RoschTextStyledProps>`
    ${generateCssProperties}
    ${generateTextDecoration}
    ${generateTextColor}
    ${generateTextFontSize}
    letter-spacing: 0.15rem;
    fontSize: 
`;

export { RoschTextStyled };
