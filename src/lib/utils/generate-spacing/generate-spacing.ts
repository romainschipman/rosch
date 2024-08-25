import { defaultTheme } from "../../theme/default/default-theme";
import { SpacingSize } from "../../theme/theme.interface";

const generateSpacing = (spacing: SpacingSize, spacingSizes?: Record<SpacingSize, string>) => {
  if(!spacingSizes) {
    return defaultTheme.spacings[spacing];
  }
  return spacingSizes[spacing];
};

export { generateSpacing };