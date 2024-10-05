import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { generateRadius } from "../../../utils/generate-radius/generate-radius";

export interface RoschCheckboxStyledProps extends CssProperties{

}

const RoschCheckboxStyled = styled.div<RoschCheckboxStyledProps>`
    .checkbox__input {
        border-radius: ${({ radius }) => generateRadius(radius ?? "none")};
    }
`;

export { RoschCheckboxStyled };