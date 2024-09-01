import { ThemeColorPalette } from "../../src/lib/theme/color.interface";

const defaultThemeColorsMock: ThemeColorPalette = {
    inputs: {
        primary: {
            default: {
                color: "inputs_primary_color",
                onColor: "inputs_primary_onColor"
            }
        }
    },
    buttons: {
        primary: {
            default: {
                color: "buttons_primary_color",
                onColor: "buttons_primary_onColor"
            }
        }
    }
};

export { defaultThemeColorsMock };
