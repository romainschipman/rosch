import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";

/**
 * Interface for the props of the `RoschTextStyled` component.
 * Extends `CssProperties` to include additional styling options.
 *
 * @property {string} [bold] - Optional property to apply bold styling to the text.
 */
export interface RoschTextStyledProps extends CssProperties {
    bold?: string;
}

/**
 * Generates the CSS for bold text styling.
 *
 * @param props - The properties used to determine if bold styling should be applied.
 * @returns A string with the `font-weight: bold;` CSS rule if the `bold` prop is provided.
 */
const generateBold = (props: RoschTextStyledProps): string | undefined => {
  if(props.bold) {
    return "font-weight: bold;";
  }
};

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
    ${generateBold}
    letter-spacing: 0.15rem;
`;

export { RoschTextStyled };
