import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../theme/theme.interface";
import { defaultTheme } from "../../theme/default/default-theme";

/**
 * Props for the RoschTheme component.
 *
 * @interface RoschThemeProps
 * @property {Theme} [theme] - The custom theme to apply. If not provided, the default theme will be used.
 * @property {ReactNode} children - The child components that will be wrapped by the theme provider.
 */
export interface RoschThemeProps {
    theme?: Theme
    children: ReactNode
}

/**
 * The RoschTheme component that wraps the application with a theme.
 * If no custom theme is provided, the default theme will be applied.
 *
 * @param {RoschThemeProps} props - The props for the component.
 * @returns {React.ReactElement} The themed application wrapper.
 */
const RoschTheme : FunctionComponent<RoschThemeProps> = ({ theme, children }) => {

  if(!theme) {
    theme = defaultTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export { RoschTheme };