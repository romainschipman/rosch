import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";
import { generateButtonColor } from "./helpers/generate-button-color/generate-button-color";
import { generateButtonSize } from "./helpers/generate-button-size/generate-button-size";
import { ThemeColorVariant } from "src/lib/theme/color.interface";

/**
 * Interface for the props of the `RoschButtonStyled` component.
 * Extends `CssProperties` to include additional styling options.
 *
 * @interface RoschButtonStyledProps
 * @extends {CssProperties}
 * 
 * @property {ThemeColorVariant} [colorVariant] - Optional property to apply a specific color type from the theme.
 * @property {boolean} [disabled] - Optional property to disable the button.
 * @property {boolean} [outline] - Optional property to render the button with an outline style.
 */
export interface RoschButtonStyledProps extends CssProperties {
    /**
     * Optional property to apply a specific color type from the theme.
     */
    colorVariant?: ThemeColorVariant;
    /**
     * Optional property to disable the button.
     */
    disabled?: boolean;
    /**
     * Optional property to render the button with an outline style.
     */
    outline?: boolean;
}

/**
 * `RoschButtonStyled` is a styled button component that allows for extensive customization
 * based on the provided props. It supports various styles including color, size, and outline,
 * and integrates with the application's theme.
 *
 * @param {RoschButtonStyledProps} props - The properties to customize the button's appearance.
 * 
 * @returns {JSX.Element} A styled button element with the applied styles.
 */
const RoschButtonStyled = styled.button<RoschButtonStyledProps>`
    border: 0;
    cursor: pointer;
    ${(props) => generateCssProperties(props, props.theme.buttons)}
    ${generateButtonColor}
    ${generateButtonSize}
`;

export { RoschButtonStyled };
