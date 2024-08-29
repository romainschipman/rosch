import { FunctionComponent, MouseEvent, ReactNode } from "react";
import { RoschButtonStyled, RoschButtonStyledProps } from "./rosch-button.style";
import { RoschText } from "../rosch-text/rosch-text";
import cx from "classnames";

/**
 * Props for the `RoschButton` component.
 *
 * Extends `RoschButtonStyledProps` to include additional properties such as `onClick`, `children`, and `label`.
 *
 * @extends {RoschButtonStyledProps}
 * 
 * @property {ReactNode} [children] - The content to be rendered inside the button. If not provided, the `label` will be used.
 * @property {string} [label="Valider"] - The text to display inside the button if `children` is not provided.
 * @property {boolean} [disabled] - If true, the button will be disabled and unclickable.
 * @property {(e: MouseEvent<HTMLButtonElement>) => void} [onClick] - Function to call when the button is clicked.
 */
export interface RoschButtonProps extends RoschButtonStyledProps {
    /**
     *  Function to call when the button is clicked.
     * @param e  The event triggered by the user's click on the button.
     * @returns void;
     */
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    /**
     * The content to be rendered inside the button. If not provided, the `label` will be used.
     */
    children?: ReactNode;
    /**
     * The text to display inside the button if `children` is not provided.
     */
    label?: string;
}

/**
 * `RoschButton` is a functional component that renders a styled button.
 * It can display custom content passed via `children`, or fall back to using the `label` prop if `children` is not provided.
 * The button handles click events and can be disabled.
 *
 * @param {RoschButtonProps} props - The properties passed to the button component.
 * 
 * @example
 * ```tsx
 * <RoschButton onClick={handleClick} label="Submit" />
 * ```
 * 
 * @example
 * ```tsx
 * <RoschButton onClick={handleClick} disabled>
 *   Disabled Button
 * </RoschButton>
 * ```
 *
 * @returns {JSX.Element} A JSX element with styled button content.
 */
const RoschButton: FunctionComponent<RoschButtonProps> = ({ children, label="Valider", onClick, disabled, className, ...props }) => {

  /**
   * Determines the content to display inside the button.
   * If `children` is provided, it is rendered. Otherwise, the `label` prop is used.
   *
   * @returns {ReactNode} The content to be rendered inside the button.
   */
  const displayButtonText = () => {
    if(!!children) {
      return children;
    }

    return <RoschText id="rosch__button__text">{label}</RoschText>;
  };

  /**
   * Handles the button click event.
   * This function checks if the button is not disabled and whether an `onClick` handler is provided.
   * If both conditions are met, it triggers the `onClick` handler with the event.
   *
   * @param {MouseEvent<HTMLButtonElement>} e - The event triggered by the user's click on the button.
  */
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if(!disabled && !!onClick) {
      onClick(e);
    }
  };

  return (
    <RoschButtonStyled className={cx("rosch__button", className)} disabled={disabled} onClick={handleClick} {...props}>
      {displayButtonText()}
    </RoschButtonStyled>
  );
};

export { RoschButton };
