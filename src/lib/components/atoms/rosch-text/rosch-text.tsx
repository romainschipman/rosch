import { FunctionComponent } from "react";
import { RoschTextStyled, RoschTextStyledProps } from "./rosch-text.style";
import classNames from "classnames";

/**
 * Props for the RoschText component.
 * 
 * @interface RoschTextProps
 * @extends {RoschTextStyledProps}
 * @property {string} children - The content to be rendered inside the text component.
 */
export interface RoschTextProps extends RoschTextStyledProps {
  /**
   * The content to be rendered inside the text component.
   */
    children: string
}

/**
 * `RoschText` is a functional component that renders styled text.
 * It wraps the `RoschTextStyled` component, passing down all props
 * and rendering any children within the styled text element.
 *
 * @param {RoschTextProps} props - The properties passed to the component.
 *
 * @example
 * ```tsx
 * <RoschText bold="true" fontSize="lg">
 *   Bold and large text
 * </RoschText>
 * ```
 *
 * @returns A JSX element with styled text.
 */
const RoschText : FunctionComponent<RoschTextProps> = ({ children, className, ...props }) => {
  return(
    <RoschTextStyled className={classNames("rosch__text", className)} { ...props } >
      { children }
    </RoschTextStyled>
  );
};

export { RoschText };