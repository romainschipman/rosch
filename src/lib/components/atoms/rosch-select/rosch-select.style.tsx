import styled from "styled-components";
import {
    generateInputColor,
    generateInputLabelColor
} from "../rosch-input/helpers/generate-input-color/generate-input-color";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";
import { generateInputSize } from "../rosch-input/helpers/generate-input-size/generate-input-size";
import { CssProperties } from "../../../interfaces/css-properties.interface";

export interface  RoschSelectStyledProps extends CssProperties {

}

const RoschSelectStyled = styled.div<RoschSelectStyledProps>`
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    ${generateInputLabelColor}

    .rosch__select {
        ${(props) => generateCssProperties(props, props.theme.inputs)}
        ${generateInputSize}
        ${generateInputColor}
        letter-spacing: 0.15rem;
    }
`;

export { RoschSelectStyled };