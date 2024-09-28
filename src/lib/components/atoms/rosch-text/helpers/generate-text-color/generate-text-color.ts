import { ThemeColorVariant } from "../../../../../theme/color.interface";
import { Theme } from "../../../../../theme/theme.interface";

interface GenerateTextColorProps {
    theme: Theme;
    colorVariant?: ThemeColorVariant;
}

/**
 * Generates the CSS for text color based on the provided theme and color type.
 *
 * @param {GenerateTextColorProps} props - The properties including the theme and the optional color type.
 * @returns {string} A CSS string to set the text color based on the specified color type. 
 *                   Returns an empty string if `colorType` is not provided.
 *
 */
const generateTextColor = ({ theme, colorVariant } : GenerateTextColorProps) => {

    if(!colorVariant) {
        colorVariant = "primary";
    }

    if(theme.themeColors?.texts) {
        const textColor = theme.themeColors.texts[colorVariant]?.default?.color;

        if(!textColor) {
            return "";
        }

        return `
      color: ${textColor};
    `;
    }

    return "";
};

export { generateTextColor };