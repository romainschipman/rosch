import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { ColorType } from "../../../theme/theme.interface";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";
import { generateButtonColor } from "./helpers/generate-button-color/generate-button-color";
import { generateButtonSize } from "./helpers/generate-button-size/generate-button-size";

/**
 * Interface for the props of the `RoschButtonStyled` component.
 * Extends `CssProperties` to include additional styling options.
 *
 * @interface RoschButtonStyledProps
 * @extends {CssProperties}
 * 
 * @property {ColorType} [colorType] - Optional property to apply a specific color type from the theme.
 * @property {boolean} [disabled] - Optional property to disable the button.
 * @property {boolean} [outline] - Optional property to render the button with an outline style.
 */
export interface RoschButtonStyledProps extends CssProperties {
    /**
     * Optional property to apply a specific color type from the theme.
     */
    colorType?: ColorType;
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
 * @example
 * ```tsx
 * <RoschButtonStyled colorType="primary" outline>
 *   Primary Button
 * </RoschButtonStyled>
 * ```
 * 
 * @example
 * ```tsx
 * <RoschButtonStyled colorType="secondary" disabled>
 *   Disabled Button
 * </RoschButtonStyled>
 * ```
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
