import { TextSize, Theme } from "../../../../../theme/theme.interface";
import { generateFontSize } from "../../../../../utils/generate-font-size/generate-font-size";


interface GenerateTextFontSizeProps {
    theme: Theme,
    fontSize?: TextSize
}
/**
 * Generates the CSS for font size based on the provided theme and optional font size.
 * 
 * This function determines the font size to apply to a text element by first checking the `fontSize` prop.
 * If `fontSize` is not provided, it defaults to the theme's `defaultTextSize`.
 * If neither are available, it falls back to a medium size ("md").
 *
 * @param {Object} props - The properties used to determine the font size.
 * @param {Theme} props.theme - The theme object containing text size configurations.
 * @param {TextSize} [props.fontSize] - An optional font size to override the theme's default.
 * 
 * @returns {string} A string containing the CSS rule for the font size.
 * 
 */
const generateTextFontSize = (props: GenerateTextFontSizeProps) => {

  let fontSize = props.theme.defaultTextSize;
  if(props.fontSize) {
    fontSize = props.fontSize;
  }
  if(!fontSize) {
    fontSize = "md";
  }
  return `
          font-size: ${generateFontSize(fontSize, props.theme.textSizes)};
      `;
};

export { generateTextFontSize };
