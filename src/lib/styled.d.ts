import { Theme } from "./theme/theme.interface";


declare module "styled-components" {
    export interface DefaultTheme extends Theme {

    }
}