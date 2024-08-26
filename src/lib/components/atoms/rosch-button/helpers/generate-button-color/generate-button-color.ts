import { ColorType, Theme } from "../../../../../theme/theme.interface";

//TODO: [COLOR] waiting for change token and generatePalette

interface GenerateButtonColorProps {
    theme: Theme;
    colorType?: ColorType;
    outline?: boolean;
    disabled?: boolean;
}

const generateButtonColor = ({ theme, outline, disabled, colorType }: GenerateButtonColorProps) => {
  if(!colorType || !theme.colors[colorType]) {
    let backgroundColor = theme.colors.primary.base;
    let color = theme.colors.light.lightest;
    let border = "0";
    if(outline) {
      backgroundColor = theme.colors.light.lightest;
      color = theme.colors.primary.base;
      border = `0.05rem solid ${theme.colors.primary.base}`;
    }
    if(disabled) {
      backgroundColor = theme.colors.light.darkest;
      color = theme.colors.light.base;
      border = "0";    
    }
    if(disabled && outline) {
      backgroundColor = theme.colors.light.base;
      color = theme.colors.light.darkest;
      border = `0.05rem solid ${theme.colors.light.darkest}`;    
    }
    return `
        background-color: ${backgroundColor};
        color: ${color};
        border: ${border};
    `;
  }

  let backgroundColor = theme.colors[colorType].base;
  let color = theme.colors.light.lightest;
  let border = "0";

  if(outline) {
    backgroundColor = theme.colors.light.lightest;
    color = theme.colors[colorType].base;
    border = `0.05rem solid ${theme.colors[colorType].base}`;
  }
  if(disabled) {
    backgroundColor = theme.colors.light.darkest;
    color = theme.colors.light.base;
    border = "0";    
  }
  if(disabled && outline) {
    backgroundColor = theme.colors.light.base;
    color = theme.colors.light.darkest;
    border = `0.05rem solid ${theme.colors.light.darkest}`;    
  }
  return `
        background-color: ${backgroundColor};
        color: ${color};
        border: ${border};
  `;
};

export { generateButtonColor };