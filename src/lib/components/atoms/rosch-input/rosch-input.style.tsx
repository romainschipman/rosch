import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";
import { TextSize } from "../../../theme/theme.interface";
import { generateInputSize } from "./helpers/generate-input-size/generate-input-size";
import { generateInputColor, generateInputLabelColor } from "./helpers/generate-input-color/generate-input-color";

import { ThemeColorVariant } from "src/lib/theme/color.interface";

/**
 * Props for the `RoschInputStyled` component.
 *
 * Extends `CssProperties` to include additional properties such as `fontSize`, `disabled`, `readOnly`, and `error`.
 *
 * @interface RoschInputStyledProps
 * @extends {CssProperties}
 * 
 * @property {TextSize} [fontSize] - Optional property to specify the font size of the input.
 * @property {boolean} [disabled] - Optional property to disable the input field.
 * @property {boolean} [readOnly] - Optional property to render the input as read-only.
 * @property {string} [error] - Optional property to indicate an error state, typically used for displaying error messages.
 * @property {ThemeColorVariant} [colorVariant] -  Optional property to apply a specific color type from the theme.
 */
export interface RoschInputStyledProps extends CssProperties {
    /**
     * Optional property to specify the font size of the input.
     */
    fontSize?: TextSize;
    /**
     * Optional property to disable the input field.
     * @default false
     */
    disabled?: boolean;
    /**
     * Optional property to render the input as read-only.
     * @default false
     */
    readOnly?: boolean;
    /**
     * Optional property to indicate an error state, typically used for displaying error messages.
     */
    error?: string;
    /**
     * Optional property to indicate an error state, typically used for displaying error messages.
     */
    colorVariant?: ThemeColorVariant;
}

/**
 * `RoschInputStyled` is a styled component that renders an input field with customizable styles
 * based on the provided props. It allows for various configurations such as font size, 
 * disabled state, read-only mode, and error handling.
 *
 * The component uses `styled-components` to apply styles dynamically, including generating
 * CSS properties via the `generateCssProperties` utility function.
 *
 * @param {RoschInputStyledProps} props - The properties to customize the input's appearance and behavior.
 * 
 * @returns {JSX.Element} A styled `div` element containing the input field and any additional content.
 */
const RoschInputStyled = styled.div<RoschInputStyledProps>`
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    ${generateInputLabelColor}
    .rosch__input {
        ${(props) => generateCssProperties(props, props.theme.inputs)}
        ${generateInputSize}
        ${generateInputColor}
        letter-spacing: 0.15rem;
    }
`;

export { RoschInputStyled };
