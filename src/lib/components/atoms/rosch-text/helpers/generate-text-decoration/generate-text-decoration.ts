interface GenerateTextDecorationProps {
    bold?: boolean;
    underline?: boolean;
    uppercase?: boolean;
}


/**
 * Generates the CSS for text decoration based on the provided properties.
 * This includes bold and underline styling.
 *
 * @param props - The properties used to determine if bold and/or underline styling should be applied.
 * @returns A string containing the appropriate CSS rules, such as `font-weight: bold;` and `text-decoration: underline;`, 
 *          if the corresponding props are provided. Returns an empty string if no relevant props are provided.
 */
const generateTextDecoration = ({ bold, underline, uppercase }: GenerateTextDecorationProps): string | undefined => {
  let cssProperties = "";
  
  if(bold) {
    cssProperties += "font-weight: bold;";
  }
  
  if(underline) {
    cssProperties += "text-decoration: underline;";
  }
  
  if(uppercase) {
    cssProperties += "text-transform: uppercase;";
  }
  
  return cssProperties;
};

export { generateTextDecoration };