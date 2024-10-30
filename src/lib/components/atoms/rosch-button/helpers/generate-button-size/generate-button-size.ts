import { SpacingSize, TextSize, Theme } from "../../../../../theme/theme.interface";
import { generateFontSize } from "../../../../../utils/generate-font-size/generate-font-size";

interface GenerateButtonSizeProps {
    theme: Theme;
    size?: SpacingSize;
}

/**
 * Generates the CSS styles for a button's size based on the provided theme and size.
 *
 * @param {GenerateButtonSizeProps} props - The properties including the theme and optional size.
 * @returns {string} A CSS string that styles the button's padding and font size according to the specified size.
 *                   Returns an empty string if `size` is not provided.
*/
const generateButtonSize = ({ theme, size } : GenerateButtonSizeProps) => {
    if(!size) {
        return "";
    }
    let cssProperties = `
        padding-left: ${generateFontSize(size, theme.spacings)};
        padding-right: ${generateFontSize(size, theme.spacings)};
        .rosch__text {
            font-size: ${generateFontSize(size, theme.textSizes)};
        }
  `;

    let sizeToGenerate: TextSize = "sm";

    if(size === "md" || size === "lg") {
        sizeToGenerate = "md";
    }
    if(size === "xl" || size === "xxl") {
        sizeToGenerate = "lg";
    }

    const paddingTop = generateFontSize(sizeToGenerate, theme.spacings);
    const paddingBottom = generateFontSize(sizeToGenerate, theme.spacings);

    return `
        ${cssProperties}
        padding-top: ${paddingTop};
        padding-bottom: ${paddingBottom};
    `;
};

export { generateButtonSize };