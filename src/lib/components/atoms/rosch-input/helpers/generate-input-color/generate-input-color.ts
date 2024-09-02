import { ThemeColorVariant } from "../../../../../theme/color.interface";
import { Theme } from "../../../../../theme/theme.interface";

interface GenerateInputColorProps {
    theme: Theme,
    colorVariant?: ThemeColorVariant
    readOnly?: boolean;
    error?: string;
}

/**
 * Generates the CSS styles for an input field based on the provided theme, color variant, and input states.
 *
 * @param {GenerateInputColorProps} props - The properties including the theme, color variant, read-only state, and error state.
 * @returns {string} A CSS string that styles the input's outline based on the specified parameters.
 *                   The function handles different states like `error`, `readOnly`, and the `colorVariant`.
 */
const generateInputColor = ({ theme, colorVariant, readOnly, error }: GenerateInputColorProps) => {

  const isNotPrimaryColor = (colorVariant !== "secondary" && colorVariant !== "primary" && colorVariant !== "tertiary");

  if (!colorVariant || isNotPrimaryColor) {
    colorVariant = "primary";
  }

  const inputColors = theme.themeColors?.inputs;


  let cssProprerties = `
        border: none;
        outline: 0.05rem solid black;
    `;

  if (!inputColors) {
    return cssProprerties;
  }

  cssProprerties = `
        border: none;
        outline: 0.05rem solid ${inputColors[colorVariant]?.default?.color};
    `;

  if (!!error) {
    cssProprerties += `
        outline: 0.05rem solid ${inputColors.danger?.default?.color};
    `;
    return cssProprerties;
  }

  if (readOnly) {
    cssProprerties += `
            outline: 0.05rem solid ${inputColors[colorVariant]?.read_only?.onColor};
            &:focus {
                outline: 0.1rem solid ${inputColors[colorVariant]?.focus?.onColor};
            }
            &:disabled {
                outline: 0.05rem solid ${inputColors[colorVariant]?.disabled?.onColor};
            }
        `;
    return cssProprerties;
  }

  cssProprerties += `
        &:focus {
            outline: 0.05rem solid ${inputColors[colorVariant]?.focus?.color};
        }

        &:disabled {
            outline: 0.05rem solid ${inputColors[colorVariant]?.disabled?.onColor};
        }
    `;
  return cssProprerties;

};

interface GenerateInputLabelColorProps {
    theme: Theme,
    error?: string;
}


const generateInputLabelColor = ({ error, theme }: GenerateInputLabelColorProps) => {
  if (!!error) {

    if(!theme.themeColors?.inputs?.danger) {
      return "";
    }

    return `
        .rosch__input__label {
            color: ${theme.themeColors?.inputs?.danger?.default?.color}
        }
    `;
  }

  return "";
};
  

export { generateInputColor, generateInputLabelColor };