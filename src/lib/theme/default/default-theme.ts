import { Theme } from "../theme.interface";

const defaultTheme : Theme = {
    name: "default-theme",
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