import { ColorType, Theme } from "../../../../../theme/theme.interface";

interface GenerateTextColorProps {
    theme: Theme;
    colorType?: ColorType;
}

/**
 * Generates the CSS for text color based on the provided theme and color type.
 *
 * @param {GenerateTextColorProps} props - The properties including the theme and the optional color type.
 * @returns {string} A CSS string to set the text color based on the specified color type. 
 *                   Returns an empty string if `colorType` is not provided.
 *
 * @example
 * ```typescript
 * const theme = {
 *   colors: {
 *     primary: { base: "#007bff" },
 *     secondary: { base: "#6c757d" },
 *     // other colors...
 *   },
 *   // other theme properties...
 * };
 *
 * const cssColor = generateTextColor({ theme, colorType: "primary" });
 * // cssColor is "color: #007bff;"
 * ```
 */
const generateTextColor = ({ theme, colorType } : GenerateTextColorProps) => {
  if(!colorType) {
    return "";
  }
  if(!theme.colors[colorType]) {
    return "";
  }
  let colorPalette = theme.colors[colorType];
  return `color: ${colorPalette.base};`;
};

export { generateTextColor };