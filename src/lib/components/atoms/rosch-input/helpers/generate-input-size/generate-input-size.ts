import { SpacingSize, TextSize, Theme } from "../../../../../theme/theme.interface";
import { generateFontSize } from "../../../../../utils/generate-font-size/generate-font-size";

interface GenerateInputSizeProps {
    theme: Theme;
    size?: SpacingSize;
    fontSize?: TextSize;
}

/**
 * Generates the CSS for input size based on the provided theme, size, and font size.
 * 
 * This function dynamically generates CSS properties for padding and font size
 * based on the `size` and `fontSize` values passed in. It uses the `theme` object to
 * retrieve spacing and text size values.
 * 
 * @param {GenerateInputSizeProps} props - The properties required to generate input size CSS.
 * @param {Theme} props.theme - The theme object containing spacing and text size information.
 * @param {SpacingSize} [props.size] - Optional size property to determine padding and spacing.
 * @param {TextSize} [props.fontSize] - Optional font size property to determine the font size.
 * 
 * @returns {string} The generated CSS for the input size, or an empty string if neither `size` nor `fontSize` are provided.
*/
const generateInputSize = ({ theme, fontSize, size } : GenerateInputSizeProps) => {
    if(!fontSize || !size) {
        if(!size && fontSize) {
            return `font-size: ${generateFontSize(fontSize, theme.textSizes)};`;
        }
        return "";
    }

    let cssProperties = `
        padding-left: ${generateFontSize(size, theme.spacings)};
        padding-right: ${generateFontSize(size, theme.spacings)};
        font-size: ${generateFontSize(fontSize, theme.textSizes)};
  `;

    if(size === "xs" || size === "sm") {
        return `
        ${cssProperties}
        padding-top: ${generateFontSize("sm", theme.spacings)};
        padding-bottom: ${generateFontSize("sm", theme.spacings)};
    `;
    }
    if(size === "md" || size === "lg") {
        return `
        ${cssProperties}
        padding-top: ${generateFontSize("md", theme.spacings)};
        padding-bottom: ${generateFontSize("md", theme.spacings)};
    `;
    }

    if(size === "xl" || size === "xxl") {
        return `
        ${cssProperties}
        padding-top: ${generateFontSize("lg", theme.spacings)};
        padding-bottom: ${generateFontSize("lg", theme.spacings)};
    `;
    }

};

export { generateInputSize };