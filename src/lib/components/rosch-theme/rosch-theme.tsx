import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../theme/theme.interface";
import { defaultTheme } from "../../theme/default/default-theme";
import { ThemeColorPalette } from "../../theme/color.interface";
import { generateColorsPalette } from "../../utils/generate-colors-palette/generate-colors-palette";

/**
 * Props for the RoschTheme component.
 *
 * @interface RoschThemeProps
 * @property {Theme} [theme] - The custom theme to apply. If not provided, the default theme will be used.
 * @property {ReactNode} children - The child components that will be wrapped by the theme provider.
 */
export interface RoschThemeProps {
    /**
     * The custom theme to apply. If omitted, the `defaultTheme` will be used.
     */
    theme?: Theme
    /**
     * Optional color overrides or extensions for the theme.
     */
    colors?: ThemeColorPalette
    /**
     * The child components that will be rendered within the themed context.
     */
    children: ReactNode
}

/**
 * RoschTheme is a component that wraps its children with a theme provider, applying the theme styles to all
 * the nested components within the application. This allows for consistent styling throughout the app.
 *
 * If no custom `theme` is provided, the component defaults to using the `defaultTheme`.
 * Additionally, the `colors` prop can be used to supply a custom color palette, which will be merged with the theme's
 * default color settings. The `generateColorsPalette` utility function ensures that any missing colors are filled
 * with sensible defaults.
 *
 * The component leverages `styled-components`' `ThemeProvider` to inject the theme into the component tree, making
 * the theme available to all styled-components within the app.
 *
 * @param {RoschThemeProps} props - The properties required to configure the theme provider.
 * @example
 * ```tsx
    <RoschTheme theme={customTheme} colors={customColors}>
      <div>
        <h1>Welcome to My Themed App</h1>
        <Button variant="primary">Click Me</Button>
      </div>
    </RoschTheme>
 * ```
 * 
 * @returns {React.ReactElement} A `ThemeProvider` component that applies the theme to its children.
 */
const RoschTheme : FunctionComponent<RoschThemeProps> = ({ theme, colors, children }) => {

    if(!theme) {
        theme = defaultTheme;
    }

    const themeColors = generateColorsPalette(colors);

    return (
        <ThemeProvider theme={{ ...theme, themeColors }}>
            {children}
        </ThemeProvider>
    );
};

export { RoschTheme };