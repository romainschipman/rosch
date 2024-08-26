import { SpacingSize, Theme } from "../../../../../theme/theme.interface";
import { generateFontSize } from "../../../../../utils/generate-font-size/generate-font-size";

interface GenerateButtonSizeProps {
    theme: Theme;
    size?: SpacingSize;
}

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

export { generateButtonSize };