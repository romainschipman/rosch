import { ThemeColorVariant } from "src/lib/theme/color.interface";
import { Theme } from "../../../../../theme/theme.interface";

interface GenerateButtonColorProps {
    theme: Theme;
    colorVariant?: ThemeColorVariant;
    outline?: boolean;
    disabled?: boolean;
}

/**
 * Generates the CSS styles for a button based on the provided theme, color variant, and button states.
 *
 * @param {GenerateButtonColorProps} props - The properties including the theme, color variant, outline, and disabled states.
 * @returns {string} A CSS string that styles the button according to the specified parameters. 
 *                   Returns an empty string if the color variant or state is not found.
 */
const generateButtonColor = ({ theme, outline, disabled, colorVariant }: GenerateButtonColorProps) => {

  if(!colorVariant) {
    colorVariant = "primary";
  }

  const buttonColors = theme.themeColors?.buttons;
  if(buttonColors) {
    if(outline && !disabled) {

      if(!buttonColors[colorVariant]?.default) {
        return "";
      }

      return `
      background-color: ${buttonColors[colorVariant]?.default?.color};
      .rosch__text {
        color: ${buttonColors[colorVariant]?.default?.onColor};
      }
      border: 0.05rem solid  ${buttonColors[colorVariant]?.default?.onColor};
      `;
    }

    if(outline && disabled) {

      if(!buttonColors[colorVariant]?.disabled) {
        return "";
      }

      return `
      background-color: ${buttonColors[colorVariant]?.disabled?.color};
      color: ${buttonColors[colorVariant]?.disabled?.onColor};
      .rosch__text {
        color: ${buttonColors[colorVariant]?.disabled?.onColor};
      }
      border: 0.05rem solid  ${buttonColors[colorVariant]?.disabled?.onColor};
      `;
    }

    if(!outline && disabled) {

      if(!buttonColors[colorVariant]?.disabled) {
        return "";
      }

      return `
        background-color: ${buttonColors[colorVariant]?.disabled?.onColor};
        color: ${buttonColors[colorVariant]?.disabled?.color};
        .rosch__text {
          color: ${buttonColors[colorVariant]?.disabled?.color};
        }
      `;
    }

    if(!buttonColors[colorVariant]?.default) {
      return "";
    }

    return `
      background-color: ${buttonColors[colorVariant]?.default?.onColor};
      color: ${buttonColors[colorVariant]?.default?.color};
      .rosch__text {
        color: ${buttonColors[colorVariant]?.default?.color};
      }
    `;

  }

  return "";
};

export { generateButtonColor };