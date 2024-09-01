import { Theme } from "../theme.interface";

const defaultTheme : Theme = {
  name: "default-theme",
  colors: {
    primary: {
      lightest: "#cce5ff",
      light: "#66b2ff",
      base: "#007bff",
      dark: "#0056b3",
      darkest: "#003d80",
    },
    secondary: {
      lightest: "#e2e3e5",
      light: "#a6a9ad",
      base: "#6c757d",
      dark: "#494e52",
      darkest: "#343a40",
    },
    success: {
      lightest: "#d4edda",
      light: "#5cd67e",
      base: "#28a745",
      dark: "#1e7b32",
      darkest: "#155724",
    },
    danger: {
      lightest: "#f8d7da",
      light: "#ff6b75",
      base: "#dc3545",
      dark: "#a62630",
      darkest: "#721c24",
    },
    warning: {
      lightest: "#fff3cd",
      light: "#ffdf5d",
      base: "#ffc107",
      dark: "#b38600",
      darkest: "#856404",
    },
    info: {
      lightest: "#d1ecf1",
      light: "#5bc8e7",
      base: "#17a2b8",
      dark: "#11667f",
      darkest: "#0c5460",
    },
    light: {
      lightest: "#fefefe",
      light: "#f8f9fa",
      base: "#e2e3e5",
      dark: "#c7c8c9",
      darkest: "#818182",
    },
    dark: {
      lightest: "#6c757d",
      light: "#5a6268",
      base: "#343a40",
      dark: "#1d2124",
      darkest: "#121416",
    },
  },
  
  textSizes: {
    xs: "0.5rem", // 12px
    sm: "0.75rem", // 14px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    xxl: "2rem", // 32px
  },
  defaultTextSize: "md",
  
  spacings: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
  },
  defaultSpacing: "md",
  
  radiusSizes: {
    none: "0px",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "1rem", // 16px
    xxl: "1.5rem", // 24px
    pills: "50rem", // Pour les éléments en forme de pilule
  },
  defaultRadiusSize: "md",
  
  buttons: {
    radius: "md",
    paddingHorizontal: "xl",
    paddingVertical: "md",
  },
  
  inputs: {
    radius: "lg",
    paddingHorizontal: "md",
    paddingVertical: "md",
  },
};

export { defaultTheme };