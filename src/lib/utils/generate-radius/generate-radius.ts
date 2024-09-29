import { defaultTheme } from "../../theme/default/default-theme";
import { RadiusSize } from "../../theme/theme.interface";

const generateRadius = (radius: RadiusSize, radiusSizes?: Record<RadiusSize, string>) => {
    if(!radiusSizes) {
        return defaultTheme.radiusSizes[radius];
    }
    return radiusSizes[radius];
};

export { generateRadius };