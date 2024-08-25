import { defaultTheme } from "../../theme/default/default-theme";
import { TextSize } from "../../theme/theme.interface";

const generateFontSize = (fontSize: TextSize, fontSizes: Record<TextSize, string>) => {
  if(!fontSizes) {
    return defaultTheme.textSizes[fontSize];
  }
  return fontSizes[fontSize];
};

export { generateFontSize };