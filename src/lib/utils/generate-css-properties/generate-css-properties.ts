import { CssProperties } from "../../interfaces/css-properties.interface";
import { Theme } from "../../theme/theme.interface";
import { generateFontSize } from "../generate-font-size/generate-font-size";
import { generateRadius } from "../generate-radius/generate-radius";
import { generateSpacing } from "../generate-spacing/generate-spacing";

/**
 * Interface that extends `CssProperties` to include a `theme` property.
*/
export interface Theming extends CssProperties {
  theme: Theme;
}

/**
* Generates a string of CSS properties based on the provided theming properties.
*
* @param props - The properties used to generate the CSS. Includes CSS properties and theme information.
* @param defaultValues - Optional default values for CSS properties that can be used as fallback.
* @returns A string containing the generated CSS properties.
*/
const generateCssProperties = (props : Theming, defaultValues ?: CssProperties ) => {
  let cssProperties : string = "";

  const {
    defaultTextSize: textSizeTheme,
    textSizes,
    defaultRadiusSize: radiusSizeTheme,
    radiusSizes,
    spacings
  } = props.theme;

  const {
    fontSize: defaultTextSize,
    width: defaultWidth,
    height: defaultHeight,
    maxWidth: defaultMaxWidth,
    maxHeight: defaultMaxHeight,
    radius: defaultRadiusSize,
    padding: defaultPadding,
    paddingHorizontal: defaultPaddingHorizontal,
    paddingVertical: defaultPaddingVertical
  } = defaultValues ?? {};

  const {
    fontSize: textSizeProps,
    width: widthProps,
    height: heightProps,
    maxWidth: maxWidthProps,
    maxHeight: maxHeightProps,
    radius: radiusSizeProps,
    padding: paddingProps,
    paddingHorizontal: paddingHorizontalProps,
    paddingVertical: paddingVerticalProps
  } = props;


  let textSize = textSizeTheme;
  if(defaultTextSize) {
    textSize = defaultTextSize;
  }
  if(textSizeProps) {
    textSize = textSizeProps;
  }

  if(textSize) {
    cssProperties += `font-size:${generateFontSize(textSize, textSizes)};`;
  }

  let radius = radiusSizeTheme;
  if(defaultRadiusSize) {
    radius = defaultRadiusSize;
  }
  if(radiusSizeProps) {
    radius = radiusSizeProps;
  }

  if(radius) {
    cssProperties += `border-radius:${generateRadius(radius, radiusSizes)};`;
  }

  let width = defaultWidth;
  if(widthProps) {
    width = widthProps;
  }

  if(width) {
    cssProperties += `width:${width};`;
  }

  let height = defaultHeight;
  if(heightProps) {
    height = heightProps;
  }

  if(height) {
    cssProperties += `height:${height};`;
  }

  let maxWidth = defaultMaxWidth;
  if(maxWidthProps) {
    maxWidth = maxWidthProps;
  }

  if(maxWidth) {
    cssProperties += `max-width:${maxWidth};`;
  }

  let maxHeight = defaultMaxHeight;
  if(maxHeightProps) {
    maxHeight = maxHeightProps;
  }

  if(maxHeight) {
    cssProperties += `max-height:${maxHeight};`;
  }

  let padding = defaultPadding;
  if(paddingProps) {
    padding = paddingProps;
  }

  if(padding) {
    cssProperties += `padding:${generateSpacing(padding, spacings)};`;
  }

  let paddingHorizontal = defaultPaddingHorizontal;
  if(paddingHorizontalProps) {
    paddingHorizontal = paddingHorizontalProps;
  }

  if(paddingHorizontal) {
    cssProperties += `
    padding-left:${generateSpacing(paddingHorizontal, spacings)};
    padding-right:${generateSpacing(paddingHorizontal, spacings)};
  `;
  }


  let paddingVertical = defaultPaddingVertical;
  if(paddingVerticalProps) {
    paddingVertical = paddingVerticalProps;
  }

  if(paddingVertical) {
    cssProperties += `
    padding-top:${generateSpacing(paddingVertical, spacings)};
    padding-bottom:${generateSpacing(paddingVertical, spacings)};
  `;
  }

  return cssProperties;
};

export { generateCssProperties };