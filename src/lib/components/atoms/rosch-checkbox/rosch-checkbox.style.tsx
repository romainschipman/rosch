import styled from "styled-components";
import { CssProperties } from "../../../interfaces/css-properties.interface";
import { generateRadius } from "../../../utils/generate-radius/generate-radius";
import { SpacingSize } from "../../../theme/theme.interface";
import { generateSpacing } from "../../../utils/generate-spacing/generate-spacing";

export interface RoschCheckboxStyledProps extends CssProperties{
    size?: SpacingSize;
}

const RoschCheckboxStyled = styled.div<RoschCheckboxStyledProps>`
    gap: 0.5rem;
    display: flex;
    align-items: center;
    .checkbox__input {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
    }
    .checkbox__input {
        width: ${({ size }) => generateSpacing(size ?? "md")};
        height: ${({ size }) => generateSpacing(size ?? "md")};
        background-color: transparent;
        border: 1px solid black;
        border-radius: ${({ radius }) => generateRadius(radius ?? "none")};
        
        &:checked {
            background-color: ${({ theme }) => theme.themeColors?.main?.primary?.highest};
        }
    }
`;

export { RoschCheckboxStyled };