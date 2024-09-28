interface GenerateTextDecorationProps {
    isBold?: boolean;
    isUnderline?: boolean;
    isUppercase?: boolean;
}


/**
 * Generates the CSS for text decoration based on the provided properties.
 * This includes bold and underline styling.
 *
 * @param props - The properties used to determine if bold and/or underline styling should be applied.
 * @returns A string containing the appropriate CSS rules, such as `font-weight: bold;` and `text-decoration: underline;`, 
 *          if the corresponding props are provided. Returns an empty string if no relevant props are provided.
 */
const generateTextDecoration = ({ isBold, isUnderline, isUppercase }: GenerateTextDecorationProps): string | undefined => {
    let cssProperties = "";
  
    if(isBold) {
        cssProperties += "font-weight: bold;";
    }
  
    if(isUnderline) {
        cssProperties += "text-decoration: underline;";
    }
  
    if(isUppercase) {
        cssProperties += "text-transform: uppercase;";
    }
  
    return cssProperties;
};

export { generateTextDecoration };